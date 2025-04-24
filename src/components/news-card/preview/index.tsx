import { Space, Typography } from "antd";
import { GlobalOutlined, ReadOutlined, UserOutlined } from "@ant-design/icons";
import Extra from "./extra";
import "flagpack/dist/flagpack.css";
import { IData_SnippetNews } from "../../../types/data";
import FormattedDate from "../../ui/formatted-date";
import FormattedReach from "../../ui/formatted-reach";
import TopTraffic from "../../ui/top-traffic";
import CountryWithFlag from "../../ui/country-with-flag";
import { capitalizeFirstLetter } from "../../../utils/common";
import './index.css';

const { Link, Title, Text } = Typography;

interface Props {
  news: IData_SnippetNews;
  isDublicate?: boolean;
}

export default function Preview({ news, isDublicate = false }: Props) {
  const { DP, REACH, TRAFFIC, TI, URL, DOM, CNTR, CNTR_CODE, LANG, AU, SENT } =
    news;

  const textSize = isDublicate ? 12 : 14;
  const titleSize = isDublicate ? 5 : 3;

  return (
    <div
      className="news-card__header"
    >
      <Space direction="vertical" size={0}>
        <Space style={{ flexWrap: "wrap" }}>
          <Text type="secondary" style={{ fontSize: textSize }}>
            <FormattedDate date={DP} />
          </Text>
          <Text type="secondary" style={{ fontSize: textSize }}>
            <FormattedReach reach={REACH} />
          </Text>
          {TRAFFIC ? (
            <Text type="secondary" style={{ fontSize: textSize }}>
              <TopTraffic traffic={TRAFFIC} />
            </Text>
          ) : null}
        </Space>
        <Link href={URL} target="_blank">
          <Title
            className="header-title"
            level={titleSize}
          >
            {TI}
          </Title>
        </Link>
        <Space>
          <Link href="#" target="_blank">
            <GlobalOutlined
              style={{ color: "#ffffff73", marginRight: "3px" }}
            />
            <Text
              type="secondary"
              style={{ color: "inherit", fontSize: textSize }}
            >
              {DOM}
            </Text>
          </Link>
          <Text type="secondary" style={{ fontSize: textSize }}>
            <CountryWithFlag country={CNTR} code={CNTR_CODE} />
          </Text>
          <Text type="secondary" style={{ fontSize: textSize }}>
            <ReadOutlined style={{ marginRight: "3px" }} />
            {capitalizeFirstLetter(LANG)}
          </Text>
          {AU.length ? (
            <Text type="secondary" style={{ fontSize: textSize }}>
              <UserOutlined style={{ marginRight: "3px" }} />
              {AU.join(", ")}
            </Text>
          ) : null}
        </Space>
      </Space>
      <Extra infoUrl={URL} status={SENT ? capitalizeFirstLetter(SENT) : ""} />
    </div>
  );
}
