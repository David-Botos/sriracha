import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PopupModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border border-gray-200 rounded-t-xl px-6 py-6 z-50"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <div className="flex gap-2 mr-2">
              <h2 className="text-brownSriracha">X</h2>
              <h2 className="text-brownSriracha">Close</h2>
            </div>
          </button>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
