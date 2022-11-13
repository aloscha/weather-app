import { GetWeatherAction, WeatherState } from "./index";
import { GetWeatherType } from "../enums/weather.enum";

const initialState: WeatherState = {
  loading: false,
};

export const WeatherReducer = (
  state: WeatherState = initialState,
  action: GetWeatherAction
): WeatherState => {
  switch (action.type) {
    case GetWeatherType.PENDING:
      return {
        ...state,
        loading: true,
      };
    case GetWeatherType.SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GetWeatherType.REJECTED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
