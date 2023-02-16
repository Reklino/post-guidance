/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import reset from "./styles/reset";
import globalStyles from "./styles/globalStyles";
import "./App.css";
import Stack from "./components/Stack";
import Spread from "./components/Spread";
import Input from "./components/Input";
import tokens from "./styles/tokens";
import Type from "./components/Type";
import BlobFish from "./blobfish.gif";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function App() {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(20);
  const [apiDelay, setApiDelay] = useState(50);
  const [debouncedTitle] = useDebounce(title, (rate + apiDelay) * 10);
  const [helperText, setHelperText] = useState(false);

  useEffect(() => {
    if (/debounce|Debounce/.test(debouncedTitle)) {
      setHelperText(`We don't talk about debounce 🤫`);
    } else {
      setHelperText(false);
    }
  }, [debouncedTitle]);

  return (
    <div className="App">
      <Global
        styles={css`
          ${reset}
          ${globalStyles}
        `}
      />
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 600px 1fr;
          padding: ${tokens.spacer.live["2xl"]}px;
        `}
      >
        <Stack
          gap={tokens.spacer.live.xl}
          customCss={css`
            grid-column: 2/3;
          `}
        >
          <Stack>
            <Type fontStyle="HeadingBold32">
              Post Guidance Test{" "}
              <img
                alt="blobfish"
                css={css`
                  width: 30px;
                  height: 30px;
                `}
                src={BlobFish}
              />
            </Type>
            <Type fontStyle="BodyReg16" align="left">
              Adjust the slider to change the debounce rate, then use the input
              to test out the experience. "Debounce" is the non-allowed phrase.
            </Type>
          </Stack>
          <Spread items={3} gap={20}>
            <Stack>
              <Type fontStyle="BodySemi14">Debounce rate</Type>
              <Spread>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
                <Type fontStyle="BodyReg12">{rate * 10}ms</Type>
              </Spread>
            </Stack>
            <Stack>
              <Type fontStyle="BodySemi14">API call mock delay</Type>
              <Spread>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={apiDelay}
                  onChange={(e) => setApiDelay(Number(e.target.value))}
                />
                <Type fontStyle="BodyReg12">{apiDelay * 10}ms</Type>
              </Spread>
            </Stack>
            <Stack gap={0}>
              <Type fontStyle="BodySemi14">Total delay</Type>
              <Type fontStyle="HeadingBold24">{(rate + apiDelay) * 10}</Type>
            </Stack>
          </Spread>
          <Input
            label="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!helperText}
            helperText={helperText}
          />
        </Stack>
      </div>
    </div>
  );
}

export default App;
