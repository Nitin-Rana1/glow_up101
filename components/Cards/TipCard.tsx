import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function TipCard({ tip }: { tip: Tip }) {
  return (
    <Card variant="outlined" sx={{}}>
      <CardContent>
        <Typography variant="h6">
          {/* {tip.id}. */}
          {tip.tip}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {tip.description}
        </Typography>
        <Chip
          label={tip.category}
          color="primary"
          size="small"
          sx={{ marginTop: 3 }}
        />
      </CardContent>
    </Card>
  );
}
