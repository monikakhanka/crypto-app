import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const usefetchAssets = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return response.data.data;
};

export default usefetchAssets;
