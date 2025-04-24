import { Card, Divider } from "antd";
import Preview from "./preview";
import { IData_SnippetNews } from "../../types/data";
import NewsContent from "./news-content";
import Duplicates from "./duplicates";

interface Props {
  news: IData_SnippetNews;
  duplicates?: IData_SnippetNews[];
}

export default function NewsCard({ news, duplicates }: Props) {
  const { URL, KW, AB, HIGHLIGHTS } = news;

  return (
    <Card
      style={{
        margin: "0 auto",
        minWidth: "fit-content",
        color: "#ffffff",
        background: "transparent",
      }}
    >
      <Preview news={news} />

      <Divider style={{ margin: "10px 0" }} />

      {AB && HIGHLIGHTS && KW ? (
        <NewsContent
          copy={AB}
          highLights={HIGHLIGHTS}
          keyWords={KW}
          url={URL}
        />
      ) : null}

      {duplicates ? <Duplicates duplicates={duplicates} /> : null}
    </Card>
  );
}
