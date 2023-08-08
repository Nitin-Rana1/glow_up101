import { useEffect, useState } from "react";
import { tipsList } from "../../data";
import TaskCard from "../Cards/TaskCard";
import { Box, Typography } from "@mui/material";

export default function DailyTasks({
  days,
  localStorageKey,
  type,
}: {
  days: number;
  localStorageKey: string;
  type: string;
}) {
  const [skillsLevel, setSkillsLevel] = useState<number[]>([]);
  const [dailyTasks, setDailyTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedSkillsLevel = localStorage.getItem("skillsLevel");
    if (!storedSkillsLevel) {
      const initialSkillsLevel = Array(25).fill(0);
      setSkillsLevel([...initialSkillsLevel]);
      localStorage.setItem("skillsLevel", JSON.stringify(initialSkillsLevel));
    } else {
      setSkillsLevel(JSON.parse(storedSkillsLevel));
    }
  }, []);

  //Daily
  useEffect(() => {
    const storedTipsShown = localStorage.getItem("tipsShown");
    if (!storedTipsShown) return;

    const lastDateOpened = localStorage.getItem(localStorageKey);
    const today = new Date().toISOString().substr(0, 10); // Get today's date in YYYY-MM-DD format

    if (!lastDateOpened || getDateDifference(lastDateOpened, today) >= days) {
      let temp = JSON.parse(storedTipsShown);
      let tempDT: Task[] = [];
      for (let ind of temp) {
        if (tipsList[ind].frequency == type)
          tempDT.push({ index: ind, completed: false });
      }
      setDailyTasks(tempDT);

      localStorage.setItem(type + "Tasks", JSON.stringify(tempDT));
      localStorage.setItem(localStorageKey, today);
    } else {
      const storedDailyTasks = localStorage.getItem(type + "Tasks");
      if (!storedDailyTasks) return;
      let currDailyTasks: Task[] = JSON.parse(storedDailyTasks);

      let temp: number[] = JSON.parse(storedTipsShown);

      for (let ind of temp) {
        if (tipsList[ind].frequency != type) continue;
        let shouldAdd = true;

        for (let i = 0; i < currDailyTasks.length; i++) {
          if (currDailyTasks[i].index == ind) {
            shouldAdd = false;
            break;
          }
        }
        if (shouldAdd) currDailyTasks.push({ index: ind, completed: false });
      }
      localStorage.setItem(type + "Tasks", JSON.stringify(currDailyTasks));
      setDailyTasks(currDailyTasks);
    }
  }, []);
  return (
    <Box padding={0.5}>
      <h2>{type} Task</h2>
      <Box sx={{ maxHeight: "60vh" }} overflow={"auto"}>
        {dailyTasks.map((arr, i) => {
          const tip = tipsList[arr.index];
          function checkBoxClicked(cmd: string, ind: number) {
            let temp = skillsLevel;
            for (let ind of tip.skillIndexes) {
              let oldLvl = temp[ind];
              let newLvl;
              if (cmd == "ADD") newLvl = oldLvl + 1.5;
              else newLvl = oldLvl - 1.5;
              temp[ind] = newLvl;
            }
            localStorage.setItem("skillsLevel", JSON.stringify(temp));
            setSkillsLevel([...temp]);

            updateDailyTask(cmd, ind);
          }
          function updateDailyTask(cmd: string, ind: number) {
            const storedDailyTasks = localStorage.getItem(type + "Tasks");
            if (!storedDailyTasks) return;
            let currDailyTasks: Task[] = JSON.parse(storedDailyTasks);

            for (let task of currDailyTasks) {
              if (task.index == ind) {
                let newVal = cmd == "ADD";
                if (newVal == task.completed) return;
                task.completed = newVal;
              }
            }
            localStorage.setItem(
              type + "Tasks",
              JSON.stringify(currDailyTasks)
            );
            setDailyTasks([...currDailyTasks]);
          }

          return (
            <TaskCard
              key={type + "TASK" + arr.index.toString()}
              checkBoxClicked={checkBoxClicked}
              tip={tip}
              lvl={skillsLevel[arr.index]}
              task={arr}
              skillsLevel={skillsLevel}
            />
          );
        })}
        {dailyTasks.length === 0 && (
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            <Typography variant="h6" color="textSecondary" marginBottom={1}>
              No tasks available right now.
            </Typography>
            <Typography variant="body1" color="textSecondary">
              It looks like you haven't encountered enough tips yet. Please wait
              until the next day to see refreshed or generate new tips on tips
              page .
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
function getDateDifference(startDate: string, endDate: string) {
  const msInADay = 86400000; // Number of milliseconds in a day
  const startDateTime = new Date(startDate).getTime();
  const endDateTime = new Date(endDate).getTime();

  // Calculate the difference in milliseconds between the two dates
  const differenceInMilliseconds = Math.abs(endDateTime - startDateTime);

  // Calculate the difference in days
  const differenceInDays = Math.floor(differenceInMilliseconds / msInADay);

  return differenceInDays;
}
