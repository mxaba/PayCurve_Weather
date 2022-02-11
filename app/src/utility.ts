import axios from "axios";
import { LOCATION_API_URL, LOCATION_API_KEY } from "./constraints";

export const getCityNameByCoordinates = async ({ latitude, longitude }: {latitude: number, longitude: number}) => {
  const { data } = await axios.get(
    `${LOCATION_API_URL}/reverse.php?key=${LOCATION_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`
  );
  console.log(data);
  return data;
};