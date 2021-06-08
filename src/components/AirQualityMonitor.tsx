import React, { useEffect, useRef, useState } from "react";
import { envVariables } from "../utils/envVariables";
import { getColorValue } from "../utils/share";
import Graph from "./Graph";
import Table from "./Table";

interface valueSchema {
  aqi: number;
  timestamp: any;
  fill: string;
}

interface dataSchema {
  [key: string]: valueSchema;
}

interface cityAQI {
  city: string;
  aqi: number;
}

const AirQualityMonitor = () => {
  const ws = useRef<WebSocket | null>(null);
  const [data, setData] = useState<dataSchema>({});
  const [loading, setLoading] = useState(true);
  const dataRef = useRef(data);
  const setDataRef = useRef(setData);
  const filteredData = Object.keys(data).map((key) => {
    return {
      name: key,
      key,
      value: data[key].aqi,
      fill: data[key].fill,
      timestamp:data[key].timestamp,
    };
  });

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  useEffect(() => {
    ws.current = new WebSocket(envVariables.WEBSOCKET_URL);
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");
    ws.current.onmessage = (event: { data: string }) => {
      const responseData = JSON.parse(event.data) as cityAQI[];
      let updatedData = { ...dataRef.current };
      setLoading(false);
      responseData.forEach((value) => {
        const date = new Date();
        try {
          updatedData[value.city] = {
            aqi: value.aqi,
            fill: getColorValue(value.aqi),
            timestamp: date,
          };
        } catch (error) {
          updatedData = {
            ...updatedData,
            [value.city]: {
              aqi: value.aqi,
              fill: getColorValue(value.aqi),
              timestamp: date,
            },
          };
        }
      });
      setDataRef.current(updatedData);
    };
    return () => {
      ws.current?.close();
    };
  }, []);

  return (
    <div>
      {loading ? 
        <div className="spin"></div> :
          <><Table filteredData={filteredData}/>
          <Graph filteredData={filteredData}/></>}
    </div>
  );
};

export default AirQualityMonitor;
