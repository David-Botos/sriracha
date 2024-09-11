import { motion } from "framer-motion";
const SrirachaBottle = ({ isOpen }: { isOpen: boolean }) => {
  const topLineVariants = {
    closed: { d: "M4.61256 28.0834H12.6126" },
    open: { d: "M5.61256 28.0834L11.6126 34.0834" },
  };

  const middleLineVariants = {
    closed: { opacity: 1, d: "M4.61255 31.0834H12.6126" },
    open: { opacity: 0, d: "M4.61255 31.0834H12.6126" },
  };

  const bottomLineVariants = {
    closed: { d: "M4.61255 34.0834H12.6126" },
    open: { d: "M5.61256 34.0834L11.6126 28.0834" },
  };

  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 58 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(20,5)">
        <motion.g
          animate={{
            rotate: isOpen ? -150 : 0,
            translateY: isOpen ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0.5, originY: 0.62 }}
        >
          <motion.path
            d="M4.98256 7.44724C5.52067 6.92834 6.69467 6.59119 6.69467 6.59119V5.73512H7.15562V3.56205C7.33405 3.16857 7.7971 2.82894 7.7971 2.82894L8.03362 0.5H9.24087L9.52097 2.82894C9.52097 2.82894 9.9161 3.173 10.086 3.56205V5.73512H10.5799V6.59119C10.5799 6.59119 11.8246 6.90747 12.3907 7.44724V11.6426C12.3907 11.6426 11.6554 11.7287 10.7488 11.8028C10.4137 11.8302 10.0552 11.8559 9.70176 11.8751C9.32042 11.8957 8.94502 11.9087 8.61134 11.9077C8.27576 11.9067 7.89628 11.8914 7.51236 11.8686C7.15961 11.8477 6.80311 11.8204 6.47345 11.792C5.64275 11.7206 4.98256 11.6426 4.98256 11.6426V7.44724Z"
            fill="#26B67A"
          />
          <motion.path
            d="M4.98256 7.44724C5.52067 6.92834 6.69467 6.59119 6.69467 6.59119M4.98256 7.44724V11.6426C4.98256 11.6426 5.64275 11.7206 6.47345 11.792M4.98256 7.44724C4.98256 7.44724 5.64296 7.49379 6.47345 7.5364M6.69467 6.59119V5.73512H7.15562M6.69467 6.59119H10.5799M7.15562 5.73512V3.56205C7.33405 3.16857 7.7971 2.82894 7.7971 2.82894M7.15562 5.73512H10.086M7.7971 2.82894L8.03362 0.5H9.24087L9.52097 2.82894M7.7971 2.82894H9.52097M9.52097 2.82894C9.52097 2.82894 9.9161 3.173 10.086 3.56205V5.73512M10.086 5.73512H10.5799V6.59119M10.5799 6.59119C10.5799 6.59119 11.8246 6.90747 12.3907 7.44724M12.3907 7.44724V11.6426C12.3907 11.6426 11.6554 11.7287 10.7488 11.8028M12.3907 7.44724C12.3907 7.44724 11.6552 7.49862 10.7488 7.54284M8.61134 11.9077C8.27576 11.9067 7.89628 11.8914 7.51236 11.8686M8.61134 11.9077V7.6055M8.61134 11.9077C8.94502 11.9087 9.32042 11.8957 9.70176 11.8751M8.61134 7.6055C8.27604 7.60492 7.8965 7.59577 7.51236 7.58213M8.61134 7.6055C8.94477 7.60608 9.32023 7.59833 9.70176 7.58599M6.47345 7.5364V11.792M6.47345 7.5364C6.80317 7.55332 7.1597 7.56962 7.51236 7.58213M6.47345 11.792C6.80311 11.8204 7.15961 11.8477 7.51236 11.8686M7.51236 7.58213V11.8686M9.70176 11.8751V7.58599M9.70176 11.8751C10.0552 11.8559 10.4137 11.8302 10.7488 11.8028M9.70176 7.58599C10.0551 7.57456 10.4136 7.55919 10.7488 7.54284M10.7488 11.8028V7.54284"
            stroke="black"
            strokeWidth="0.5"
          />
          <motion.path
            d="M1 20.7443V47.845C1 47.845 1.55044 50.5 8.70608 50.5C15.9924 50.5 16.2503 47.845 16.2503 47.845V20.7443C16.2503 19.1577 11.8144 16.3407 11.8144 14.9809V12.7791C11.8144 12.7791 12.1035 12.3968 12.3325 12.0992V11.6919C12.3325 11.6919 11.6093 11.7766 10.7178 11.8494C10.3882 11.8764 10.0357 11.9017 9.68814 11.9205C9.31314 11.9408 8.94397 11.9535 8.61583 11.9526C8.28582 11.9516 7.91265 11.9366 7.5351 11.9141C7.18821 11.8935 6.83763 11.8667 6.51345 11.8388C5.69654 11.7686 5.04731 11.6919 5.04731 11.6919V12.0992C5.25478 12.391 5.6625 12.7791 5.6625 12.7791V14.9809C5.6625 16.4055 1 18.8663 1 20.7443Z"
            fill="#DD3C26"
            stroke="black"
            strokeWidth="0.75"
          />
        </motion.g>
        {/* hamburger lines */}
        <motion.g
          animate={{
            translateY: isOpen ? -6 : 0,
            translateX: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.path
            variants={topLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path
            variants={middleLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            variants={bottomLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </g>
    </svg>
  );
};

export default SrirachaBottle;
