import Footer from "../../components/footer";
import Nav from "../../components/nav";
import "../activity/activity_style.css";
import ActivityCard from "../../components/activity_card";

export default function Activity() {

  return (
    <div>
      <Nav></Nav>
      <p className="text-center text-4xl font-bold pt-14 text-cyan-400">
        Activities & Competitions
      </p>
        <ActivityCard></ActivityCard>
      <Footer></Footer>
    </div>
  );
}
