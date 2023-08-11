import { useEffect, useState } from "react";
import { statsNumber, tipsList } from "../../data";
import TaskCard from "../Cards/TaskCard";
import { Box, Container, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { motion, useAnimation, useInView } from "framer-motion";
export default function DailyTasks({
  days,
  localStorageKey,
  type,
  darkMode,
}: {
  days: number;
  localStorageKey: string;
  type: string;
  darkMode: boolean;
}) {
  const [skillsLevel, setSkillsLevel] = useState<number[]>([]);
  const [dailyTasks, setDailyTasks] = useState<Task[]>([]);
  const [stats, setStats] = useState<number[]>([]);
  useEffect(() => {
    const storedSkillsLevel = localStorage.getItem("skillsLevel");
    if (!storedSkillsLevel) {
      const initialSkillsLevel = Array(25).fill(0);
      setSkillsLevel([...initialSkillsLevel]);
      localStorage.setItem("skillsLevel", JSON.stringify(initialSkillsLevel));
    } else {
      setSkillsLevel(JSON.parse(storedSkillsLevel));
    }
    //check if stats present in LS
    const statsLS = localStorage.getItem("stats");
    if (!statsLS) {
      const initialStats = [10, 6, 12, 3, 7, 5, 2, 10, 11, 7, 8, 6];
      localStorage.setItem("stats", JSON.stringify(initialStats));
      setStats([...initialStats]);
    } else {
      setStats(JSON.parse(statsLS));
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
  }, [days, localStorageKey, type]);
  const theme = useTheme();
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
    localStorage.setItem(type + "Tasks", JSON.stringify(currDailyTasks));
    setDailyTasks([...currDailyTasks]);
  }
  function changeStats(value: number, action: string): number {
    const incrementAmount = 1.5 + Math.random() * 0.5; // Constant increment amount for stats
    const maxLimit = 100;
    if (action === "inc") {
      const newValue = value + incrementAmount;
      return newValue <= maxLimit ? newValue : maxLimit;
    } else if (action === "dec") {
      const newValue = value - incrementAmount;
      return newValue >= 0 ? newValue : 0;
    }

    return value;
  }
  function changeLevel(value: number, action: string): number {
    const incrementAmount = 0.65 + Math.random() * 0.65; // Constant increment amount for stats
    const maxLimit = 100;
    if (action === "inc") {
      const newValue = value + incrementAmount;
      return newValue <= maxLimit ? newValue : maxLimit;
    } else if (action === "dec") {
      const newValue = value - incrementAmount;
      return newValue >= 0 ? newValue : 0;
    }
    return value;
  }
  function updateStats(cmd: string, taskInd: number) {
    const storedStats = localStorage.getItem("stats");
    if (!storedStats) return 0;
    let currStats: number[] = JSON.parse(storedStats);
    const tempTip = tipsList[taskInd];
    for (let ind of tempTip.statsIndexes) {
      if (cmd === "ADD") {
        currStats[ind] = changeStats(currStats[ind], "inc");
      } else currStats[ind] = changeStats(currStats[ind], "dec");
    }
    localStorage.setItem("stats", JSON.stringify(currStats));
    setStats([...currStats]);
  }
  function updateSkillsLevel(cmd: string, taskInd: number) {
    let temp = skillsLevel;
    let tip = tipsList[taskInd];
    for (let ind of tip.skillIndexes) {
      let oldLvl = temp[ind];
      let newLvl;
      if (cmd == "ADD") newLvl = changeLevel(oldLvl, "inc");
      else newLvl = changeLevel(oldLvl, "dec");
      temp[ind] = newLvl;
    }
    localStorage.setItem("skillsLevel", JSON.stringify(temp));
    setSkillsLevel([...temp]);
  }
  return (
    // <Container
    //   maxWidth="md"
    //   sx={{
    //     background: theme.palette.mode === "dark" ? "#000" : "#fff",
    //   }}
    // >
    //   <Typography
    //     variant="h5"
    //     marginTop={3}
    //     marginBottom={1}
    //     color={darkMode ? "textPrimary" : "inherit"}
    //   >
    //     {type} Task
    //   </Typography>
    //   <Box sx={{ maxHeight: "60vh" }} overflow={"auto"}>
    //     {dailyTasks.map((T, i) => {
    //       const tip = tipsList[T.index];
    //       function checkBoxClicked(cmd: string, ind: number) {
    //         let temp = skillsLevel;
    //         for (let ind of tip.skillIndexes) {
    //           let oldLvl = temp[ind];
    //           let newLvl;
    //           if (cmd == "ADD") newLvl = oldLvl + 1.5;
    //           else newLvl = oldLvl - 1.5;
    //           temp[ind] = newLvl;
    //         }
    //         localStorage.setItem("skillsLevel", JSON.stringify(temp));
    //         setSkillsLevel([...temp]);

    //         updateDailyTask(cmd, ind);
    //         updateStats(cmd, ind);
    //       }

    //       return (
    //         <TaskCard
    //           key={type + "TASK" + T.index.toString()}
    //           checkBoxClicked={checkBoxClicked}
    //           tip={tip}
    //           lvl={skillsLevel[T.index]}
    //           task={T}
    //           skillsLevel={skillsLevel}
    //           darkMode={darkMode}
    //         />
    //       );
    //     })}
    //     {dailyTasks.length === 0 && (
    //       <Box sx={{ textAlign: "center", padding: "20px" }}>
    //         <Typography variant="h6" color="textSecondary" marginBottom={1}>
    //           No tasks available right now.
    //         </Typography>
    //         <Typography variant="body1" color="textSecondary">
    //           It looks like you haven&apos;t encountered enough tips yet. <br />
    //           Please wait until the next day to see refreshed tips or generate
    //           new tips on tips page .
    //         </Typography>
    //       </Box>
    //     )}
    //   </Box>
    // </Container>

    //shake motion
    <Container
      maxWidth="md"
      sx={{
        background: theme.palette.mode === "dark" ? "#000" : "#fff",
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Typography
        variant="h5"
        marginTop={3}
        marginBottom={1}
        color={darkMode ? "textPrimary" : "inherit"}
        component={motion.h5}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {type} Task
      </Typography>
      <Box
        sx={{ maxHeight: "60vh" }}
        overflow={"auto"}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {dailyTasks.map((T, i) => {
          const tip = tipsList[T.index];
          function checkBoxClicked(cmd: string, ind: number) {
            updateSkillsLevel(cmd, ind);
            updateDailyTask(cmd, ind);
            updateStats(cmd, ind);
          }

          return (
            <TaskCard
              key={type + "TASK" + T.index.toString()}
              checkBoxClicked={checkBoxClicked}
              tip={tip}
              lvl={skillsLevel[T.index]}
              task={T}
              skillsLevel={skillsLevel}
              darkMode={darkMode}
            />
          );
        })}
        {dailyTasks.length === 0 && (
          <Box
            sx={{ textAlign: "center", padding: "20px" }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Typography variant="h6" color="textSecondary" marginBottom={1}>
              No tasks available right now.
            </Typography>
            <Typography variant="body1" color="textSecondary">
              It looks like you haven&apos;t encountered enough tips yet. <br />
              Please wait until the next day to see refreshed tips or generate
              new tips on the tips page.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
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
