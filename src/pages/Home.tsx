import axios from "axios";
import AssetsTableItem from "../components/AssetsTableItem";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const fetchAssets = async () => {
    const response = await axios.get(
      "https://api.tokenmetrics.com/v2/tokens?limit=50&page=1",
      {
        headers: {
          "x-api-key":
            "tm-9bd6c685-7a25-4efc-b026-508ab00afed2",
        },
      }
    );
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

  return <AssetsTableItem assets={assets} />;
};

export default Home;
