import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroysemibold font-normal",
  txtGilroySemiBold20: "font-gilroysemibold font-normal",
  txtGilroyBold24: "font-gilroybold font-normal",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtGilroyBold64: "font-gilroybold font-normal",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtGilroyBold40: "font-gilroybold font-normal",
  txtInterLight16: "font-inter font-light",
  txtMontserratRomanBold1987Black900: "font-bold font-montserrat",
  txtMontserratRomanBold1987: "font-bold font-montserrat",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtDMSerifTextRegular20: "font-dmseriftext font-normal",
  txtMontserratRomanSemiBold2271: "font-montserrat font-semibold",
  txtDelaGothicOneRegular7324: "font-delagothicone font-normal",
  txtGilroyBold100: "font-gilroybold font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
