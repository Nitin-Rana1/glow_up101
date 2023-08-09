import { useEffect, useState } from "react";
import { skillsNumber, tipsList } from "../data";
import TaskCard from "./Cards/TaskCard";
import DailyTasks from "./TaskPage/DailyTasks";
import MonthlyTasks from "./TaskPage/MonthlyTasks";
import WeeklyTasks from "./TaskPage/WeeklyTasks";

export default function TaskPage({ darkMode }: { darkMode: boolean }) {
  const [tipsShown, setTipsShown] = useState<number[]>([]);
  const [skillsLevel, setSkillsLevel] = useState<number[]>([]);
  const [dailyTasks, setDailyTasks] = useState<Task[]>([]);
  const [weeklyTasks, setWeeklyTasks] = useState<Task[]>([]);
  const [monthlyTasks, setMonthlyTasks] = useState<Task[]>([]);

  // useEffect(() => {
  //   const storedTipsShown = localStorage.getItem("tipsShown");
  //   if (!storedTipsShown) {
  //   } else {
  //     setTipsShown(JSON.parse(storedTipsShown));
  //   }
  // }, []);
  useEffect(() => {
    const storedSkillsLevel = localStorage.getItem("skillsLevel");
    if (!storedSkillsLevel) {
      const initialSkillsLevel = Array(skillsNumber).fill(0);
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
    const storedDayOfJoining = localStorage.getItem("dayOfJoining");
    let storedDay = 0;
    if (storedDayOfJoining) storedDay = parseInt(storedDayOfJoining);
    const today = new Date().toISOString().substr(0, 10); // Get today's date in YYYY-MM-DD format
    const dayOfWeek = new Date().getDay();
    if (
      !lastDateOpenedWT ||
      (lastDateOpenedWT !== today && storedDay == dayOfWeek)
    ) {
      let temp = JSON.parse(storedTipsShown);
      let tempDT: Task[] = [];
      for (let ind of temp) {
        if (tipsList[ind].frequency == "Weekly")
          tempDT.push({ index: ind, completed: false });
      }
      setWeeklyTasks(tempDT);

      localStorage.setItem("WeeklyTasks", JSON.stringify(tempDT));
      localStorage.setItem("lastDateOpenedWT", today);
    } else if (lastDateOpenedWT == today && storedDay == dayOfWeek) {
      const storedWeeklyTasks = localStorage.getItem("WeeklyTasks");
      if (!storedWeeklyTasks) return;
      let currWeeklyTasks: Task[] = JSON.parse(storedWeeklyTasks);

      let temp: number[] = JSON.parse(storedTipsShown);

      for (let ind of temp) {
        if (tipsList[ind].frequency != "Weekly") continue;
        let shouldAdd = true;

        for (let i = 0; i < currWeeklyTasks.length; i++) {
          if (currWeeklyTasks[i].index == ind) {
            shouldAdd = false;
            break;
          }
        }
        if (shouldAdd) currWeeklyTasks.push({ index: ind, completed: false });
      }
      localStorage.setItem("WeeklyTasks", JSON.stringify(currWeeklyTasks));
      setWeeklyTasks(currWeeklyTasks);
    }
  }, []);
  //Monthly
  useEffect(() => {
    const storedTipsShown = localStorage.getItem("tipsShown");
    if (!storedTipsShown) return;

    const lastDateOpenedDT = localStorage.getItem("lastDateOpenedDT");
    const today = new Date().toISOString().substr(0, 10); // Get today's date in YYYY-MM-DD format

    if (!lastDateOpenedDT || lastDateOpenedDT !== today) {
      let temp = JSON.parse(storedTipsShown);
      let tempDT: Task[] = [];
      for (let ind of temp) {
        if (tipsList[ind].frequency == "Daily")
          tempDT.push({ index: ind, completed: false });
      }
      setDailyTasks(tempDT);

      localStorage.setItem("DailyTasks", JSON.stringify(tempDT));
      localStorage.setItem("lastDateOpenedDT", today);
    } else {
      const storedDailyTasks = localStorage.getItem("DailyTasks");
      if (!storedDailyTasks) return;
      let currDailyTasks: Task[] = JSON.parse(storedDailyTasks);

      let temp: number[] = JSON.parse(storedTipsShown);

      for (let ind of temp) {
        if (tipsList[ind].frequency != "Daily") continue;
        let shouldAdd = true;

        for (let i = 0; i < currDailyTasks.length; i++) {
          if (currDailyTasks[i].index == ind) {
            shouldAdd = false;
            break;
          }
        }
        if (shouldAdd) currDailyTasks.push({ index: ind, completed: false });
      }
      localStorage.setItem("DailyTasks", JSON.stringify(currDailyTasks));
      setDailyTasks(currDailyTasks);
    }
  }, []);
  return (
    <main>
      <DailyTasks
        days={1}
        localStorageKey={"lastDateOpenedDT"}
        type={"Daily"}
        darkMode={darkMode}
      />
      <DailyTasks
        days={7}
        localStorageKey={"lastDateOpenedWT"}
        type="Weekly"
        darkMode={darkMode}
      />
      <DailyTasks
        days={30}
        localStorageKey={"lastDateOpenedMT"}
        type="Monthly"
        darkMode={darkMode}
      />
    </main>
  );
}
