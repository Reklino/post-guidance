import { useState, useEffect } from 'react';

export default function (onLeaveFunc) {
  const getState = () => {
    if (document.visibilityState === 'hidden') {
      return 'hidden';
    }
    if (document.hasFocus()) {
      return 'active';
    }
    return 'passive';
  };

  const [state, setState] = useState(getState());

  useEffect(() => {
    // Accepts a next state and, if there's been a state change, logs the
    // change to the console. It also updates the `state` value defined above.
    const logStateChange = (nextState) => {
      const prevState = state;
      if (nextState !== prevState) {
        console.log(`State change: ${prevState} >>> ${nextState}`);
        if (nextState === 'hidden') {
          onLeaveFunc();
        }
        setState(nextState);
      }
    };

    // These lifecycle events can all use the same listener to observe state
    // changes (they call the `getState()` function to determine the next state).
    ['pageshow', 'focus', 'blur', 'visibilitychange', 'resume'].forEach(
      (type) => {
        window.addEventListener(type, () => logStateChange(getState()), {
          capture: true,
        });
      },
    );

    // The next two listeners, on the other hand, can determine the next
    // state from the event itself.
    window.addEventListener(
      'freeze',
      () => {
        // In the freeze event, the next state is always frozen.
        logStateChange('frozen');
      },
      { capture: true },
    );

    window.addEventListener(
      'pagehide',
      (event) => {
        if (event.persisted) {
          // If the event's persisted property is `true` the page is about
          // to enter the Back-Forward Cache, which is also in the frozen state.
          logStateChange('frozen');
        } else {
          // If the event's persisted property is not `true` the page is
          // about to be unloaded.
          logStateChange('terminated');
        }
      },
      { capture: true },
    );
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return state;
}
