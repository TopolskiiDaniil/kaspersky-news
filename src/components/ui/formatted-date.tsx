import { WhiteText } from "./colored-text";

export default function FormattedDate({ date }: { date: string }) {
  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const month = parsedDate.toLocaleString("en-US", { month: "short" });
  const year = parsedDate.getFullYear();

  return (
    <>
      <WhiteText>{day}</WhiteText> {month} {year}
    </>
  );
}
