import React, { useState } from "react";
import indian_Flag from "./Flag/india (3).png";
import usa_Flag from "./Flag/united-kingdom.png";
import uk_Flag from "./Flag/united-states.png";
import logo from "./Flag/logo.svg";
import email from "./Icon/apple.png";
import skype from "./Icon/skype.png";
import facebook from "./Icon/facebook (2).png";
import twitter from "./Icon/twitter.png";
import instagram from "./Icon/instagram.png";
import linkedin from "./Icon/linkedin (1).png";
import youtube from "./Icon/youtube.png";
import img1 from "./images/Featured-image-31.jpg.optimal.jpg";
import img2 from "./images/blog_pictures2Fadults-coffee-colleagues-1323592-750x420.jpg";
import img3 from "./images/img.jpg";
import img4 from "./images/wide-angle-view-busy-design-office-workers-desks-54979926.webp";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [drawerName, setDrawerName] = useState("");

  const [internalDrawer, setInternalDrawer] = useState(true);
  const [internalDrawerName, setInternalDrawerName] = useState("mobileApp");

  // Function to handle mouse enter and leave events
  const handleMouseEnter = (name) => {
    setDrawer(true);
    setDrawerName(name);
  };

  const handleMouseLeave = (name) => {
    setDrawer(false);
    setDrawerName(name);
  };

  // Function to handle mouse enter and leave events for internal navbar
  const handleMouseEnterForNavbar = (name) => {
    setInternalDrawer(true);
    setInternalDrawerName(name);
  };

  const handleMouseLeaveForNavbar = (name) => {
    setInternalDrawer(false);
    setInternalDrawerName(name);
  };

  return (
    <div className="relative">
      {/* Contact Information  */}
      <div className="hidden lg:flex justify-between py-2">
        {/* Phone numbers start */}
        <div className="flex h-6 gap-6 my-auto">
          <div className="flex gap-2 cursor-pointer">
            <img src={indian_Flag} alt="flag" />
            <p className="text-sm my-auto hover:text-blue-500">+91 8000 161161</p>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <img src={uk_Flag} alt="flag" />
            <p className="text-sm my-auto ">+1 309 791 4105</p>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <img src={usa_Flag} alt="flag" />
            <p className="text-sm my-auto ">+44 20 8133 8639</p>
          </div>
        </div>

        <div>
          {/* button start */}
          <div className="flex gap-2">
            <button className="bg-gray-100 px-3 py-2 font-semibold rounded-2xl shadow-lg text-sm">
              Press Release
            </button>
            <button className="bg-gray-100 px-3 py-2 font-semibold rounded-2xl shadow-lg text-sm">
              Our Fresh Work
            </button>
            <button className="bg-indigo-700 text-white px-3 py-2 font-semibold rounded-2xl shadow-lg text-sm">
              Schedule Call
            </button>
          </div>
        </div>
      </div>

      {/* main navbar  */}
      <div className="navbar bg-base-200 rounded-lg shadow-xl p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100  w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img className="w-1/3" src={logo} alt="" />
        </div>

        <div className="navbar hidden lg:flex justify-end gap-5 p-0 text-slate-700">
          <Link
            to="/"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={() => handleMouseLeave("company")}
            className="flex gap-1 font-semibold py-5"
          >
            Company <FaCaretDown></FaCaretDown>
          </Link>
          <Link
            to="/"
            onMouseEnter={() => handleMouseEnter("service")}
            onMouseLeave={() => handleMouseLeave("service")}
            className="flex gap-1 font-semibold py-5"
          >
            Service <FaCaretDown></FaCaretDown>
          </Link>
          <Link
            to="/"
            onMouseEnter={() => handleMouseEnter("hire_developer")}
            onMouseLeave={() => handleMouseLeave("hire_developer")}
            className="flex gap-1 font-semibold py-5"
          >
            Hire Developer <FaCaretDown></FaCaretDown>
          </Link>
          <Link to="/" className="font-semibold py-5">
            Case Study{" "}
          </Link>
          <Link
            to="/"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={() => handleMouseLeave("resources")}
            className="flex gap-1 font-semibold py-5"
          >
            Resourcess <FaCaretDown></FaCaretDown>
          </Link>
          <Link to="/" className="font-semibold py-5">
            Contact Us
          </Link>
          <Link
            to="/"
            className="font-semibold bg-white p-3 rounded-3xl shadow-xl"
          >
            Get A Free Qoute
          </Link>
        </div>

        {/* company drawer  */}
        {drawer && drawerName === "company" && (
          <div
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={() => handleMouseLeave("company")}
            className="absolute z-10 h-[400px] w-full  mt-[460px] bg-white  rounded-lg shadow-lg grid grid-cols-4 place-items-start"
          >
            <div className="w-full h-[400px] flex flex-col gap-4 p-6 border-r-2 pr-44 pb-16">
              <Link className="hover:text-blue-500" to="/">Who We Are</Link>
              <Link className="hover:text-blue-500" to="/">Service</Link>
              <Link className="hover:text-blue-500" to="/">Career</Link>
              <Link className="hover:text-blue-500" to="/">Events</Link>
            </div>

            <div className="w-full  h-[400px] pt-4  m-4">
              <div className="flex gap-2 cursor-pointer ">
                <img src={indian_Flag} alt="flag" />
                <p className="text-sm my-auto hover:text-blue-500">+91 8000 161161</p>
              </div>
              <div className="flex gap-2 cursor-pointer mt-4">
                <img src={uk_Flag} alt="flag" />
                <p className="text-sm my-auto hover:text-blue-500">+1 309 791 4105</p>
              </div>
              <div className="flex gap-2 cursor-pointer mt-4">
                <img src={email} alt="icon" />
                <p className="text-sm my-auto hover:text-blue-500">info@hyperlinkinfosystem.com</p>
              </div>
              <div className="flex gap-2 cursor-pointer mt-4">
                <img src={skype} alt="icon" />
                <p className="text-sm my-auto hover:text-blue-500">hyperlink.infosystem</p>
              </div>

              <div className="flex gap-5 mt-10 ">
                <img className="cursor-pointer" src={facebook} alt="icon" />
                <img className="cursor-pointer" src={twitter} alt="icon" />
                <img className="cursor-pointer" src={instagram} alt="icon" />
                <img className="cursor-pointer" src={linkedin} alt="icon" />
                <img className="cursor-pointer" src={youtube} alt="icon" />
              </div>
            </div>

            <div className="">
              <img
                className="p-2  h-[400px] border-l-2 border-r-2 relative opacity-50"
                src={img1}
                alt=""
              />
              <p className="absolute top-72 ml-4 text-xl font-bold text-black ">
                Discover Career Opportunities <br /> at HyperLink InfoSystem
              </p>
            </div>
            <div>
              <img
                className="p-2 h-[400px] relative opacity-50"
                src={img2}
                alt=""
              />
              <p className="absolute top-72 ml-4 text-xl font-bold text-black ">
                Lets Discus Your <br /> Requirement
              </p>
            </div>
          </div>
        )}

        {/* service drawer  */}
        {drawer && drawerName === "service" && (
          <div
            onMouseEnter={() => handleMouseEnter("service")}
            onMouseLeave={() => handleMouseLeave("service")}
            className="absolute z-10 w-full  mt-[470px] bg-white  rounded-lg shadow-lg grid grid-cols-4  place-items-start"
          >
            <div className="w-full h-[410px] flex flex-col  pt-6 pl-6 border-r-2 pb-16 bg-gray-100">
              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "mobileApp" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600  flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("mobileApp")}
              >
                Mobile App Development{" "}
                {internalDrawerName === "mobileApp" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "webApp" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("webApp")}
              >
                Web And CMS Development{" "}
                {internalDrawerName === "webApp" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "e-commerce" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("e-commerce")}
              >
                Ecommerce Development
                {internalDrawerName === "e-commerce" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "blockchain" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("blockchain")}
              >
                Blockchain Development
                {internalDrawerName === "blockchain" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "game" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("game")}
              >
                Game Development
                {internalDrawerName === "game" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "sales" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("sales")}
              >
                Salesforce Solutions
                {internalDrawerName === "sales" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "ai" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("ai")}
              >
                Al & ML
                {internalDrawerName === "ai" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "iot" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("iot")}
              >
                IoT & Embedded
                {internalDrawerName === "iot" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "devops" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("devops")}
              >
                DevOps
                {internalDrawerName === "devops" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>
            </div>

            <div className="w-full  pt-4  ">
              {internalDrawer && internalDrawerName === "mobileApp" && (
                <div
                  onMouseEnter={() => handleMouseEnterForNavbar("mobileApp")}
                  className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600"
                >
                  <Link className="hover:text-blue-500" to="/">Android App</Link>
                  <Link className="hover:text-blue-500" to="/">iphone App</Link>
                  <Link className="hover:text-blue-500" to="/">Hybrid App</Link>
                  <Link className="hover:text-blue-500" to="/">Fluter</Link>
                  <Link className="hover:text-blue-500" to="/">React Native</Link>
                  <Link className="hover:text-blue-500" to="/">Kotlin</Link>
                  <Link className="hover:text-blue-500" to="/">lonic</Link>
                  <Link className="hover:text-blue-500" to="/">Swift</Link>
                  <Link className="hover:text-blue-500" to="/">Xamarin</Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "webApp" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link className="hover:text-blue-500" to="/">PHP</Link>
                  <Link className="hover:text-blue-500" to="/">WordPress</Link>
                  <Link className="hover:text-blue-500" to="/">Drupal</Link>
                  <Link className="hover:text-blue-500" to="/">Laravel</Link>
                  <Link className="hover:text-blue-500" to="/">Angular Js</Link>
                  <Link className="hover:text-blue-500" to="/">Node Js</Link>
                  <Link className="hover:text-blue-500" to="/">Codelgniter</Link>
                  <Link className="hover:text-blue-500" to="/">CakePHP</Link>
                  <Link className="hover:text-blue-500" to="/">Python</Link>
                  <Link className="hover:text-blue-500" to="/">TypeScript</Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "e-commerce" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link className="hover:text-blue-500" to="/">Magento</Link>
                  <Link className="hover:text-blue-500" to="/">Bigcommerce</Link>
                  <Link className="hover:text-blue-500" to="/">Ubercart</Link>
                  <Link className="hover:text-blue-500" to="/">CSCart</Link>
                  <Link className="hover:text-blue-500" to="/">Prestashop</Link>
                  <Link className="hover:text-blue-500" to="/">Virtuemart</Link>
                  <Link className="hover:text-blue-500" to="/">Shopify</Link>
                  <Link className="hover:text-blue-500" to="/">WooCommerce</Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "blockchain" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link className="hover:text-blue-500" to="/">Wallet</Link>
                  <Link className="hover:text-blue-500" to="/">Exchange</Link>
                  <Link className="hover:text-blue-500" to="/">Ethereum</Link>
                  <Link className="hover:text-blue-500" to="/">Hyperledger</Link>
                  <Link className="hover:text-blue-500" to="/">Smart Contracts</Link>
                  <Link className="hover:text-blue-500" to="/">Private Blockchain</Link>
                  <Link className="hover:text-blue-500" to="/">NFT Marketplace</Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "game" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link className="hover:text-blue-500" to="/">Unity 3D</Link>
                  <Link className="hover:text-blue-500" to="/">Metaverse new</Link>
                  <Link className="hover:text-blue-500" to="/">Unreal Engine</Link>
                  <Link className="hover:text-blue-500" to="/">Augmented Reality</Link>
                  <Link className="hover:text-blue-500" to="/">Virtual Reality</Link>
                  <Link className="hover:text-blue-500" to="/">Casual Games</Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "sales" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link to="/salesforce-development">
                    Salesforce Development
                  </Link>
                  <Link to="/salesforce-consulting">Salesforce Consulting</Link>
                  <Link to="/salesforce-implementation">
                    Salesforce Implementation
                  </Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "ai" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link to="/object-recognition">Object Recognition</Link>
                  <Link to="/text-to-speech">Text To Speech</Link>
                  <Link to="/business-intelligence">Business Intelligence</Link>
                  <Link to="/data-forecasting">Data Forecasting</Link>
                  <Link to="/natural-language-processing">
                    Natural Language Processing
                  </Link>
                  <Link to="/data-analytics">Data Analytics</Link>
                  <Link to="/recommendation-engine">Recommendation Engine</Link>
                  <Link to="/sentimental-analysis">Sentimental Analysis</Link>
                  <Link to="/alexa-skills-development">
                    Alexa Skills Development
                  </Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "iot" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link to="/iot-app">IoT App</Link>
                  <Link to="/embedded-software">Embedded Software</Link>
                  <Link to="/iot-hardware-prototyping">
                    IoT Hardware Prototyping
                  </Link>
                  <Link to="/iot-dashboard-analytics">
                    IoT Dashboard and Analytics
                  </Link>
                  <Link to="/smart-home-automation">
                    Smart Home - Home Automation
                  </Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "devops" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link to="/iot-app">DevOps</Link>
                </div>
              )}
            </div>

            <div className="w-full">
              <img
                className="w-full h-[400px] p-2 border-l-2 border-r-2 relative opacity-50"
                src={img3}
                alt=""
              />
              <p className="absolute top-80 ml-4 text-xl font-bold text-black ">
                Mobile App <br /> Development
              </p>
            </div>
            <div className="w-full mb-0">
              <img
                className="w-full h-[400px] p-2 relative opacity-50"
                src={img4}
                alt=""
              />
              <p className="absolute top-80 ml-4 text-xl font-bold text-black ">
                Lets Discus Your <br /> Requirement
              </p>
            </div>
          </div>
        )}

        {/* hire developers drawer  */}
        {drawer && drawerName === "hire_developer" && (
          <div
            onMouseEnter={() => handleMouseEnter("hire_developer")}
            onMouseLeave={() => handleMouseLeave("hire_developer")}
            className="absolute z-10 w-full mt-[710px] bg-white  rounded-lg shadow-lg  "
          >
            <div>
              <div className="py-6 w-full  border-[1px]  bg-gray-50 text-center">
                {" "}
                <Link className="font-semibold hover:text-blue-500" to="/">
                  Hire dedicated developers
                </Link>
              </div>

              <div className="lg:grid grid-cols-4  text-slate-700 font-semibold">
                <div className="border-r-2 p-14">
                  <p className="m-5">
                    <Link to="/app-developers">App Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link to="/web-developers">Web Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link to="/software-developers">Software Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link to="/full-stack-developers">
                      Full-stack Developers
                    </Link>
                  </p>
                  <p className="m-5">
                    <Link to="/frontend-developers">Frontend Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link to="/backend-developers">Backend Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link to="/ui-ux-designers">UI/UX Designers</Link>
                  </p>
                  <p className="m-5">
                    <Link to="/iot-solution-architect">
                      IoT Solution Architect
                    </Link>
                  </p>
                  <p className="m-5">
                    <Link to="/data-scientist">Data Scientist</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/salesforce-developers">
                      Salesforce Developers
                    </Link>
                  </p>
                </div>

                <div className="border-r-2 p-14">
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Blockchain Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Android Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">iOS Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">iPhone Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Flutter Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">React Native Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Swift Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Ionic Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Kotlin Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Java Developers</Link>
                  </p>
                </div>

                <div className="border-r-2 p-14">
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">AngularJS Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">ReactJS Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">NodeJS Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">VueJS Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">PHP Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">WordPress Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">CakePHP Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">CodeIgniter Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Laravel Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">YII Developers</Link>
                  </p>
                </div>

                <div className="p-14">
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Magento Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Shopify Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Drupal Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">WooCommerce Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Python Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Golang Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Solidity Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Dart Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Spring Boot Developers</Link>
                  </p>
                  <p className="m-5">
                    <Link className="hover:text-blue-500" to="/">Django Developers</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Research  */}
        {drawer && drawerName === "resources" && (
          <div
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={() => handleMouseLeave("resources")}
            className="absolute z-10 w-full  mt-[470px] bg-white  rounded-lg shadow-lg grid grid-cols-4  place-items-start"
          >
            <div className="w-full h-[410px] flex flex-col  pt-6 pl-6 border-r-2 pb-16 bg-gray-100">
              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Blog
              </Link>
              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Research
              </Link>
              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Media Coverage
              </Link>
              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Press Release
              </Link>

              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Tech News
              </Link>

              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Whitepaper
              </Link>

              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Podcast
              </Link>

              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Portfolio
              </Link>
              <Link
                to="/"
                className={`w-full  gap-3  hover:text-blue-500 p-2 rounded-xl font-semibold text-slate-600 `}
              >
                Download-Brach
              </Link>
            </div>

            <div className="w-full">
              <img
                className="w-full cursor-pointer h-[400px] p-2 border-l-2 border-r-2 relative opacity-50"
                src={img3}
                alt=""
              />
              <p className="absolute top-80 ml-4 text-xl font-bold text-black ">
                Mobile App <br /> Development
              </p>
            </div>

            <div className="w-full">
              <img
                className="w-full cursor-pointer h-[400px] p-2 border-l-2 border-r-2 relative opacity-50"
                src={img3}
                alt=""
              />
              <p className="absolute top-80 ml-4 text-xl font-bold text-black ">
                Mobile App <br /> Development
              </p>
            </div>

            <div className="w-full mb-0">
              <img
                className="w-full cursor-pointer h-[400px] p-2 relative opacity-50"
                src={img4}
                alt=""
              />
              <p className="absolute top-80 ml-4 text-xl font-bold text-black ">
                Lets Discus Your <br /> Requirement
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
