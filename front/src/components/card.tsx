import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import OpenInNew from '@mui/icons-material/OpenInNew';

interface CardProps {
  title: string;
  description: string;
  image: string;
  year: string;
  link:string;
}

export default function BottomActionsCard({ title, description, image, year, link }: CardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 380,
        height: 240,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
      <Button target="_blank" component="a" href={link} startDecorator={<OpenInNew />}>Explore</Button>
    </Card>
  );
}