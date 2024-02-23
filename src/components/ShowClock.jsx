import { useEffect } from "react";
import { useState } from "react";

export default function ShowClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      This is the current time : {time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </div>
  );
}
