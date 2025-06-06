import { useState } from "react";
import type { AssetsTableItemProps, TokenInfo } from "../utils/interface";

const AssetsTableItem = ({ tokenInfo }: AssetsTableItemProps) => {
  const [sortedData, setSortedData] = useState<TokenInfo[]>([...tokenInfo]);
  const [sortBy, setSortBy] = useState<"name" | "price" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleSortOrder = (key: "name" | "price") => {
    const order = sortBy === key && sortOrder === "asc" ? "desc" : "asc";
    console.log("key", key);
    console.log("order", order);
    console.log("sorted data", sortedData);
    const sorted = [...sortedData].sort((a, b) => {
      if (key === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (key === "price") {
        return order === "asc"
          ? a.current_price - b.current_price
          : b.current_price - a.current_price;
      }

      console.log("after sort", sortedData);
      return 0;
    });

    setSortedData(sorted);
    setSortOrder(order);
    setSortBy(key);
  };

  const handleNameSorting = () => toggleSortOrder("name");

  const handlePriceSorting = () => toggleSortOrder("price");

  return (
    <div className="overflow-auto max-h-[1500px]">
      <table className="w-full text-left table-fixed">
        <thead className="bg-gray-200 text-xl">
          <tr>
            <th className="px-4 py-4 w-36 sticky top-20 bg-gray-200">
              Symbol{" "}
            </th>
            <th className="px-4 py-4 w-36 sticky top-20 bg-gray-200">
              Name{" "}
              <span onClick={handleNameSorting} className="cursor-pointer">
                {" "}
                &#8645;
              </span>
            </th>
            <th className="px-4 py-4 w-36 sticky top-20 bg-gray-200">
              Price (USD){" "}
              <span onClick={handlePriceSorting} className="cursor-pointer">
                {" "}
                &#8645;
              </span>
            </th>
            <th className="px-4 py-4 w-36 sticky top-20 bg-gray-200">
              Sell / Buy
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(({ id, name, symbol, image, current_price }) => (
            <tr key={id} className="text-2xl">
              <td className="px-4 py-4 w-20">
                <img src={image} alt="coin image" className="w-9 h-9" />
              </td>
              <td className="px-4 py-4 w-36">{name + " (" + symbol + ")"}</td>
              <td className="px-4 py-4 w-36">${current_price}</td>
              <td className="px-4 py-4 w-36">
                <select
                  name=""
                  id=""
                  className="w-25 px-2 py-1 bg-blue-400 rounded-2xl"
                  defaultValue={"sell"}
                >
                  <option value="buy">Buy</option>
                  <option value="sell">Sell</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTableItem;
