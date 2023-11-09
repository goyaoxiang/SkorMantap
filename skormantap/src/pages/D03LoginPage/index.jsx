import React from "react";
import { useState } from "react";
import { Button, Img, Input, Text } from "components";
import { Link, useLocation } from "react-router-dom";
import Footer from "components/Footer";

const D03LoginPagePage = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };
  const location = useLocation();
  let next_path = "/student";

  if (location.pathname === "/student_login") {
    next_path = "/student";
  } else if (location.pathname === "/parent_login") {
    next_path = "/parent";
  } else if (location.pathname === "/tutor_login") {
    next_path = "/tutor";
  } else if (location.pathname === "/") {
    next_path = "/student";
  } else {
    next_path = "*";
  }

  return (
    <>
      <div className="bg-white-A700 font-poppins h-[2050px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat h-[2050px] md:h-[599px] m-auto pb-[1301px] md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group6.png')" }}
        >
          <div className="absolute flex flex-col gap-2 items-center justify-start right-[10%] top-[9%]">
            <Text
              className="md:text-5xl text-[100px] text-center text-gray-900"
              size="txtArialBold100"
            >
              Welcome
            </Text>
            <Text
              className="text-center text-gray-900 text-xl"
              size="txtPoppinsRegular20"
            >
              Login to start with SkorMantap
            </Text>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="absolute md:h-[305px] h-[306px] right-[9%] top-[19%] w-[32%] sm:w-full">
              <Input
                name="groupTwo"
                placeholder="Password"
                className="leading-[normal] p-0 placeholder:text-gray-900 text-left text-sm w-full"
                wrapClassName="absolute flex inset-x-[0] mt-[92px] mx-auto rounded-[13px] top-[0] w-full"
                type="password"
                prefix={
                  <Img
                    className="mr-[7px] my-auto"
                    src="images/img_frame.svg"
                    alt="Frame"
                  />
                }
              ></Input>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <Input
                  name="groupOne"
                  placeholder="Email address"
                  className="font-poppins leading-[normal] p-0 placeholder:text-gray-900 text-left text-sm w-full"
                  wrapClassName="flex w-full"
                  type="email"
                  prefix={
                    <Img
                      className="mr-[7px] my-auto"
                      src="images/img_frame_gray_900.svg"
                      alt="Frame"
                    />
                  }
                ></Input>
                <Link to={next_path}>
                  <Button
                    className="cursor-pointer font-bold font-poppins leading-[normal] min-w-[455px] sm:min-w-full mt-[121px] rounded-[13px] text-center text-sm"
                    color="blue_gray_900"
                    size="sm"
                  >
                    LOGIN
                  </Button>
                </Link>
                <Text
                  className="mt-[38px] text-base text-black-900"
                  size="txtInterLight16"
                >
                  <span className="text-black-900 font-inter text-left font-semibold">
                    Not a user?{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-amber-800 font-inter text-left font-semibold underline"
                  >
                    Sign Up Now
                  </a>
                </Text>
              </div>
            </div>
          </form>
          <Img
            className="absolute h-[599px] left-[8%] object-cover rounded-[40px] top-[7%] w-[41%]"
            src="images/img_rectangle4.png"
            alt="rectangleFour"
          />
          <div className="absolute bg-yellow-900 flex flex-row font-dmseriftext md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[18px] top-[0] w-full">
            <div className="flex flex-col items-center justify-start mb-[5px] ml-[9px]">
              <Text
                className="text-center text-gray-200 text-xl"
                size="txtPoppinsSemiBold30"
              >
                SKORMANTAP
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start my-0.5">
              <Text
                className="text-center text-gray-200 text-xl"
                size="txtPoppinsSemiBold30"
              >
                LANGUAGE
              </Text>
            </div>
          </div>
        </div>
        <Footer className="absolute bg-gray-100 bottom-[0] flex font-gilroybold gap-2.5 h-[418px] md:h-auto inset-x-[0] items-center justify-center mx-auto outline outline-[1.5px] outline-blue_gray-100 md:px-5 rounded-tl-[56px] rounded-tr-[56px] w-full" />
      </div>
    </>
  );
};

export default D03LoginPagePage;
