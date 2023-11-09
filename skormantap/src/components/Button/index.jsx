import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[27px]" };
const variants = {
  fill: {
    orange_100: "bg-orange-100 shadow-bs text-yellow-900",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    yellow_900: "bg-yellow-900 text-white-A700",
  },
};
const sizes = { xs: "p-3", sm: "p-[21px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "yellow_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["orange_100", "blue_gray_900", "yellow_900"]),
};

export { Button };
