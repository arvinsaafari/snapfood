"use client";

import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg relative flex flex-col"
            >
                {/* دکمه بستن بالای سمت راست */}
                <button onClick={onClose} className="absolute top-3 right-3 p-2 hover:opacity-70 transition">
                    <img src="/images/exit.svg" alt="Close" />
                </button>

                {/* عنوان مدال */}
                <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>

                {/* محتوای مدال */}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
