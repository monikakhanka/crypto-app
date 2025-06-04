import type { TokenInfo } from "../utils/interface";

interface AssetsTableItemProps {
  tokenInfo: TokenInfo[];
}

const AssetsTableItem = ({ tokenInfo }: AssetsTableItemProps) => {
  return (
    <table className="w-full text-left p-5">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-4 w-36">Name</th>
          <th className="px-4 py-4 w-36">Symbol</th>
          <th className="px-4 py-4 w-36">Price (USD)</th>
        </tr>
      </thead>
      <tbody>
        {tokenInfo.map((asset) => (
          <tr key={asset.TOKEN_ID}>
            <td className="px-4 py-4 w-36">{asset.TOKEN_NAME}</td>
            <td className="px-4 py-4 w-36">{asset.TOKEN_SYMBOL}</td>
            {/* <td className="px-4 py-4 w-36">
              ${asset.marketData.priceUsd.toFixed(2)}
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetsTableItem;
