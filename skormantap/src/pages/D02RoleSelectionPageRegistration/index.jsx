import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import Footer from "components/Footer/Footer";
import rectangleFive from "../../assets/Images/public/img_rectangle5.png";
import rectangleSix from "../../assets/Images/public/img_rectangle6.png";
import rectangleSeven from "../../assets/Images/public/img_rectangle7.png";
import bg from "../../assets/Images/public/img_group6.png";

const D02RoleSelectionPageRegistrationPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-dmseriftext h-[1366px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto pb-[1366px] w-full"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-yellow-900 flex flex-row md:gap-10 items-center justify-between p-[18px] w-full">
              <div className="flex flex-col items-center justify-start mb-[5px] ml-[9px] md:px-5">
                <Text
                  className="text-center text-gray-200 text-xl"
                  size="txtDMSerifTextRegular20"
                ></Text>
              </div>
              <div className="flex flex-col items-center justify-start my-0.5 md:px-5">
                <Text
                  className="text-center text-gray-200 text-xl"
                  size="txtDMSerifTextRegular20"
                ></Text>
              </div>
            </div>
            <div className="flex flex-col font-gilroybold items-center justify-start mt-[120px] md:px-5">
              <Text
                className="md:text-5xl text-[64px] text-center text-gray-900"
                size="txtPoppinsSemiBold30"
              >
                Select your role
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row font-roboto md:gap-10 gap-[68px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1216px] mt-11 mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="h-[369px] relative rounded-[40px] shadow-bs w-full">
                <Img
                  className="h-[369px] m-auto object-cover rounded-[40px] w-full"
                  src={rectangleFive}
                  alt="rectangleFive"
                />
                <Link to="/student_login">
                  <Button
                    className="absolute cursor-pointer font-medium h-max inset-[0] justify-center leading-[normal] m-auto min-w-[207px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    shape="round"
                  >
                    {" "}
                    Student
                  </Button>
                </Link>
              </div>
              <div className="h-[369px] relative rounded-[40px] shadow-bs w-full">
                <Img
                  className="h-[369px] m-auto object-cover rounded-[40px] w-full"
                  src={rectangleSix}
                  alt="rectangleSix"
                />
                <Link to="/parent_login">
                  <Button
                    className="absolute cursor-pointer font-medium h-max inset-[0] justify-center leading-[normal] m-auto min-w-[207px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    shape="round"
                  >
                    {" "}
                    Parent
                  </Button>
                </Link>
              </div>
              <div className="h-[369px] relative rounded-[40px] shadow-bs w-full">
                <Img
                  className="h-[369px] m-auto object-cover rounded-[40px] w-full"
                  src={rectangleSeven}
                  alt="rectangleSeven"
                />
                <Link to="/tutor_login">
                  <Button
                    className="absolute cursor-pointer font-medium h-max inset-[0] justify-center leading-[normal] m-auto min-w-[207px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    shape="round"
                  >
                    {" "}
                    Tutor
                  </Button>
                </Link>
              </div>
            </List>
          </div>
        </div>
        <Footer className="absolute bottom-[0]" />
      </div>
    </>
  );
};

export default D02RoleSelectionPageRegistrationPage;
