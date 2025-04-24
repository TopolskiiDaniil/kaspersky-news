import { WhiteText } from "./colored-text";
import { IData_TrafficItem } from "../../types/data";

export default function TopTraffic({
  traffic,
}: {
  traffic: IData_TrafficItem[];
}) {
  const formatPercent = (num: number) => `${Math.round(num * 100)}%`;

  return (
    <div>
      Top traffic:
      {traffic.map((item, index) => (
        <span key={item.value}>
          {item.value} <WhiteText>{formatPercent(item.count)}</WhiteText>
          {index < traffic.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}
