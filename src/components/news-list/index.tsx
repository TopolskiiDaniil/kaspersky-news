import { IData_SnippetNews } from "../../types/data";
import NewsCard from "../news-card";

interface Props {
  news: IData_SnippetNews[];
  duplicates?: IData_SnippetNews[];
}

export default function NewsList(props: Props) {
  const { news, duplicates } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {news.map((news) => (
        <NewsCard key={news.ID} news={news} duplicates={duplicates} />
      ))}
    </div>
  );
}
