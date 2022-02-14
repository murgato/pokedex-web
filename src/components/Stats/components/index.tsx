import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

interface Props {
  stat: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  };
}

export const Stat = ({ stat }: Props) => {
  const containerProgressRef = useRef<HTMLDivElement>(null);

  const [totalStats, setTotalStats] = useState(0);
  const [percent, setPercent] = useState(0);
  const widthWidows = useWindowWidth();

  useEffect(() => {
    getTotal();
  }, [widthWidows]);

  useEffect(() => {
    if (stat) getPercent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stat, totalStats]);

  const getTotal = () => {
    const total: number = containerProgressRef?.current?.clientWidth
      ? containerProgressRef?.current?.clientWidth
      : 0;
    setTotalStats(total);
  };

  const getPercent = () => {
    if (totalStats === 0) return;
    let percent = Math.round((100 * stat.base_stat) / totalStats);
    setPercent(percent);
  };

  return (
    <div className="stat">
      <label>{stat?.stat.name}</label>
      <div ref={containerProgressRef} className="progressbar-container">
        <div className="progressbar-complete" style={{ width: `${percent}%` }}>
          <div className="progressbar-liquid"></div>
        </div>
      </div>
    </div>
  );
};
