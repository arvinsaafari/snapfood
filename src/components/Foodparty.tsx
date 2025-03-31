"use client";
import { useState, useEffect } from "react";

interface FoodItem {
  title: string;
  img: string;
  description: string;
  point: string;
  price: number;
  isFoodParty: boolean; // اضافه کردن isFoodParty
}

interface Restaurant {
  id: number;
  title: string;
  img: string;
  stars: string;
  point: string;
  subjects: string;
  icon: string;
  foods: FoodItem[];
}

function Foodparty() {
  const toPersianDigits = (num: number) => num.toLocaleString("fa-IR");
  const [data, setData] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("/data/resturant.json")
      .then((res) => res.json() as Promise<Restaurant[]>)
      .then((res) => setData(res));
  }, []);

  return (
    <div className=" w-full md:w-[75%] xl:w-[85%%] mx-auto overflow-x-auto flex scroll-smooth snap-x snap-mandatory">
      {data.flatMap((restaurant) =>
        restaurant.foods
          .filter((food) => food.isFoodParty)
          .map((food) => (
            <div
              className="snap-center h-auto mt-4 py-1 px-2 flex items-center flex-col rounded-md bg-white w-[90%] flex-shrink-0 mx-[5%] md:w-[60%] xl:w-[30%] xl:mx-[2%]"
              key={food.title}
            >
              <div>
                <span className="block text-center mx-auto text-sm text-gray-700">
                  {restaurant.title}
                </span>
                <span className="block text-center text-sm mt-1 text-gray-700">
                  پیک فروشنده ۱۲,۴۰۰ تومان
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img className="rounded-xl h-36 mt-4" src={food.img} alt="" />
                <h2 className="text-center mt-4 text-base font-bold">
                  {food.title}
                </h2>
              </div>

              <div className="w-11/12 mt-8">
                <div className="justify-between flex w-full">
                  <div className="flex items-center">
                    <span className="text-xl">{food.point}</span>
                    <img
                      className="h-4 mr-1"
                      src="/images/rate-star.svg"
                      alt="rate-star"
                    />
                  </div>
                  <div>
                    <span className="text-white text-lg bg-[#FF00A6] rounded-lg px-1 mr-2">
                      ۳۰٪
                    </span>
                    <span className="text-gray-600 line-through decoration-gray-500">
                      {toPersianDigits(food.price)}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-3">
                  <div>
                    <span className="text-red-600 text-xs">
                      {" ۱ عدد باقی مانده "}
                    </span>
                  </div>
                  <div>
                    <span className="text-lg">
                      {toPersianDigits(food.price * 0.7)} {" تومان "}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-11/12 h-[3px] bg-red-500 mt-8 mb-3"></div>
            </div>
          ))
      )}
    </div>
  );
}

export default Foodparty;
