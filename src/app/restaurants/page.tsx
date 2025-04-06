"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Category from "@/components/Category";
import FilterList from "@/components/FilterList";
import RestaurantsFilter from "@/components/ResturantsFilter";

export default function Restaurants() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("همه دسته بندی ها");

  return (
    <div>
      <header>
        <Header />
      </header>
      <main dir="rtl">
        <div className="flex container flex-col w-full md:flex-row mx-auto mt-6">
          <div className="md:w-2/5 lg:w-1/3">
            <aside className="">
              <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </aside>
            <aside className="">
              <FilterList />
            </aside>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-4 gap-4 mb-4 h-fit mr-4 md:w-3/5">
            <RestaurantsFilter selectedCategory={selectedCategory} />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
