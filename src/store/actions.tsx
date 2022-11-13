import { WeatherBaseDto, GetWeatherAction } from "./index";
import { GetWeatherType } from "../enums/weather.enum";
import { buildApiUrl, Config } from "../helpers";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import axios from "axios";

export const getWeathers = (city: string) => {
  const apiUrl = buildApiUrl(city, Config.WeatherDates);

  return async (dispatch: Dispatch<GetWeatherAction>) => {
    dispatch({ type: GetWeatherType.PENDING });

    try {
      const { data } = await axios.get<WeatherBaseDto>(apiUrl);
      dispatch({ type: GetWeatherType.SUCCESS, payload: data });
    } catch (err: any) {
      toast.error(err.message, {
        position: "bottom-center",
        autoClose: 3000,
        draggable: false,
      });

      dispatch({ type: GetWeatherType.REJECTED, payload: err.message });
    }
  };
}
