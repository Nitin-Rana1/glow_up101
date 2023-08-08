import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { buttonLines, skillsList, tipsList } from "../data";
import { useEffect, useState } from "react";
import TipCard from "./Cards/TipCard";
export default function TipOfDay() {
  const [tips, setTips] = useState<Tip[]>([]);

  const randomOrderArray = [
    4, 16, 19, 75, 53, 46, 67, 32, 41, 89, 77, 92, 38, 9, 68, 74, 55, 13, 42,
    91, 30, 31, 65, 85, 14, 11, 57, 71, 98, 25, 21, 76, 50, 73, 10, 97, 87, 26,
    8, 58, 6, 56, 72, 36, 35, 49, 44, 39, 48, 18, 79, 78, 84, 0, 86, 62, 54, 96,
    80, 33, 83, 63, 12, 47, 90, 2, 28, 27, 34, 64, 59, 45, 20, 66, 23, 1, 70,
    93, 40, 29, 17, 5, 95, 15, 7, 94, 61, 99, 51, 69, 3, 37, 81, 82, 22, 43, 88,
    52, 60, 24,
  ];
  //shownUpTo var
  useEffect(() => {
    // Check if skillLevels and tipsShown are present in localStorage
    const shownUpTo = localStorage.getItem("shownUpTo");
    if (!shownUpTo) {
      localStorage.setItem("shownUpTo", "3");
      console.log("IF mai 3");
      loadTips(-1, 4);
    } else {
      const no = parseInt(shownUpTo);
      const newNo = (no + 2) % tipsList.length;
      console.log("else if  mai ", newNo);
      if (tips.length >= 2) return;
      localStorage.setItem("shownUpTo", newNo.toString());
      loadTips(no, 2);
    }
  }, [tips.length, loadTips]);

  function loadTips(shownUpToLS: number, n: number) {
    if (tips.length >= n) return;
    let temp: Tip[] = tips;
    let tempTipsShown;

    //e33333333333333333333333
    const storedTipsShown = localStorage.getItem("tipsShown");
    if (!storedTipsShown) {
      tempTipsShown = [];
    } else {
      tempTipsShown = JSON.parse(storedTipsShown);
    }
    //33333333333333333333333333
    // essential : 4 16 19 75
    let c = 0,
      ind;
    for (let i = shownUpToLS + 1; c < n; i++) {
      ind = i % tipsList.length;
      temp.push(tipsList[randomOrderArray[ind]]);
      tempTipsShown.push(randomOrderArray[ind]);
      c++;
    }
    setTips([...temp]);
    localStorage.setItem("tipsShown", JSON.stringify(tempTipsShown));
  }

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      {tips.map((val, i) => (
        <Grid item key={"TipOfDay" + i.toString()} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <TipCard tip={val} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
