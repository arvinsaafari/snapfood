"use client";
import { useState, useEffect } from "react";

interface Comment {
  userId: number | string;
  userName: string;
  date: string;
  comment: string;
  tags: string[];
  star: number;
  replay?: {
    userId: string;
    comment: string;
  };
}

interface Foods {
  category: string;
  title: string;
  img: string;
  description: string;
  point: number;
  price: number;
  remaining?: number;
  comments: Comment[];
  isFoddparty: boolean;
}

interface Discount {
  hasDiscount: boolean;
  percentage: number;
}

interface Delivery {
  hasDelivery: boolean;
  deliveryFee: number;
}

interface Rating {
  point: number;
  star: number;
}

interface Restaurant {
  id: number;
  title: string;
  img: string;
  tags: string[];
  icon: string;
  category: string;
  discount: Discount;
  Addres: string;
  rating: Rating;
  delivery: Delivery;
  woirkingHours: string;
  paymentMethods: string;
  minimumCart: number;
  comments: Comment[];
  foods: Foods[];
}

function Foodparty() {
  const toPersianDigits = (num: number) => num.toLocaleString("fa-IR");
  const [data, setData] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("/data/restaurants.json")
      .then((res) => res.json() as Promise<Restaurant[]>)
      .then((res) => setData(res));
  }, []);

  return (
    <div className="w-full md:w-[75%] xl:w-[85%] mx-auto overflow-x-auto flex scroll-smooth snap-x snap-mandatory">
      {data.map((restaurant) =>
        restaurant.foods
          .filter((item: Foods) => item.isFoddparty)
          .map((food) => (
            <div
              className="snap-center h-auto mt-4 py-1 px-2 flex items-center flex-col rounded-md bg-white w-[90%] flex-shrink-0 mx-[5%] md:w-[60%] xl:w-[30%] xl:mx-[2%]"
              key={food.title + restaurant.id}
            >
              <div className="pt-4">
                <span className="block text-center mx-auto text-sm text-gray-700">
                  {restaurant.title}
                </span>
                <span className="block text-center text-sm mt-1 text-gray-700">
                  پیک فروشنده {toPersianDigits(restaurant.delivery.deliveryFee)}{" "}
                  تومان
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
                    <span className="text-xl">
                      {toPersianDigits(food.point)}
                    </span>
                    <img
                      className="h-4 mr-1"
                      src="/images/icons/rate-star.svg"
                      alt="rate-star"
                    />
                  </div>
                  <div>
                    <span className="text-white text-lg bg-[#FF00A6] rounded-lg px-1 mr-2">
                      {toPersianDigits(restaurant.discount.percentage)}٪
                    </span>
                    <span className="text-gray-600 line-through decoration-gray-500">
                      {toPersianDigits(food.price)}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-3">
                  <div>
                    <span className="text-red-600 text-xs">
                      {food.remaining &&
                        `${toPersianDigits(food.remaining)} عدد باقی مانده`}
                    </span>
                  </div>
                  <div>
                    <span className="text-lg">
                      {toPersianDigits(
                        food.price * (1 - restaurant.discount.percentage / 100)
                      )}{" "}
                      تومان
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

Foodparty.displayName = "Foodparty";

export default Foodparty;
