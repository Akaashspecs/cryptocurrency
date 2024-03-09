// TradingViewWidget.jsx
import { relative } from "path";
import React, { useEffect, useRef, memo, useState } from "react";

const TrendingGraph = () => {
  const container = useRef();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      console.log(script);
      !container!.current!.appendChild(script);

      setInitialized(true);
    }
  }, [initialized]);

  return (
    <div>
      <div
        className="tradingview-widget-container mt-4"
        ref={container}
        style={{
          height: "300px",
          width: "full",
          position: "relative",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default memo(TrendingGraph);
