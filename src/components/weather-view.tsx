import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getWeathers } from "../store";
import { WeatherMainView, WeatherSubView, RealTimeUpdater } from "./index";
import { Config } from "../helpers";

interface IProps {
  actions: {
    getWeathers: typeof getWeathers;
  };
}

interface IState {
  selectedCity: string;
}

class WeatherView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedCity: Config.Cities[0],
    };
  }

  componentDidMount() {
    this.selectCity(this.state.selectedCity);
  }

  selectCity(city: string) {
    const { getWeathers } = this.props.actions;
    getWeathers(city);
  }

  onCityClick(city: string) {
    this.setState({ selectedCity: city });
    this.selectCity(city);
  }

  render() {
    const { selectedCity } = this.state;

    return (
      <div className="app-container">
        <div className="cities-container" data-testid="cities-container">
          {Config.Cities.map((e) => (
            <div
              className={`city-item${e === selectedCity ? " selected" : ""}`}
              key={`city-${e}`}
              onClick={() => this.onCityClick(e)}
            >
              {e.toLocaleUpperCase()}
            </div>
          ))}
        </div>
        <div className="weather-container">
          <WeatherMainView />
          <WeatherSubView />
        </div>
        <RealTimeUpdater selectedCity={selectedCity} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({ getWeathers }, dispatch),
});

export default connect(null, mapDispatchToProps)(WeatherView);
