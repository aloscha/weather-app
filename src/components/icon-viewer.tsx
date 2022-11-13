import React from "react";
import clearday from "../images/clear-day.svg";
import clearnight from "../images/clear-night.svg";
import cloudy from "../images/cloudy.svg";
import fog from "../images/fog.svg";
import partlycloudyday from "../images/partly-cloudy-day.svg";
import partlycloudynight from "../images/partly-cloudy-night.svg";
import rain from "../images/rain.svg";
import snow from "../images/snow.svg";
import wind from "../images/wind.svg";

interface IProps {
  icon: string;
}

class IconViewer extends React.Component<IProps, never> {
  images!: { [key: string]: string };

  constructor(props: IProps) {
    super(props);

    this.buildImagesDictionary();
  }

  buildImagesDictionary() {
    this.images = {};
    this.images["clear-day"] = clearday;
    this.images["clear-night"] = clearnight;
    this.images["cloudy"] = cloudy;
    this.images["fog"] = fog;
    this.images["partly-cloudy-day"] = partlycloudyday;
    this.images["partly-cloudy-night"] = partlycloudynight;
    this.images["rain"] = rain;
    this.images["snow"] = snow;
    this.images["wind"] = wind;
  }

  render() {
    return (
      <div
        style={{ backgroundImage: `url(${this.images[this.props.icon]})` }}
        className="icon-item"
      />
    );
  }
}

export default IconViewer;
