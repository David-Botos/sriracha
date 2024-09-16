import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

export const PopupToast = ({
  children,
  type = "info",
  isOpen,
  onClose,
}: {
  children: ReactNode;
  type: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-greenSriracha";
      case "error":
        return "bg-redSriracha";
      default:
        return "bg-brownSriracha";
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-4 right-2 left-2 px-4 py-2 rounded-md text-white ${getBackgroundColor()} shadow-lg`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
