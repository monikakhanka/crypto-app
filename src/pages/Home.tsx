import axios from "axios";
import AssetsTableItem from "../components/AssetsTableItem";
import { useQuery } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const fetchAssets = async () => {
    const response = await axios.get(API_URL, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    return response.data.data;
  };

  const {
    data: assets,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
  });

  if (isLoading) {
    return <div className="flex justify-center text-3xl py-6">...Loading</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <AssetsTableItem tokenInfo={assets} />;
};

export default Home;
