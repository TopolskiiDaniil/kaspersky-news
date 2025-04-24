import { Typography } from "antd";
import { CSSProperties, ReactNode } from "react";

const { Text } = Typography;

type ColoredTextProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const ColoredText = ({ children, style = {} }: ColoredTextProps) => {
  return <Text style={style}>{children}</Text>;
};

export const WhiteText = (props: ColoredTextProps) => (
  <ColoredText {...props} style={{ color: "#ffffff", ...props.style }} />
);

export const BlueText = (props: ColoredTextProps) => (
  <ColoredText {...props} style={{ color: "#008BFF", ...props.style }} />
);
