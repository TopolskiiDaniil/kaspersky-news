import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "flagpack/dist/flagpack.css";
import { mockData } from "./utils/mock";
import { generateRandomNewsDuplicates } from "./utils/common";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const duplicates = generateRandomNewsDuplicates(mockData[0]);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: "#ffffff",
        },
      }}
    >
      <App news={mockData} duplicates={duplicates} />
    </ConfigProvider>
  </React.StrictMode>
);
