import { useEffect, useState } from "react";
import { tipsList } from "../../data";
import TaskCard from "../Cards/TaskCard";

export default function MonthlyTasks() {
  const [skillsLevel, setSkillsLevel] = useState<number[]>([]);
  const [monthlyTasks, setMonthlyTasks] = useState<Task[]>([]);

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
    const lastDateOpenedMT = localStorage.getItem("lastDateOpenedMT");
    const today = new Date().toISOString().substr(0, 10); // Get today's date in YYYY-MM-DD format

    if (!lastDateOpenedMT || getDateDifference(lastDateOpenedMT, today) >= 30) {
      let temp = JSON.parse(storedTipsShown);
      let tempDT: Task[] = [];
      for (let ind of temp) {
        if (tipsList[ind].frequency == "Monthly")
          tempDT.push({ index: ind, completed: false });
      }
      setMonthlyTasks(tempDT);

      localStorage.setItem("MonthlyTasks", JSON.stringify(tempDT));
      localStorage.setItem("lastDateOpenedMT", today);
    } else {
      const storedMonthlyTasks = localStorage.getItem("MonthlyTasks");
      if (!storedMonthlyTasks) return;
      let currMonthlyTasks: Task[] = JSON.parse(storedMonthlyTasks);

      let temp: number[] = JSON.parse(storedTipsShown);

      for (let ind of temp) {
        if (tipsList[ind].frequency != "Monthly") continue;
        let shouldAdd = true;

        for (let i = 0; i < currMonthlyTasks.length; i++) {
          if (currMonthlyTasks[i].index == ind) {
            shouldAdd = false;
            break;
          }
        }
        if (shouldAdd) currMonthlyTasks.push({ index: ind, completed: false });
      }
      localStorage.setItem("MonthlyTasks", JSON.stringify(currMonthlyTasks));
      setMonthlyTasks(currMonthlyTasks);
    }
  }, []);
  return (
    <section>
      <h2>Monthly Task</h2>
      {monthlyTasks.map((arr, i) => {
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

          updateMonthlyTask(cmd, ind);
        }
        function updateMonthlyTask(cmd: string, ind: number) {
          const storedMonthlyTasks = localStorage.getItem("MonthlyTasks");
          if (!storedMonthlyTasks) return;
          let currMonthlyTasks: Task[] = JSON.parse(storedMonthlyTasks);

          for (let task of currMonthlyTasks) {
            if (task.index == ind) {
              let newVal = cmd == "ADD";
              if (newVal == task.completed) return;
              task.completed = newVal;
            }
          }
          localStorage.setItem(
            "MonthlyTasks",
            JSON.stringify(currMonthlyTasks)
          );
          setMonthlyTasks([...currMonthlyTasks]);
        }

        return (
          <TaskCard
            key={"MonthlyTask" + arr.index.toString()}
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
  const differenceInMilliseconds = Math.abs(endDateTime - startDateTime);

  // Calculate the difference in days
  const differenceInDays = Math.floor(differenceInMilliseconds / msInADay);

  return differenceInDays;
}
