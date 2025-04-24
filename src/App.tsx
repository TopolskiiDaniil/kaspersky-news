import { IData_SnippetNews } from "./types/data";
import NewsList from "./components/news-list";

interface Props {
  news: IData_SnippetNews[];
  duplicates?: IData_SnippetNews[];
}

export default function App(props: Props) {
  const { news, duplicates } = props;

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #282950, #0E0E0E 40%)",
        minHeight: "100vh",
        padding: 17,
      }}
    >
      <NewsList news={news} duplicates={duplicates} />
    </section>
  );
}
