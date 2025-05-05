import type { Foods } from "@/types/restaurant";

import { RefObject } from "react";

interface FoodCardProps {
  foods: Foods[];
  sectionRefs: RefObject<{ [key: string]: HTMLDivElement | null }>;
  selectedFoodCategory?: string;
}

function FoodCard({ foods, sectionRefs, selectedFoodCategory }: FoodCardProps) {
  const toPersianDigits = (num: number) => num.toLocaleString("fa-IR");

  const foodPartyFoods = foods.filter((food) => food.isFoodparty);
  const papularFoods = foods.filter((food) => food.isPapular);

  const groupedByCategory: { [category: string]: Foods[] } = {};

  foods.forEach((food) => {
    if (!groupedByCategory[food.category]) {
      groupedByCategory[food.category] = [];
    }
    groupedByCategory[food.category].push(food);
  });

  const renderFoods = (food: Foods, index: number, category?: string) => {
    return (
      <div className="border border-gray-200 px-2 " key={index}>
        <div className=" flex p-2 justify-center items-center">
          <div>
            <h2 className="text-lg">{food.title}</h2>
            <p className=" w-[90%] text-xs text-gray-400 mt-3">
              {food.description}
            </p>
          </div>
          <img className="h-28" src={food.img} alt="food-img" />
        </div>
        <div
          className={`text-sm mx-auto mb-2 ${
            food.remaining === 1 ? `text-red-500` : `text-black`
          }`}
        >
          {food.remaining &&
            `${toPersianDigits(food.remaining)} عدد باقی مانده`}
        </div>
        <div>
          <div
            className={`h-[2px] mx-auto mb-4 ${
              food.remaining === 1 ? `bg-red-500` : `bg-gray-300`
            }`}
          ></div>

          <div className="flex justify-between my-6 mx-auto w-[95%]">
            <div className="flex items-center justify-center">
              {food.discount?.hasDiscount && (
                <span className=" text-pink-700 text-sm font-bold ml-1 bg-pink-100 p-1">
                  {toPersianDigits(food.discount.percentage)}٪
                </span>
              )}
              <div className="flex flex-col">
                <span
                  className={` ${food.discount?.hasDiscount === true ? `line-through text-gray-400 text-xs` : `text-blck`}`}
                >
                  {toPersianDigits(food.price)} تومان
                </span>
                {food.discount?.hasDiscount === true && (
                  <span className="text-sm text-black font-bold">
                    {toPersianDigits(
                      food.discount?.hasDiscount
                        ? Math.round(
                            food.price * (1 - food.discount.percentage / 100)
                          )
                        : food.price
                    )}{" "}
                    تومان
                  </span>
                )}
              </div>
            </div>

            <div>
              <button className="bg-white shadow-md px-6 py-2 text-sm text-center text-pink-500 rounded-full">
                افزودن
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div>
        <div
          ref={(el) => {
            sectionRefs.current["فود پارتی"] = el;
          }}
        >
          {foodPartyFoods.map((food, index) => renderFoods(food, index))}
        </div>
      </div>

      <div>
        <div className="text-center text-xs mt-8 mb-2">پرطرفدارها</div>
        <div
          ref={(el) => {
            sectionRefs.current["پرطرفدارها"] = el;
          }}
        >
          {papularFoods.map((food, index) => renderFoods(food, index))}
        </div>
      </div>

      {Object.keys(groupedByCategory).length > 0 && (
        <div className="mb-8">
          {Object.keys(groupedByCategory).map((category) => (
            <div key={category} className="mb-6">
              <div className="text-center text-xs mt-8 mb-2 text-gray-700">
                {category}
              </div>
              <div
                ref={(el) => {
                  sectionRefs.current[category] = el;
                }}
              >
                {groupedByCategory[category].map((food, index) =>
                  renderFoods(food, index, category)
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default FoodCard;
