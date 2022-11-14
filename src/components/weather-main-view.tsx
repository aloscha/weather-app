import React from "react";
import { connect } from "react-redux";
import { WeatherState } from "../store";
import { IconViewer } from "./index";
import BeatLoader from "react-spinners/BeatLoader";

interface IProps {
  weatherData: WeatherState;
}

class WeatherMainView extends React.Component<IProps, never> {
  render() {
    const { data, loading, error } = this.props.weatherData;

    if (loading && !data)
      return (
        <div className="information-container">
          <BeatLoader
            color="#5fb0e8"
            loading
            size={30}
            aria-label="Loading Spinner"
            speedMultiplier={0.5}
          />
        </div>
      );

    if (!loading && (error || !data))
      return <div className="information-container" data-testid="information-container">No data!</div>;

    const { days } = data!;
    const today = days[0];

    return (
      <div className="weather-mainview">
        <div className="mainview-day-name" data-testid="mainview-day-name">Today</div>
        <div className="mainview-details-container">
          <div className="mainview-details-icon">
            <IconViewer icon={today.icon} />
          </div>
          <div className="mainview-details">
            <div className="mainview-temp">{today.temp}&deg;</div>
            <div className="mainview-conditions">{today.conditions}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: WeatherState) => ({
  weatherData: state,
});

export default connect(mapStateToProps)(WeatherMainView);
