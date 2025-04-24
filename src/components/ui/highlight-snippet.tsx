import { Tag, Typography } from "antd";

const {Text} = Typography;

const HighlightSnippet = ({ text }: { text: string }) => {
  return (
    <Text>
      {text.split(/(<kw>.*?<\/kw>)/g).map((part, i) => {
        if (part.startsWith('<kw>')) {
          const word = part.replace(/<\/?kw>/g, '');
          return (
            <Tag key={i} color="#0772CB">
              {word}
            </Tag>
          );
        }
        return part;
      })}
    </Text>
  );
};

export {HighlightSnippet};