"use client";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const OrdersModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-start p-0 m-0 bg-black bg-opacity-50 "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[350px] min-w-[30%] max-w-[350px] h-full bg-white shadow-lg "
      >
        {children}
        <button className=" bg-white text-[#00CF6E]  rounded-xl p-5 block mx-auto flex justify-center items-center">
          مشاهده همه سفارش ها{" "}
          <img
            className="h-7 ml-2"
            src="images/past-time.png"
            alt="past-time"
          />
        </button>
      </div>
    </div>
  );
};

export default OrdersModal;
