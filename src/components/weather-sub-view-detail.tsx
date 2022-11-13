import React from "react";
import { connect } from "react-redux";
import { WeatherState } from "../store";
import { IconViewer } from "./index";
import moment from "moment";

interface IProps {
  weatherData: WeatherState;
  dayIndex: number;
}

class WeatherSubViewDetail extends React.Component<IProps, never> {
  render() {
    const { weatherData, dayIndex } = this.props;
    const { data } = weatherData;

    if (!data) return null;

    const { days } = data!;
    const currentDayInfo = days[dayIndex];
    const dayName = moment(currentDayInfo.datetime).format("ddd");

    return (
      <div className="item-detail">
        <div className="subview-day-name">{dayName}</div>
        <IconViewer icon={currentDayInfo.icon} />
        <div className="subview-temp">{currentDayInfo.temp}&deg;</div>
      </div>
    );
  }
}

const mapStateToProps = (state: WeatherState) => ({
  weatherData: state,
});

export default connect(mapStateToProps)(WeatherSubViewDetail);
