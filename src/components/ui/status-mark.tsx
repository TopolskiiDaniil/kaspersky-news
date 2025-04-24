import { Tag } from "antd";
import { TypeStatus } from "../../const";

type StatusMarkProps = {
  status: TypeStatus;
};

export default function StatusMark({ status }: StatusMarkProps) {
  let style = {};
  if (status === TypeStatus.Positive) {
    style = {
      color: "#000000",
      backgroundColor: "#23FFB0",
      border: "none",
    };
  } else {
    style = {
      backgroundColor: "red",
      border: "none",
    };
  }

  return <Tag style={style}>{status}</Tag>;
}
