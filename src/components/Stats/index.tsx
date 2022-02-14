import "../../css/Stats.css";
import { Stat } from "./components";
interface Props {
  stats: any[];
}

const Stats = ({ stats }: Props) => {
  return (
    <div className="container-stats">
      {stats?.map((stat, index) => (
        <div key={index}>
          <Stat stat={stat} />
        </div>
      ))}
    </div>
  );
};
export default Stats;
