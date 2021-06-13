import React, { useContext, useState, useEffect } from "react";
import { Overlay, CountDown, OverlayDisapear } from "./styled";

import StartPlay from "context/startPlayContext";

function OverlayScreen() {
  const { isStart, setIsStart,level } = useContext(StartPlay);
  const [seconds, setSeconds] = useState(3);

  const clickStart = () => setIsStart((start) => (start = true));
  const timer = 1 - 0.038 * (level - 1);

  useEffect(
    function () {
      if (!isStart) {
        setSeconds((seconds) => (seconds = 3));
      }
      if (seconds === -1) {
        return;
      }
      const timer1 = 1000 - 38 * (level - 1);
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, timer1);
      return () => clearInterval(interval);
    },
    [seconds, isStart, level]
  );
  return !isStart ? (
    <Overlay onClick={()=>clickStart()}>Click To Fight</Overlay>
  ) : isStart && seconds > -1 ? (
    <OverlayDisapear>
      <CountDown timer={timer.toFixed(2)}>{seconds}</CountDown>
    </OverlayDisapear>
  ) : (
    ""
  );
}
export default React.memo(OverlayScreen);
