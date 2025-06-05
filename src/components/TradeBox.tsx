import type { TradeBoxProps } from "../utils/interface";

const TradeBox: React.FC<TradeBoxProps> = ({
  type,
  inputValue,
  onInputChange,
  selectedToken,
  onTokenChange,
  usdValue,
  tokenList,
  disabled,
}) => {
  return (
    <div
      className={`h-[49%] w-[100%] p-4 ${
        type === "Sell" ? "bg-blue-200" : "bg-blue-400"
      } rounded-2xl border-[1px] border-blue-200 flex flex-col justify-center items-start`}
    >
      <span className="content-start text-xl py-3 text-gray-600 font-bold">
        {type}
      </span>
      <div className="flex justify-between h-12 w-[100%]">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            onInputChange(Number(e.target.value));
          }}
          disabled={disabled}
          className={`w-8/12  ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          } focus:outline-none font-extrabold text-3xl`}
        />
        <select
          value={selectedToken}
          onChange={(e) => onTokenChange(e.target.value)}
          className="w-4/12 rounded-3xl border-blue-500 bg-blue-500 p-2.5 font-bold text-xl text-white "
        >
          {tokenList.map((token) => (
            <option key={token.id} value={token.id}>
              {token.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="text-xl py-2">${usdValue}</div>
    </div>
  );
};

export default TradeBox;
