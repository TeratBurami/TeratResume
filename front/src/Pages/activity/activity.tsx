import Footer from "../../components/footer";
import Nav from "../../components/nav/nav";
import "../activity/activity_style.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import DropDown from '../../components/dropdown'

export default function Activity() {
  return (
    <div>
      <Nav></Nav>
      <p className="ml-10 text-2xl font-bold pt-14 text-cyan-400">
        Activities & Competitions
      </p>
      <div className="mt-2 mb-40 w-full h-96 bg-cyan-500 flex justify-around">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi necessitatibus eos fugiat harum distinctio. Minima doloribus sed natus praesentium magni, officia sapiente labore incidunt omnis possimus corrupti explicabo voluptates voluptatum?</p>
        <div className="w-1/4 bg-black">
          <div className="h-full">
            <div className="w-1 h-4/5 bg-red-400 bg-white rounded my-2"></div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
