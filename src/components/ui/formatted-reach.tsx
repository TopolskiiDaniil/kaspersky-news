import { WhiteText } from "./colored-text";

export default function FormattedReach({ reach }: { reach: number }) {
  const formatReach = (value: number): string => {
    if (value >= 1000) {
      return `${Math.round(value / 1000)}K`;
    }
    return value.toString();
  };

  return (
    <>
      <WhiteText>{formatReach(reach)}</WhiteText> Reach
    </>
  );
}
