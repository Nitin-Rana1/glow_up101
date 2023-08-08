import { LinearProgress, Typography, Card, CardContent } from "@mui/material";

export default function SkillCard({
  skill,
  lvl,
}: {
  skill: Skill;
  lvl: number;
}) {
  const progress = (lvl - Math.floor(lvl)) * 100;

  return (
    <Card sx={{ margin: "5vw" }}>
      <CardContent>
        <Typography variant="h6">
          {/* {skill.id}.  */}
          {skill.skillName} - {skill.skillType}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Level: {Math.floor(lvl)}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ marginTop: "8px" }}
        />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginTop: "8px" }}
        >
          Progress: {progress}%
        </Typography>
      </CardContent>
    </Card>
  );
}
