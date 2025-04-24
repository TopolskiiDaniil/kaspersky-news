import { Button, Space, Tag } from "antd";
import { IData_TagItem } from "../../types/data";
import { useState } from "react";
import { MAX_VISIBLE_TAGS, TextShowAllButton } from "../../const";

interface Props {
  tags?: IData_TagItem[];
}

export default function KeywordsTags({ tags = [] }: Props) {
  const [isVisibleAllTags, setIsVisibleAllTags] = useState(false);

  const visibleTags = isVisibleAllTags ? tags : tags.slice(0, MAX_VISIBLE_TAGS);
  const invisibleTagsCount =
    tags.length > MAX_VISIBLE_TAGS ? tags.length - MAX_VISIBLE_TAGS : 0;

  const handleShowAllClick = () => {
    setIsVisibleAllTags((prev) => !prev);
  };

  if (!tags.length) {
    return null;
  }

  return (
    <Space wrap>
      {visibleTags.map(({ count, value }) => (
        <Tag
          key={value + count}
          style={{
            backgroundColor: "transparent",
            borderRadius: "100vw",
            cursor: "pointer",
          }}
        >
          {value} {count}
        </Tag>
      ))}

      {invisibleTagsCount > 0 && (
        <Button type="link" onClick={handleShowAllClick}>
          {isVisibleAllTags
            ? TextShowAllButton.Hide
            : `${TextShowAllButton.Show} +${invisibleTagsCount}`}
        </Button>
      )}
    </Space>
  );
}
