"use client";

import { useState, useEffect } from "react";

interface Citys {
  province: string;
}

function CityList() {
  const [data, setData] = useState<Citys[]>([]);

  useEffect(() => {
    fetch("/data/citys.json")
      .then((res) => res.json() as Promise<Citys[]>)
      .then((res) => setData(res));
  }, []);

  return (
    <div dir="rtl" className="p-8 grid grid-cols-3 gap-4 lg:grid-cols-4">
      {data.map((item, index) => (
        <div className="text-xs  text-gray-500">{item.province}</div>
      ))}
    </div>
  );
}

export default CityList;
