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
            <p className="text-sm my-auto ">+91 8000 161161</p>
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
            Resources <FaCaretDown></FaCaretDown>
          </Link>
          <Link to="/" className="font-semibold py-5">
            Contact Us <FaCaretDown></FaCaretDown>
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
            className="absolute w-full  mt-72 bg-white  rounded-lg shadow-lg grid grid-cols-4 place-items-start"
          >
            <div className="flex flex-col gap-4 p-6 border-r-2 pr-44 pb-16">
              <Link to="/">Who We Are</Link>
              <Link to="/">Service</Link>
              <Link to="/">Career</Link>
              <Link to="/">Events</Link>
            </div>

            <div className="  pt-4  ">
              <div className="flex gap-2 cursor-pointer ">
                <img src={indian_Flag} alt="flag" />
                <p className="text-sm my-auto ">+91 8000 161161</p>
              </div>
              <div className="flex gap-2 cursor-pointer mt-4">
                <img src={uk_Flag} alt="flag" />
                <p className="text-sm my-auto ">+1 309 791 4105</p>
              </div>
              <div className="flex gap-2 cursor-pointer mt-4">
                <img src={email} alt="icon" />
                <p className="text-sm my-auto ">info@hyperlinkinfosystem.com</p>
              </div>
              <div className="flex gap-2 cursor-pointer mt-4">
                <img src={skype} alt="icon" />
                <p className="text-sm my-auto ">hyperlink.infosystem</p>
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
                className="p-2 border-l-2 border-r-2 relative opacity-50"
                src={img1}
                alt=""
              />
              <p className="absolute top-36 ml-4 text-xl font-bold text-black ">
                Discover Career Opportunities <br /> at HyperLink InfoSystem
              </p>
            </div>
            <div>
              <img className="p-2 relative opacity-50" src={img2} alt="" />
              <p className="absolute top-36 ml-4 text-xl font-bold text-black ">
                Lets Discus Your <br /> Requirement
              </p>
            </div>
          </div>
        )}

        {/* service drawer  */}
        {
          drawer && drawerName === "service" &&
          <div
            onMouseEnter={() => handleMouseEnter("service")}
            onMouseLeave={() => handleMouseLeave("service")}
            className="absolute w-full  mt-[420px] bg-white  rounded-lg shadow-lg grid grid-cols-4  place-items-start"
          >
            <div className="w-full flex flex-col gap-4 pt-6 pl-6 border-r-2 border-2 pb-16 bg-gray-100">
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
                  internalDrawerName === "" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("")}
              >
                Game Development
                {internalDrawerName === "" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              {/* <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("")}
              >
                Salesforce Solutions
                {internalDrawerName === "" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("")}
              >
                Al & ML
                {internalDrawerName === "" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("mobileApp")}
              >
                IoT & Embedded
                {internalDrawerName === "" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link>

              <Link
                to="/"
                className={`w-full flex gap-3 ${
                  internalDrawerName === "" && "bg-white"
                } p-2 rounded-xl font-semibold text-slate-600   flex justify-between`}
                onMouseEnter={() => handleMouseEnterForNavbar("")}
              >
                DevOps
                {internalDrawerName === "" && (
                  <span className="my-auto">
                    <FaCaretRight></FaCaretRight>
                  </span>
                )}
              </Link> */}

             
            </div>

            <div className="w-full  pt-4  ">
              {internalDrawer && internalDrawerName === "mobileApp" && (
                <div
                  onMouseEnter={() => handleMouseEnterForNavbar("mobileApp")}
                  onMouseLeave={() => handleMouseLeaveForNavbar("mobileApp")}
                  className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600"
                >
                  <Link to="/">Android App</Link>
                  <Link to="/">iphone App</Link>
                  <Link to="/">Hybrid App</Link>
                  <Link to="/">Fluter</Link>
                  <Link to="/">React Native</Link>
                  <Link to="/">Kotlin</Link>
                  <Link to="/">lonic</Link>
                  <Link to="/">Swift</Link>
                  <Link to="/">Xamarin</Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "webApp" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link to="/">PHP</Link>
                  <Link to="/">WordPress</Link>
                  <Link to="/">Drupal</Link>
                  <Link to="/">Laravel</Link>
                  <Link to="/">Angular Js</Link>
                  <Link to="/">Node Js</Link>
                  <Link to="/">Codelgniter</Link>
                  <Link to="/">CakePHP</Link>
                  <Link to="/">Python</Link>
                  <Link to="/">TypeScript</Link>
                </div>
              )}

              {internalDrawer && internalDrawerName === "e-commerce" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link to="/">Magento</Link>
                  <Link to="/">Bigcommerce</Link>
                  <Link to="/">Ubercart</Link>
                  <Link to="/">CSCart</Link>
                  <Link to="/">Prestashop</Link>
                  <Link to="/">Virtuemart</Link>
                  <Link to="/">Shopify</Link>
                  <Link to="/">WooCommerce</Link>
                  
                </div>
              )}

              {internalDrawer && internalDrawerName === "blockchain" && (
                <div className="flex flex-col gap-2 pl-6 pt-5 font-semibold text-slate-600">
                  <Link to="/">Wallet</Link>
                  <Link to="/">Exchange</Link>
                  <Link to="/">Ethereum</Link>
                  <Link to="/">Hyperledger</Link>
                  <Link to="/">Smart Contracts</Link>
                  <Link to="/">Private Blockchain</Link>
                  <Link to="/">NFT Marketplace</Link>
                </div>
              )}
            </div>

            <div className="w-full">
              <img
                className="w-full h-[352px] p-2 border-l-2 border-r-2 relative opacity-50"
                src={img3}
                alt=""
              />
              <p className="absolute top-64 ml-4 text-xl font-bold text-black ">
                Mobile App <br /> Development
              </p>
            </div>
            <div className="w-full border-2 mb-0">
              <img className="w-full h-[352px] p-2 relative opacity-50" src={img4} alt="" />
              <p className="absolute top-64 ml-4 text-xl font-bold text-black ">
                Lets Discus Your <br /> Requirement
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
