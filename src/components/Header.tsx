"use client";
import React, { useEffect } from "react";
import MenuItem from "../components/MenuItem";
import menuitem from "../../public/data/menuitem.json";
import { useState, useRef } from "react";
import Modal from "./Modal";
import OrdersModal from "./OrdersModal";
import ProfileMenu from "./ProfileMenu";

type Address = {
  id: number;
  title: string;
  details: string;
};

type orders = {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
};

function Header() {
  const profileButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isProfilMenuOpen, SetIsProfileMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectAddress, setSelectAddress] = useState<Address | null>(null);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState<boolean>(false);
  const [orders, SetOrders] = useState<orders[]>([]);

  useEffect(() => {
    fetch("/data/OrdersList.json")
      .then((res) => res.json() as Promise<orders[]>)
      .then((data) => {
        SetOrders(data);
      });
  }, []);

  useEffect(() => {
    fetch("/data/addresses.json")
      .then((res) => res.json() as Promise<Address[]>)
      .then((data) => {
        setAddresses(data);
        if (data.length > 0) {
          setSelectAddress(data[0]);
        }
      });
  }, []);

  const handleOnClick = () => {
    setModalOpen(true);
  };

  const handleOnClickOrders = () => {
    setIsOrdersModalOpen(true);
  };

  const handleSelectAddress = (address: Address) => {
    setSelectAddress(address);
    setModalOpen(false);
  };
  return (
    <header className="p-2 relative shadow-md">
      <div className=" flex p-4 justify-between">
        <div className=" flex items-center space-x-8 ">
          <button onClick={handleOnClickOrders} className="flex space-x-2">
            <p className="hidden lg:block"> سفارش ها</p>
            <img
              src="/images/icons/order.svg"
              alt="order"
              className="w-5 h-5"
            />
          </button>
          <button
            ref={profileButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              SetIsProfileMenuOpen((prev) => !prev);
            }}
          >
            <img src="/images/icons/user.svg" alt="user" className="w-5 h-5" />
          </button>
          <button>
            <img
              src="/images/icons/search.svg"
              alt="search"
              className="w-5 h-5 block lg:hidden"
            />
          </button>
        </div>

        <div className="hidden lg:flex justify-center w-[40%] max-w-[500px] min-w-[250px]">
          <div className="relative w-full">
            <img
              src="/images/icons/search.svg"
              alt="search icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input
              type="search"
              placeholder="جست و جو در اسنپ فود"
              className="bg-[#EBEDF0] text-right w-full border p-2 px-4 pr-10 rounded-lg placeholder:text-right"
            />
          </div>
        </div>

        <div className="flex ">
          <div
            onClick={handleOnClick}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img
              src="/images/icons/bottom-purple.svg"
              alt="arrow"
              className="w-3 h-3"
            />
            <p className="text-xs text-gray-500">
              {selectAddress
                ? selectAddress.details.length > 20
                  ? selectAddress.details.substring(0, 20) + "..."
                  : selectAddress.details
                : "آدرس خود را انتخاب کنید"}
            </p>

            <img src="/images/icons/location.svg" alt="location" />
          </div>
          <a href="#">
            <img
              className="h-10 ml-8 hidden md:block"
              src="/images/icons/logo.png"
              alt="logo"
            />
          </a>
        </div>
      </div>

      <div className="p-4">
        <div className="flex overflow-x-auto space-x-10 scroll-smooth md:w-full md:justify-between">
          {[...menuitem].reverse().map((item, id) => (
            <MenuItem key={id} icon={item.icon} name={item.title} />
          ))}
        </div>
      </div>

      <Modal
        title="انتخاب آدرس"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="border p-3 rounded-lg flex justify-between items-center"
            >
              <div className="flex space-x-2">
                <button className="text-green-500">
                  <img src="/images/icons/edit.svg" alt="edit " />
                </button>
                <button className="text-red-500">
                  <img src="/images/icons/delete.svg" alt="delete" />
                </button>
              </div>

              <div className="text-right">
                <p>{address.title}</p>
                <p className="text-sm text-gray-500">{address.details}</p>
              </div>
              <input
                type="radio"
                name="address"
                checked={selectAddress?.id == address.id}
                onChange={() => handleSelectAddress(address)}
                className="w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-transparent focus:right-0 relative"
              />
            </div>
          ))}
        </div>
        <div className="text-right">
          <button className="text-green-600 mt-4">+ ساخت آدرس جدید</button>
        </div>
      </Modal>
      <OrdersModal
        isOpen={isOrdersModalOpen}
        onClose={() => {
          setIsOrdersModalOpen(false);
        }}
      >
        <h2 className="text-right mt-4 mr-4 text-xs">سفارش های پیشین</h2>

        {orders.map((order) => (
          <div key={order.id} className="border p-3 m-4 rounded-xl">
            <div className="flex justify-end items-center">
              <div dir="rtl" className="mr-4">
                <div>
                  <span>{order.title}</span>
                </div>
                <div className="mt-1">
                  <span className="text-xs text-gray-600">{order.date}</span>
                  <span className="text-xs text-gray-600 mr-4">
                    {order.time}
                  </span>
                </div>
              </div>

              <div>
                <img
                  className="rounded-[50%] h-[50px]"
                  src={order.image}
                  alt="pizzalogo"
                />
              </div>
            </div>

            <div
              className="bg-[#50bd7118] rounded-xl flex items-center justify-between p-2 mt-4"
              dir="rtl"
            >
              <span className="text-[10px]">
                {" "}
                نظرتان را درباره این سفارش به اشتراک بگذارید
              </span>
              <button className="text-xs text-green-600"> ثبت نظر </button>
            </div>

            <div className="flex items-center justify-between mt-2">
              <button className="bg-[#92929233] flex p-2 border items-center rounded-xl justify-center text-[14px] w-[48%]">
                {" "}
                مشاهده فاکتور
                <img
                  className="ml-2 h-4"
                  src="images/icons/refresh.svg"
                  alt=""
                />
              </button>
              <button className="bg-[#92929233] flex p-2 border items-center justify-center rounded-xl text-[14px] w-[48%]">
                {" "}
                سفارش مجدد{" "}
                <img className="ml-2 h-4" src="images/alert.png" alt="alert" />
              </button>
            </div>
          </div>
        ))}
      </OrdersModal>
      <ProfileMenu
        buttonRef={profileButtonRef}
        isOpen={isProfilMenuOpen}
        setIsOpen={SetIsProfileMenuOpen}
      />
    </header>
  );
}

export default Header;
