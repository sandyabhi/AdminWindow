import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import "../styles/home.css";
import {userData} from "../dummydata"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"  />
      <div className="homeWidgets">

      </div>
    </div>
  );
}
