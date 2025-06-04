import type { Asset } from "../utils/interface";

interface AssetsTableItemProps {
  assets: Asset[];
}

const AssetsTableItem = ({ assets }: AssetsTableItemProps) => {
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
        {assets.map((asset) => (
          <tr key={asset.id}>
            <td className="px-4 py-4 w-36">{asset.name}</td>
            <td className="px-4 py-4 w-36">{asset.symbol}</td>
            <td className="px-4 py-4 w-36">
              ${asset.marketData.priceUsd.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetsTableItem;
