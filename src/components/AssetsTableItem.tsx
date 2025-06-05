import type { TokenInfo } from "../utils/interface";

interface AssetsTableItemProps {
  tokenInfo: TokenInfo[];
}

const AssetsTableItem = ({ tokenInfo }: AssetsTableItemProps) => {
  return (
    <table className="w-full text-left p-5">
      <thead className="bg-gray-200 text-xl">
        <tr>
          <th className="px-4 py-4 w-36">Symbol</th>
          <th className="px-4 py-4 w-36">Name</th>
          <th className="px-4 py-4 w-36">Price (USD)</th>
        </tr>
      </thead>
      <tbody>
        {tokenInfo.map(({ id, name, symbol, image, current_price }) => (
          <tr key={id} className="text-2xl">
            <td className="px-4 py-4 w-20">
              <img src={image} alt="coin image" className="w-10 h-10" />
            </td>
            <td className="px-4 py-4 w-36">{name + " (" + symbol + ")"}</td>
            <td className="px-4 py-4 w-36">${current_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetsTableItem;
