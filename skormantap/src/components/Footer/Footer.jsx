import React from "react";
import { Img, Text } from "components";
import { Link } from "react-router-dom";
import call from "../../assets/Images/public/img_call.svg";
import mail from "../../assets/Images/public/img_mail.svg";
import facebook from "../../assets/Images/public/img_facebook.svg";
import group121 from "../../assets/Images/public/img_group121.png";
import linkedin from "../../assets/Images/public/img_linkedin.svg";
import twitter from "../../assets/Images/public/img_twitter.svg";
import youtube from "../../assets/Images/public/img_youtube.svg";

const Footer = (props) => {
  return (
    <>
      <footer
        className={props.className}
        style={{
          height: "419px",
          width: "100%",
          paddingTop: "100px",
          paddingLeft: "306px",
          borderRadius: "56px 56px 0px 0px",
          border: "1px solid #E5E5E5",
          backgroundColor: "#F7F7F7",
        }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[77%] md:w-full">
          <div className="flex flex-col items-center justify-start w-1/4 md:w-full">
            <ul className="flex flex-col items-start justify-start w-full common-column-list">
              <Link to="/">
                <li>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtGilroyBold40"
                  >
                    SkorMantap
                  </Text>
                </li>
              </Link>
              <li>
                <div className="flex flex-row gap-3.5 items-start justify-start mt-[25px]">
                  <Img className="h-6 w-6" src={call} alt="call" />
                  <Text
                    className="text-black-900 text-xl"
                    size="txtGilroySemiBold20"
                  >
                    +603 1234 5678
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-3.5 items-start justify-start mt-[9px]">
                  <Img className="h-6 w-6" src={mail} alt="mail" />
                  <Text
                    className="mt-0.5 text-black-900 text-xl"
                    size="txtGilroySemiBold20"
                  >
                    info@skormantap.org
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-center justify-between mt-[22px]">
                  <Img className="h-[45px]" src={facebook} alt="facebook" />
                  <Img
                    className="h-[45px] md:h-auto object-cover"
                    src={group121}
                    alt="group121"
                  />
                  <Img className="h-[45px]" src={linkedin} alt="linkedin" />
                  <Img className="h-[45px]" src={twitter} alt="twitter" />
                  <Img className="h-[45px]" src={youtube} alt="youtube" />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between w-[59%] md:w-full">
            <div className="flex flex-col gap-[22px] items-start justify-start mb-1 w-[16%]">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroyBold24"
              >
                Menu
              </Text>
              <ul className="flex flex-col gap-1.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Categories
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Courses
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    New
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Certificates
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[19px] items-start justify-start my-0.5 w-[13%]">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroyBold24"
              >
                Company
              </Text>
              <ul className="flex flex-col gap-2 items-start justify-start md:w-full common-column-list">
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    About us
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    News
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Mentors
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Blog
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start mt-1 w-1/4">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroyBold24"
              >
                Support
              </Text>
              <ul className="flex flex-col gap-1.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Security
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Terms & Conditions
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Career
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Community
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
