import axios from "axios";
import { LOCATION_API_URL, LOCATION_API_KEY } from "./constraints";

export const calculateTemp = (value: number, precision: number) => {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round((value - 273.5) * multiplier) / multiplier;
  };
  
export const getCityNameByCoordinates = async ({ latitude, longitude }: {latitude: number, longitude: number}) => {
  const { data } = await axios.get(
    `${LOCATION_API_URL}/reverse.php?key=${LOCATION_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`
  );
  console.log(data);
  return data;
};