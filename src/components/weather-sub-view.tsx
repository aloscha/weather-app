import React from "react";
import { Config } from "../helpers";
import { WeatherSubViewDetail } from "./index";

interface IProps {}

interface IState {
  days: number[];
}

class WeatherSubView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const calculatedDays = Array.from(
      Array(Config.WeatherDates),
      (_, i) => i + 1
    );

    this.state = {
      days: calculatedDays,
    };
  }

  render() {
    const { days } = this.state;
    return (
      <div className="weather-subviews">
        {days.map((e) => (
          <WeatherSubViewDetail dayIndex={e} key={`weathersubview-${e}`}/>
        ))}
      </div>
    );
  }
}

export default WeatherSubView;
