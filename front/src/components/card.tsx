import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
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
        width: "75%",
        height: "200px",
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
        <div className="flex gap-10">
          <img src={image} className="w-20 h-20 shadow rounded-full shadow-slate-500" alt="" />
          <div>
            <h1 className="text-cyan-700 font-bold">{title}</h1>
            <p className="text-cyan-700">{description}</p>
            <p className="text-cyan-500">{year}</p>
          </div>
        </div>
      </Box>
      <Button target="_blank" component="a" href={link} startDecorator={<OpenInNew />}><p className="font-mono">Explore</p></Button>
    </Card>
  );
}