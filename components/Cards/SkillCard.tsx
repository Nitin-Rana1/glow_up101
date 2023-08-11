import {
  LinearProgress,
  Typography,
  Card,
  CardContent,
  Chip,
  Box,
} from "@mui/material";

export default function SkillCard({
  skill,
  lvl,
}: {
  skill: Skill;
  lvl: number;
}) {
  const progress = Math.floor((lvl - Math.floor(lvl)) * 100);

  return (
    <Card sx={{ margin: "5vw" }}>
      <CardContent>
        <Typography variant="h6">
          {/* {skill.id}.  */}
          {skill.skillName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Level: {Math.floor(lvl)}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ marginTop: "8px" }}
        />
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: "8px" }}
          >
            Progress: {progress}%
          </Typography>
          <Chip
            label={skill.skillType}
            color="primary"
            size="small"
            sx={{ marginTop: "8px" }} // Adjust the margin as needed
          />
        </Box>
      </CardContent>
    </Card>
  );
}
