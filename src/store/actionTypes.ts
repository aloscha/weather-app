import { WeatherBaseDto } from "./index";
import { GetWeatherType } from "../enums/weather.enum";

interface actionPending {
  type: GetWeatherType.PENDING;
}

interface actionSuccess {
  type: GetWeatherType.SUCCESS;
  payload: WeatherBaseDto;
}

interface actionFail {
  type: GetWeatherType.REJECTED;
  payload: string;
}

export type GetWeatherAction = actionPending | actionSuccess | actionFail;