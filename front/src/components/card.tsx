import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";

interface CardProps {
  title: string;
  description: string;
  image: string;
  year: string;
}

export default function BottomActionsCard({ title, description, image, year }: CardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 340,
        height: 170,
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src={image} sx={{ width: 80, height: 80 }} />
        <Typography sx={{ marginLeft: "1rem" }}>
            <Typography level="h3">{title}</Typography>
            <br />
            <Typography level="title-sm">{description}</Typography>
        </Typography>
      </Box>
      <CardContent>
        <Typography sx={{textAlign:"center", marginRight:"1.75rem"}} level="body-xs">{year}</Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
      </CardActions>
    </Card>
  );
}