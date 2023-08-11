import { useState, useEffect } from "react";
import SkillCard from "./Cards/SkillCard";
import { skillsList, skillsNumber, statsNumber } from "../data";
import {
  Grid,
  Typography,
  Box,
  LinearProgress,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@mui/material";
import HexagonDiagram from "./Diagram/HexagonDiagram";
import Image from "next/image";
import { Variants, motion } from "framer-motion";
export default function ProfilePage({ darkMode }: { darkMode: boolean }) {
  const [skillsLevel, setSkillsLevel] = useState<number[]>([]);
  const [myLvl, setMyLvl] = useState<number>(0);
  const [Stats, setStats] = useState<number[]>([]);
  const [statsShortVer, setStatsShortVer] = useState<StatsAndLabel | null>(
    null
  );
  const [statsLongVer, setStatsLongVer] = useState<StatsAndLabel | null>(null);

  useEffect(() => {
    const allStats: Stat[] = [
      "Agility",
      "Stamina",
      "Strength",
      "Endurance",
      "Charisma",
      "Sleep Quality",
      "Mindfulness",
      "Nutrition",
      "Hydration",
      "Confidence",
      "Creativity",
      "Social Connections",
    ];
    const storedSkillsLevel = localStorage.getItem("skillsLevel");
    if (!storedSkillsLevel) {
      const initialSkillsLevel = Array(skillsNumber).fill(0);
      setSkillsLevel([...initialSkillsLevel]);
      localStorage.setItem("skillsLevel", JSON.stringify(initialSkillsLevel));
    } else {
      let sum = 0;
      const temp: number[] = JSON.parse(storedSkillsLevel);
      for (let lvl of temp) {
        sum += lvl;
      }
      setMyLvl(sum / 5);
      setSkillsLevel(temp);
    }

    //check if stats present in LS
    const statsLS = localStorage.getItem("stats");
    if (!statsLS) {
      const initialStats = [10, 6, 12, 3, 7, 5, 2, 10, 11, 7, 8, 6];
      localStorage.setItem("stats", JSON.stringify(initialStats));
      makeShortVer(initialStats);
      makeLongVer(initialStats);
      setStats([...initialStats]);
    } else {
      makeShortVer(JSON.parse(statsLS));
      makeLongVer(JSON.parse(statsLS));
      setStats(JSON.parse(statsLS));
    }
    function makeShortVer(arr: number[]) {
      let tempStats: StatsAndLabel = {
        labels: [],
        values: [],
      };
      for (let i = 0; i < 6; i++) {
        tempStats.labels.push(allStats[i]);
        tempStats.values.push(arr[i]);
      }
      setStatsShortVer(tempStats);
    }
    function makeLongVer(arr: number[]) {
      let tempStats: StatsAndLabel = {
        labels: [],
        values: [],
      };
      for (let i = 0; i < allStats.length; i++) {
        tempStats.labels.push(allStats[i]);
        tempStats.values.push(arr[i]);
      }
      setStatsLongVer(tempStats);
    }
  }, []);
  const [hexShort, setHexShort] = useState<boolean>(true);
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      rotate: -30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const [count, setCount] = useState(0);

  return (
    <Box margin={0} overflow={"hidden"}>
      {/* <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={"3vw 0vw"}
        marginTop={2}
      >
        <Grid>
          <Typography
            variant="h5"
            marginBottom={2}
            color={darkMode ? "textPrimary" : "inherit"}
          >
            Demon Buster
          </Typography>
          <Typography
            variant="h5"
            marginBottom={1}
            color={darkMode ? "textPrimary" : "inherit"}
          >
            Level: {Math.floor(myLvl)}
          </Typography>
          <LinearProgress
            variant="determinate"
            sx={{ width: "35vw" }}
            value={(myLvl - Math.floor(myLvl)) * 100}
          />
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <div style={{ width: "50vw", height: "75vw", position: "relative" }}>
            <Image
              src="/profilePics/strong3.png"
              alt="profile pic"
              fill
              objectFit="cover"
            />
          </div>
        </Box>
      </Box> */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={"3vw 0vw"}
        marginTop={2}
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Grid>
          <Typography
            variant="h5"
            marginBottom={2}
            color={darkMode ? "textPrimary" : "inherit"}
          >
            Demon Buster
          </Typography>
          <Typography
            variant="h5"
            marginBottom={1}
            color={darkMode ? "textPrimary" : "inherit"}
          >
            Level: {Math.floor(myLvl)}
          </Typography>
          <LinearProgress
            variant="determinate"
            sx={{ width: "35vw" }}
            value={(myLvl - Math.floor(myLvl)) * 100}
          />
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <motion.div
            style={{ width: "50vw", height: "75vw", position: "relative" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image
              src="/profilePics/strong3.png"
              alt="profile pic"
              fill
              objectFit="cover"
            />
          </motion.div>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ margin: "2rem 0" }} /> {/* Use Divider */}
      <Grid item xs={12}>
        <Box display="flex" justifyContent={"space-between"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button
              variant={hexShort ? "contained" : "outlined"}
              onClick={() => setHexShort(true)}
              sx={{ marginRight: 0.5 }}
            >
              Main
            </Button>
            <Button
              variant={hexShort ? "outlined" : "contained"}
              onClick={() => setHexShort(false)}
            >
              Detailed
            </Button>
          </motion.div>
          <Typography
            variant="h5"
            marginBottom={1}
            color={darkMode ? "textPrimary" : "inherit"}
            sx={{
              paddingRight: 2,
            }}
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.2, duration: 0.5 }}
          >
            Stats
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <HexagonDiagram data={hexShort ? statsShortVer : statsLongVer} />
      </Grid>
      <Divider variant="middle" sx={{ margin: "2rem 0" }} /> {/* Use Divider */}
      <Grid item xs={12}>
        <Typography
          variant="h6"
          align="center"
          color={darkMode ? "textPrimary" : "inherit"}
        >
          Skills
        </Typography>
      </Grid>
      <Box marginBottom={10}>
        {skillsLevel.map((lvl, i) => {
          const tempSkill = skillsList[i];
          if (lvl === 0) return null;
          return (
            <motion.div
              key={tempSkill.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <Grid item key={tempSkill.id}>
                  <SkillCard skill={tempSkill} lvl={lvl} />
                </Grid>
              </motion.div>
            </motion.div>
          );
        })}
      </Box>
      {skillsLevel.every((lvl) => lvl === 0) && (
        <Box textAlign="center" my={5}>
          <Typography
            variant="body1"
            marginBottom={2}
            color={darkMode ? "grey" : "black"}
          >
            Unleash your potential! 🚀 Gain valuable skills by completing tasks
            and watch your abilities grow.
          </Typography>
          <Typography
            variant="body1"
            paddingBottom={4}
            color={darkMode ? "grey" : "black"}
          >
            Don&apos;t wait &ndash; start your journey of improvement today!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
