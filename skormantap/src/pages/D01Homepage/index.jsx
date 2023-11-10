import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";
import Footer from "components/Footer/Footer";
import expertTeacher from "../../assets/Images/public/img_expertteacher.png";
import groupSeven from "../../assets/Images/public/img_group7.svg";
import apple from "../../assets/Images/public/img_apple.png";
import groupNine from "../../assets/Images/public/img_group9.png";
import book from "../../assets/Images/public/img_book.png";
import palette from "../../assets/Images/public/img_palette.png";
import scholarcapscrol from "../../assets/Images/public/img_scholarcapscroll.png";
import backpack from "../../assets/Images/public/img_backpack.png";
import chalkboard from "../../assets/Images/public/img_chalkboard.png";
import groupTwentySix from "../../assets/Images/public/img_group26.png";
import logo from "../../assets/Images/public/img_image6.png";
import unlimitedaccess from "../../assets/Images/public/img_unlimitedaccess.png";
import anywhere from "../../assets/Images/public/img_anywhere.png";

const D01HomepagePage = () => {
  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[2050px] mx-auto relative w-full">
        <div className="absolute h-[1590px] md:h-[846px] inset-x-[0] mx-auto md:px-5 top-[3%] w-full">
          <div className="h-[1590px] md:h-[846px] m-auto w-full">
            <Img
              className="absolute top-[0] h-[1120px] right-[0] object-cover"
              src={groupNine}
              alt="groupNine"
            />
            <Img
              className="absolute h-[300px] object-cover left-[150px] top-[-50px] w-[300px]"
              src={logo}
              alt="logo"
            />
            <div className="absolute bg-cover bg-no-repeat md:h-[277px] h-[846px] p-[86px] md:px-10 sm:px-5 right-[0] top-[0] w-[54%] md:w-full">
              <div className="absolute md:h-[277px] h-[567px] right-[11%] top-[14%] w-[64%] sm:w-full">
                <Img
                  className="absolute bottom-[7%] h-[277px] right-[0]"
                  src={groupSeven}
                  alt="groupSeven"
                />
                <div className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[186px] items-center justify-start left-[0] w-[34%]"></div>
                <Img
                  className="absolute h-[225px] left-[6%] top-[5%]"
                  src={groupSeven}
                  alt="groupSeven"
                />
                <Img
                  className="absolute h-[183px] right-[3%] top-[0]"
                  src={groupSeven}
                  alt="groupSeven"
                />
                <Img
                  className="absolute h-[245px] right-[548px] top-[518px]"
                  src={groupSeven}
                  alt="groupSeven"
                />
                <Img
                  className="absolute h-[175px] right-[378px] top-[336px]"
                  src={groupSeven}
                  alt="groupSeven"
                />
                <Img
                  className="absolute h-[178px] right-[663px] top-[190px]"
                  src={groupSeven}
                  alt="groupSeven"
                />
              </div>
              <div className="absolute bg-cover bg-no-repeat flex flex-col h-[93px] inset-y-[0] items-end justify-start left-[38%] my-auto w-[11%]"></div>
              <div className="absolute bg-cover bg-no-repeat flex flex-col h-[93px] items-end justify-start left-[14%] pb-[5px] pl-[5px] top-[40%] w-[11%]"></div>
              <Img
                className="absolute bottom-1/4 h-[267px] object-cover right-[10%] w-[267px]"
                src={scholarcapscrol}
                alt="scholarcapscrol"
              />
              <Img
                className="absolute h-[218px] left-[29%] object-cover top-[18%] w-[217px]"
                src={backpack}
                alt="backpack"
              />
              <Img
                className="absolute h-[178px] object-cover right-[13%] top-[14%] w-[179px]"
                src={chalkboard}
                alt="chalkboard"
              />
              <Img
                className="absolute h-[258px] object-cover right-[648px] top-[616px] w-[258px]"
                src={apple}
                alt="apple"
              />
              <Img
                className="absolute h-[145px] object-cover right-[503px] top-[466px] w-[145px]"
                src={book}
                alt="book"
              />
              <Img
                className="absolute h-[160px] object-cover right-[776px] top-[316px] w-[160px]"
                src={palette}
                alt="palette"
              />
            </div>

            <Img
              className="absolute bottom-[-20px] h-[1120px] left-[0] object-cover"
              src={groupTwentySix}
              alt="groupTwentySix"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-start left-[7%] top-[14%] w-auto">
            <div className="flex flex-col gap-[42.58px] items-start justify-start w-auto md:w-full">
              <div
                className="md:h-[325px] h-[376px] relative w-[637px] md:w-full"
                style={{
                  display: "block",
                  height: "600px",
                  border: "grey 2px solid",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-end m-auto w-auto">
                  <div className="flex flex-col gap-[42.58px] items-start justify-start w-auto md:w-full">
                    <Text
                      className="leading-[100.00%] md:text-5xl text-[73.24px] text-black-900 tracking-[-2.93px]"
                      size="txtDelaGothicOneRegular7324"
                      style={{
                        paddingTop: "40px",
                        transform: "translateY(-60px)",
                      }}
                    >
                      <>
                        Learning and
                        <br />
                        teaching online,
                        <br />
                        made easy.
                      </>
                    </Text>
                    <Text
                      className="leading-[140.00%] sm:text-[18.71px] md:text-[20.71px] text-[22.71px] text-gray-700 tracking-[-0.91px]"
                      size="txtMontserratRomanSemiBold2271"
                      style={{
                        paddingBottom: "40px",
                        transform: "translateY(-60px)",
                      }}
                    >
                      <>
                        Gain subject certification or earn money
                        <br />
                        while teaching online with SkorMantap.
                      </>
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute left-[0] text-[19.87px] text-yellow-900 top-[0] tracking-[2.78px] uppercase w-auto"
                  size="txtMontserratRomanBold1987"
                  style={{ marginTop: "-50px", paddingLeft: "50px" }}
                >
                  DIGITAL LEARNING PLATFORM
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-poppins md:gap-10 gap-[600px] inset-x-[0] justify-start max-w-[1337px] mx-auto md:px-5 top-[5%] w-full">
          <div
            className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[20px] p-[47px] md:px-10 sm:px-5 rounded-[41px] shadow-bs2 w-[95%] md:w-full"
            style={{ marginTop: "900px" }}
          >
            <div className="flex flex-col items-center justify-start mb-[3px] w-[97%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-deep_orange-300"
                size="txtPoppinsBold40"
              >
                Why SkorMantap?
              </Text>
              <div className="flex flex-row items-start justify-between mt-[47px] w-[79%] md:w-full">
                <Img
                  className="h-[88px] ml-[50px] md:h-auto object-cover"
                  src={unlimitedaccess}
                  alt="unlimitedaccess"
                />
                <Img
                  className="h-[88px] md:h-auto object-cover"
                  src={expertTeacher}
                  alt="expertteacher"
                />
                <Img
                  className="h-20 md:h-auto mt-2 object-cover w-20"
                  src={anywhere}
                  alt="anywhere"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-6 w-[91%] md:w-full">
                <Text
                  className="md:mt-0 mt-[5px] ml-[65px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtPoppinsSemiBold30"
                >
                  Easy Access
                </Text>
                <Text
                  className="mb-[3px] md:ml-[0] ml-[185px] mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtPoppinsSemiBold30"
                  style={{ marginLeft: "235px" }}
                >
                  Qualified Tutors
                </Text>
                <Text
                  className="md:ml-[0] ml-[114px] md:mt-0 mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtPoppinsSemiBold30"
                  style={{ marginLeft: "150px" }}
                >
                  Learn Anywhere
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[3px] w-full">
                <Text
                  className="text-black-900 text-center text-lg"
                  size="txtPoppinsRegular18"
                >
                  Choose what you’d like to learn from our extensive
                  subscription library.
                </Text>
                <Text
                  className="text-black-900 text-center text-lg"
                  size="txtPoppinsRegular18"
                >
                  Learn from industry experts who are passionate about teaching.
                </Text>
                <Text
                  className="text-black-900 text-center text-lg"
                  size="txtPoppinsRegular18"
                >
                  Switch between your computer, tablet, or mobile device.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row items-center justify-start left-[8%] top-[35%] width-[261px]">
          <Text
            className="text-[19.87px] text-black-900 tracking-[-0.79px] w-auto"
            size="txtMontserratRomanBold1987Black900"
          >
            <Link
              to="/registration_selection"
              style={{
                marginLeft: "90px",
                marginTop: "80px",
                display: "inline-block",
                height: "51px",
                width: "149px",
                borderRadius: "17px",
                border: "black 1px solid",
                textAlign: "center",
                lineHeight: "51px",
                transform: "translateY(-50px)",
              }}
            >
              Sign In →
            </Link>
          </Text>
          <Link to="/registration_selection">
            <Button
              className="cursor-pointer font-bold h-[51px] min-w-[149px] rounded-[17px] text-[19.87px] text-center tracking-[-0.79px]"
              color="orange_100"
              style={{
                marginLeft: "80px",
                marginTop: "80px",
                transform: "translateY(-50px)",
              }}
            >
              Register →
            </Button>
          </Link>
        </div>
        <Footer className="absolute bottom-[0]" />
        <div className="absolute bg-yellow-900 flex flex-row font-dmseriftext md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[18px] top-[0] w-full">
          <div className="flex flex-col items-center justify-start mb-[5px] ml-[9px] md:px-5">
            <Text
              className="text-center text-gray-200 text-xl"
              size="txtPoppinsSemiBold30"
            >
              SKORMANTAP
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start my-0.5 md:px-5">
            <Text
              className="text-center text-gray-200 text-xl"
              size="txtPoppinsSemiBold30"
            >
              LANGUAGE
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default D01HomepagePage;
