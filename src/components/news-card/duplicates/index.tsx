import { Button, Divider, List, Space, Typography } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Preview from "../preview";
import { useState } from "react";
import { IData_SnippetNews } from "../../../types/data";
import './index.css';

const { Text } = Typography;

interface Props {
  duplicates: IData_SnippetNews[];
}

export default function Duplicates({ duplicates }: Props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  const firstDuplicate = duplicates?.[0];
  const itemsToShow = expanded ? duplicates : [firstDuplicate];

  return (
    <>
      <Divider style={{ margin: "10px 0" }} />

      <Space className="duplicates-container" direction="vertical">
        <Space
          className="duplicates-header-container"
          size="middle"
        >
          <Text type="secondary">
            Duplicates: <Text>{duplicates.length}</Text>
          </Text>
          <Text type="secondary">
            By Relevance <Button type="text" icon={<DownOutlined />} />
          </Text>
        </Space>

        <List bordered>
          {itemsToShow.map((duplicate) => (
            <List.Item key={duplicate.ID}>
              <Preview news={duplicate} isDublicate />
            </List.Item>
          ))}
        </List>

        {duplicates.length > 1 && (
          <Button
            className="view-duplicates-button"
            type="text"
            onClick={toggleExpanded}
          >
            {expanded ? (
              <>
                <UpOutlined /> Hide Duplicates
              </>
            ) : (
              <>
                <DownOutlined /> View Duplicates
              </>
            )}
          </Button>
        )}
      </Space>
    </>
  );
}
