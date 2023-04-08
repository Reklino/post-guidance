/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import reset from "./styles/reset";
import globalStyles from "./styles/globalStyles";
import Stack from "./components/Stack";
import Spread from "./components/Spread";
import Input from "./components/Input";
import tokens from "./styles/tokens";
import Type from "./components/Type";
import BlobFish from "./blobfish.gif";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Guidance from "./components/Guidance";
import { useRecoilState } from "recoil";
import postGuidancesState from "./atoms/postGuidancesState";
import Textarea from "./components/Textarea";
import Button from "./components/Button";
import Flex from "./components/Flex";
import IconContainer from "./components/IconContainer";
import Dropdown from "./components/Dropdown";

function arrayUnique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
}

const bodyStatusStates = {
  optional: {
    name: "Body optional",
  },
  required: {
    name: "Body required",
  },
};

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rate, setRate] = useState(10);
  const [apiDelay, setApiDelay] = useState(10);
  const [debouncedTitle] = useDebounce(title, (rate + apiDelay) * 10);
  const [debouncedBody] = useDebounce(body, (rate + apiDelay) * 10);
  const [titleViolations, setTitleViolations] = useState([]);
  const [bodyViolations, setBodyViolations] = useState([]);
  const [postGuidances, setPostGuidances] = useRecoilState(postGuidancesState);
  const [activeIndices, setActiveIndices] = useState([]);
  const [debounceExpanded, setDebounceExpanded] = useState(false);
  const [bodyStatus, setBodyStatus] = useState("optional");

  function addPostGuidance() {
    setPostGuidances([
      ...postGuidances,
      {
        title: "New post guidance",
        phrases: [],
        application: "both",
        message: "",
        action: "block",
        logic: "isIncluded",
      },
    ]);
  }

  useEffect(() => {
    setActiveIndices(
      arrayUnique(
        titleViolations
          .map(({ title }) => title)
          .concat(bodyViolations.map(({ title }) => title))
      ).map((m) => postGuidances.findIndex(({ title }) => m === title))
    );
  }, [bodyViolations, titleViolations, postGuidances, setActiveIndices]);

  useEffect(() => {
    let violations = [];
    const titlePostGuidances = postGuidances.filter(
      ({ enabled, application }) =>
        enabled &&
        (application.includes("title") || application.includes("both"))
    );
    for (let i = 0; i < titlePostGuidances.length; i++) {
      let caughtPhrases = [];
      const { phrases, logic } = titlePostGuidances[i];
      const regexString = new RegExp("\\b" + phrases.join("|") + "\\b", "gi");
      for (let i = 0; i < phrases.length; i++) {
        const phrase = phrases[i].toLowerCase();
        if (debouncedTitle.toLowerCase().includes(phrase)) {
          caughtPhrases.push(phrase);
        }
      }
      if (logic === "isIncluded" && regexString.test(debouncedTitle)) {
        violations.push({ ...titlePostGuidances[i], caughtPhrases });
      } else if (logic === "isMissing" && !regexString.test(debouncedTitle)) {
        violations.push(titlePostGuidances[i]);
      }
    }
    if (violations.length > 0) {
      setTitleViolations(violations);
    } else {
      setTitleViolations([]);
    }
  }, [debouncedTitle, postGuidances]);

  useEffect(() => {
    let violations = [];
    const bodyPostGuidances = postGuidances.filter(
      ({ enabled, application }) =>
        enabled &&
        (application.includes("body") || application.includes("both"))
    );
    for (let i = 0; i < bodyPostGuidances.length; i++) {
      let caughtPhrases = [];
      const { phrases, logic } = bodyPostGuidances[i];
      const regexString = new RegExp("\\b" + phrases.join("|") + "\\b", "gi");
      for (let i = 0; i < phrases.length; i++) {
        const phrase = phrases[i].toLowerCase();
        if (debouncedBody.toLowerCase().includes(phrase)) {
          caughtPhrases.push(phrase);
        }
      }
      if (logic === "isIncluded" && regexString.test(debouncedBody)) {
        violations.push({ ...bodyPostGuidances[i], caughtPhrases });
      } else if (
        logic === "isMissing" &&
        !regexString.test(debouncedBody) &&
        (debouncedBody.length > 0 || bodyStatus === "required")
      ) {
        violations.push(bodyPostGuidances[i]);
      }
    }
    if (violations.length > 0) {
      setBodyViolations(violations);
    } else {
      setBodyViolations([]);
    }
  }, [debouncedBody, postGuidances, bodyStatus]);

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
          grid-template-columns: 1fr 500px 500px 1fr;
          column-gap: ${tokens.spacer.live.xl}px;
          padding: ${tokens.spacer.live["2xl"]}px;
          align-items: flex-start;
        `}
      >
        <Stack
          gap={tokens.spacer.live.sm}
          justify="stretch"
          customCss={css`
            grid-column: 2/3;
          `}
        >
          <Stack>
            <Type fontStyle="HeadingBold32">Post Guidance Playground 🛝</Type>
            <Type fontStyle="BodyReg16" align="left">
              Use the inputs below to preview the posting experience. All post
              guidance rules are on the right.
            </Type>
            <Stack
              justify="stretch"
              customCss={css`
                height: ${debounceExpanded ? "auto" : "60px"};
                overflow: hidden;
                cursor: pointer;
                &:hover {
                  background-color: var(--neutral-background-hover);
                  border-radius: ${tokens.radius.live.md}px;
                }
              `}
              padding={tokens.spacer.live.sm}
            >
              <Flex
                onClick={() => setDebounceExpanded(!debounceExpanded)}
                justify="space-between"
                align="center"
              >
                <Type fontStyle="HeadingBold18">Misc settings</Type>
                <IconContainer
                  icon={debounceExpanded ? "IconCaretUp" : "IconCaretDown"}
                />
              </Flex>
              <br />
              <Dropdown
                defaultValue={bodyStatus}
                options={bodyStatusStates}
                onChange={(v) => {
                  console.log(v);
                  setBodyStatus(v);
                }}
                label="Text posts body config"
              />
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
                  <Type fontStyle="HeadingBold24">
                    {(rate + apiDelay) * 10}
                  </Type>
                </Stack>
              </Spread>
            </Stack>
          </Stack>

          <Stack>
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={
                title.length > 0 &&
                titleViolations.filter(({ action }) => action === "block")
                  .length > 0
              }
              helperTexts={titleViolations}
            />
            {/* <Input
              label="Body (optional)"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              error={!!bodyViolations}
              helperTexts={bodyViolations}
            /> */}
            <Textarea
              label="Body (optional)"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              error={
                body.length > 0 &&
                bodyViolations.filter(({ action }) => action === "block")
                  .length > 0
              }
              helperTexts={bodyViolations}
            />
            <Button
              disabled={
                (bodyViolations.filter(({ action }) => action === "block")
                  .length > 0 &&
                  (bodyStatus === "required" || body.length > 0)) ||
                titleViolations.filter(({ action }) => action === "block")
                  .length > 0
              }
            >
              Submit post
            </Button>
          </Stack>
        </Stack>
        <Stack
          customCss={css`
            grid-column: 3/4;
          `}
        >
          <Stack gap={4} padding={[0, 0, tokens.spacer.live.md, 0]}>
            <Type fontStyle="HeadingBold24">Post guidance rules</Type>
            <Type fontStyle="BodyReg14">
              Rules will highlight when they're triggered. You can edit, add,
              delete, enable/disable, and re-order rules.
            </Type>
          </Stack>
          {postGuidances.map((guidance, i) => (
            <Guidance
              key={guidance.title}
              {...guidance}
              active={activeIndices.includes(i)}
            />
          ))}
          <Button type="Secondary" onClick={() => addPostGuidance()}>
            Add post guidance
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
