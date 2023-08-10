import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Collapse,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { skillsList } from "../../data";

export default function TaskCard({
  tip,
  checkBoxClicked,
  lvl,
  task,
  skillsLevel,
  darkMode,
}: {
  tip: Tip;
  checkBoxClicked: (cmd: string, ind: number) => void;
  lvl: number;
  task: Task;
  skillsLevel: number[];
  darkMode: boolean;
}) {
  const handleCheckboxChange = () => {
    if (task.completed) {
      checkBoxClicked("SUB", task.index);
    } else {
      checkBoxClicked("ADD", task.index);
    }
  };
  const [showDescription, setShowDescription] = useState(false);
  const handleDescriptionToggle = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: darkMode
          ? task.completed
            ? "#b87d23"
            : "black"
          : task.completed
          ? "#ffc772"
          : "white",

        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        marginBottom: "16px",
        border: "1px solid #ccc", // Single outline for the card
        color: darkMode ? "textPrimary" : "inherit", // Adjust text color
      }}
    >
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            checked={task.completed}
            onChange={handleCheckboxChange}
            color="primary"
          />
          <Typography
            variant="body1"
            component="span"
            style={{
              flexGrow: 1,
              marginLeft: "16px",
              fontSize: "1rem",
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "#666" : "inherit",
            }}
          >
            {/* {tip.frequency} */}
            {tip.id}:{tip.tip}
          </Typography>
          <Button
            size="small"
            onClick={handleDescriptionToggle}
            startIcon={
              showDescription ? <ExpandLessIcon /> : <ExpandMoreIcon />
            }
          />
        </div>
        <Collapse in={showDescription} unmountOnExit>
          <Typography
            variant="body2"
            component="p"
            style={{
              marginTop: "16px",
              color: "#555",
              marginBottom: "1rem",
            }}
          >
            {tip.description}
          </Typography>
          {tip.skillIndexes.map((v) => {
            if (v >= skillsList.length || v < 0) return;
            let lvl = skillsLevel[v];
            let name = "Gentlemen";
            name = skillsList[v].skillName;
            return (
              <div key={"DailyTaskLoader" + v.toString()}>
                {name}: (Level: {Math.floor(lvl)})
                <LinearProgress
                  variant="determinate"
                  sx={{ marginBottom: "2vh" }}
                  value={(lvl - Math.floor(lvl)) * 100}
                />
              </div>
            );
          })}
        </Collapse>
      </CardContent>
    </Card>
  );
}
