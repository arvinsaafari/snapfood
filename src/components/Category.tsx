"use client";
import { useState, useEffect } from "react";
interface Restaurants {
  title: string;
  image: string;
}

interface categoryProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

function Category({ selectedCategory, setSelectedCategory }: categoryProps) {
  const [data, setData] = useState<Restaurants[]>([]);

  useEffect(() => {
    fetch("/data/category.json")
      .then((res) => res.json() as Promise<Restaurants[]>)
      .then((res) => setData(res));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 shadow-md rounded-xl">
      <div
        className={`cursor-pointer flex items-center p-2 rounded-xl hover:bg-gray-100 ${selectedCategory == "همه دسته بندی ها" ? "bg-gray-100 rounded-xl" : ""}`}
        onClick={() => setSelectedCategory("همه دسته بندی ها")}
      >
        <span className="text-gray-700 text-lg">{"همه دسته بندی ها"}</span>
      </div>
      {data.map(({ title, image }, index) => (
        <div
          className={`cursor-pointer p-2 flex rounded-xl items-center hover:bg-gray-100 ${selectedCategory == title ? "bg-gray-100 rounded-xl" : ""}`}
          key={index}
          onClick={() => setSelectedCategory(title)}
        >
          <img className="h-8 w-8 rounded-[50%] ml-2" src={image} />
          <span className="text-gray-700 text-sm">{title}</span>
        </div>
      ))}
    </div>
  );
}

export default Category;
