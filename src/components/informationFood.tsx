"use client";
import { ReactNode, useState } from "react";

interface InformationFoodsProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
}

function InformationFoods({
  onClose,
  isOpen,
  children,
}: InformationFoodsProps) {
  return (
    isOpen && (
      <div
        className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-50 z-50"
        onClick={onClose} // Close modal when clicking outside
      >
        <div
          className="w-[60%] h-[40] bg-white"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button
            className="absolute top-2 right-2 text-gray-500"
            onClick={onClose}
          >
            Close
          </button>
          {children}
        </div>
      </div>
    )
  );
}
