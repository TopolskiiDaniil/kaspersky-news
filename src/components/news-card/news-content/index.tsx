import { Button, Space, Typography } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import KeywordsTags from "../../ui/keywords-tags";
import { useState } from "react";
import { HighlightSnippet } from "../../ui/highlight-snippet";
import { IData_TagItem } from "../../../types/data";
import './index.css';

const { Text, Link } = Typography;

interface Props {
  highLights: string[];
  copy: string;
  keyWords: IData_TagItem[];
  url: string;
}

export default function NewsContent({
  highLights,
  copy,
  keyWords,
  url,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const textToShow = expanded ? copy : highLights[0];
  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <Space direction="vertical" size="middle" style={{ width: "100%" }}>
      <Space direction="vertical">
        {expanded ? (
          <Text>{textToShow}</Text>
        ) : (
          <HighlightSnippet text={textToShow} />
        )}
        <Link type="secondary" onClick={handleToggle}>
          {expanded ? "Hide" : "Show more"}{" "}
          {expanded ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </Link>
      </Space>

      <KeywordsTags tags={keyWords} />

      <Button className="original-source-button" type="link" href={url}>
        Original Source
      </Button>
    </Space>
  );
}
