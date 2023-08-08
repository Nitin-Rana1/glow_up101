import { useEffect, useState } from "react";
import { tipsList } from "../../data";
import TaskCard from "../Cards/TaskCard";

export default function WeeklyTasks() {
  const [skillsLevel, setSkillsLevel] = useState<number[]>([]);
  const [weeklyTasks, setWeeklyTasks] = useState<Task[]>([]);

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

  //Weekly
  useEffect(() => {
    const storedTipsShown = localStorage.getItem("tipsShown");
    if (!storedTipsShown) return;

    const lastDateOpenedWT = localStorage.getItem("lastDateOpenedWT");
    const today = new Date().toISOString().substr(0, 10); // Get today's date in YYYY-MM-DD format
    if (!lastDateOpenedWT || getDateDifference(lastDateOpenedWT, today) >= 7) {
      console.log("if");

      let temp = JSON.parse(storedTipsShown);
      let tempDT: Task[] = [];
      for (let ind of temp) {
        if (tipsList[ind].frequency == "Weekly")
          tempDT.push({ index: ind, completed: false });
      }
      setWeeklyTasks(tempDT);

      localStorage.setItem("WeeklyTasks", JSON.stringify(tempDT));
      localStorage.setItem("lastDateOpenedWT", today);
    } else if (getDateDifference(lastDateOpenedWT, today) < 7) {
      console.log("else if");
      const storedWeeklyTasks = localStorage.getItem("WeeklyTasks");
      if (!storedWeeklyTasks) return;
      let currweeklyTasks: Task[] = JSON.parse(storedWeeklyTasks);
      console.log("currweeklyTasks", currweeklyTasks);
      let temp: number[] = JSON.parse(storedTipsShown);

      for (let ind of temp) {
        if (tipsList[ind].frequency != "Weekly") continue;
        let shouldAdd = true;

        for (let i = 0; i < currweeklyTasks.length; i++) {
          if (currweeklyTasks[i].index == ind) {
            shouldAdd = false;
            break;
          }
        }
        if (shouldAdd) currweeklyTasks.push({ index: ind, completed: false });
      }
      console.log("NEWWW   currweeklyTasks", currweeklyTasks);
      localStorage.setItem("WeeklyTasks", JSON.stringify(currweeklyTasks));
      setWeeklyTasks(currweeklyTasks);
    }
  }, []);
  return (
    <section>
      <h2>Weekly Task</h2>
      {weeklyTasks.map((arr, i) => {
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

          updateWeeklyTask(cmd, ind);
        }
        function updateWeeklyTask(cmd: string, ind: number) {
          const storedWeeklyTasks = localStorage.getItem("WeeklyTasks");
          if (!storedWeeklyTasks) return;
          let currweeklyTasks: Task[] = JSON.parse(storedWeeklyTasks);

          for (let task of currweeklyTasks) {
            if (task.index == ind) {
              let newVal = cmd == "ADD";
              if (newVal == task.completed) return;
              task.completed = newVal;
            }
          }
          localStorage.setItem("WeeklyTasks", JSON.stringify(currweeklyTasks));
          setWeeklyTasks([...currweeklyTasks]);
        }

        return (
          <TaskCard
            key={"WEEKLYTASKS" + arr.index.toString()}
            checkBoxClicked={checkBoxClicked}
            tip={tip}
            lvl={skillsLevel[arr.index]}
            task={arr}
            skillsLevel={skillsLevel}
          />
        );
      })}
    </section>
  );
}
function getDateDifference(startDate: string, endDate: string) {
  const msInADay = 86400000; // Number of milliseconds in a day
  const startDateTime = new Date(startDate).getTime();
  const endDateTime = new Date(endDate).getTime();

  // Calculate the difference in milliseconds between the two dates
  const differenceInMilliseconds = endDateTime - startDateTime;

  // Calculate the difference in days
  const differenceInDays = Math.floor(differenceInMilliseconds / msInADay);
  console.log("DIFFFFFFFFFF WTasks", differenceInDays);
  return differenceInDays;
}
