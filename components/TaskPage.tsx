import { useEffect, useState } from "react";
import { skillsNumber, tipsList } from "../data";
import TaskCard from "./Cards/TaskCard";
import DailyTasks from "./TaskPage/DailyTasks";

export default function TaskPage({ darkMode }: { darkMode: boolean }) {
  const [skillsLevel, setSkillsLevel] = useState<number[]>([]);

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
