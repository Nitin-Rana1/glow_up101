import { useState, useEffect } from "react";
import SkillCard from "./Cards/SkillCard";
import { skillsList } from "../data";
import { Grid, Typography, Box, LinearProgress, Divider } from "@mui/material";
import HexagonDiagram from "./Diagram/HexagonDiagram";
import Image from "next/image";

export default function ProfilePage() {
  const [skillsLevel, setSkillsLevel] = useState<number[]>([]);
  const [myLvl, setMyLvl] = useState(0);

  useEffect(() => {
    const storedSkillsLevel = localStorage.getItem("skillsLevel");
    if (!storedSkillsLevel) {
      const initialSkillsLevel = Array(25).fill(0);
      setSkillsLevel([...initialSkillsLevel]);
      localStorage.setItem("skillsLevel", JSON.stringify(initialSkillsLevel));
    } else {
      let sum = 0;
      const temp: number[] = JSON.parse(storedSkillsLevel);
      for (let lvl of temp) {
        sum += lvl;
      }
      setMyLvl(sum / 2);
      setSkillsLevel(temp);
    }
  }, []);

  const statsData = {
    labels: ["Strength", "Agility", "Stamina", "Endurance", "Skill5", "Skill6"],
    values: [20, 60, 100, 90, 50, 75],
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={"3vw 6vw"}
      >
        <Grid>
          <Typography variant="h5" marginBottom={2}>
            Demon Buster
          </Typography>
          <Typography variant="h5" marginBottom={1}>
            Level: {Math.floor(myLvl)}
          </Typography>
          <LinearProgress
            variant="determinate"
            sx={{ width: "45vw" }}
            value={(myLvl - Math.floor(myLvl)) * 100}
          />
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <div style={{ width: "25vw", height: "25vh", position: "relative" }}>
            <Image
              src="/profilePics/weak.jpg"
              alt="profile pic"
              fill
              objectFit="cover"
            />
          </div>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ margin: "2rem 0" }} /> {/* Use Divider */}
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Stats
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <HexagonDiagram data={statsData} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Skills
        </Typography>
      </Grid>
      {skillsLevel.map((lvl, i) => {
        const skill = skillsList[i];
        if (lvl === 0) return null;
        return (
          <Grid item key={skill.id}>
            <SkillCard skill={skill} lvl={lvl} />
          </Grid>
        );
      })}
    </div>
  );
}
