import { Button, Typography } from "@mui/material";
import { buttonLines } from "../data";
import { useEffect, useState } from "react";
export default function TipOfDay({ skip }: { skip: () => void }) {
  const [randLine, setRandLine] = useState("");
  const [tip, setTip] = useState("");
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * buttonLines.length);
    setRandLine(buttonLines[randomIndex]);

    setTip("DEMOR TIP HERERE");
  }, []);
  return (
    <main>
      <h1>Tip Of The Day</h1>
      <h2>{tip}</h2>
      <Button variant="outlined" onClick={skip}>
        {randLine}
      </Button>
    </main>
  );
}
