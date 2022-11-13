import moment from "moment";
import { WEATHER_API_KEY } from "./env-provider";

const apiUrl: string = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}/{date1}/{date2}?unitGroup=metric&include=current&key={apikey}&contentType=json"

const buildApiUrl = (city: string, futureAmountDays: number): string => {
  const dateFormat: string = "YYYY-MM-DD";
  var today = moment();
  var futureDay = today.clone().add(futureAmountDays, "days");

  return apiUrl
    .replace("{city}", city)
    .replace("{date1}", today.format(dateFormat))
    .replace("{date2}", futureDay.format(dateFormat))
    .replace("{apikey}", WEATHER_API_KEY);
}


export default buildApiUrl;
