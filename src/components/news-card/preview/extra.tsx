import { Button, Space} from "antd";
import { TypeStatus } from "../../../const";
import StatusMark from "../../ui/status-mark";
import CustomCheckbox from "../../ui/custom-checkbox/custom-checkbox";
import './index.css';

interface ExtraProps {
  infoUrl: string;
  status?: string;
}

export default function Extra(props: ExtraProps) {
  const { infoUrl, status } = props;

  return (
    <Space size="small" style={{ marginBottom: "auto" }}>
      <StatusMark status={status as TypeStatus} />
      <Button 
        type="text"
        className="button-info"
        href={infoUrl}
      >
        i
      </Button>
      <CustomCheckbox />
    </Space>
  );
}
