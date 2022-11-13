import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getWeathers } from "../store";
import { Config } from "../helpers";

interface IProps {
  actions: {
    getWeathers: typeof getWeathers;
  };
  selectedCity: string;
}

class RealTimeUpdater extends React.Component<IProps, never> {
  intervalUpdater: NodeJS.Timer | undefined;

  componentDidMount() {
    this.intervalUpdater = setInterval(
      this.tickInterval.bind(this),
      Config.IntervalApi * 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalUpdater);
  }

  tickInterval() {
    const { actions, selectedCity } = this.props;
    const { getWeathers } = actions;
    getWeathers(selectedCity);
  }

  render = () => null;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({ getWeathers }, dispatch),
});

export default connect(null, mapDispatchToProps)(RealTimeUpdater);
