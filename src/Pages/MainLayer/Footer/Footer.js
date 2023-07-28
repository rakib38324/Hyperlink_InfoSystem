import React from "react";
import india from "./images/india.png";
import mumbai from "./images/mumbai.png";
import usa from "./images/usa.png";
import uk from "./images/uk.png";
import indiaImg from "../Navbar/Flag/india (3).png";
import USA from "../Navbar/Flag/united-states.png";
import UK from "../Navbar/Flag/united-kingdom.png";
import SocialBanner from "../../Home/SocialBanner/SocialBanner";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="static">
      {/* social media banner  */}

      <SocialBanner></SocialBanner>

      <div className="w-3/4 lg:w-2/3  rounded-3xl mx-auto text-center p-10 bg-indigo-700 mb-[-100px] z-10 relative">
        <p className="text-lg lg:text-4xl font-bold text-white">
          Let’s Create Big Stories Together
        </p>
        <p className="text-white text-sm lg:text-lg my-4">
          Mobile is in our nerves. We don’t just build apps, we create brand.{" "}
          <br />
          Choosing us will be your best decision.
        </p>

        <button className="p-3 mx-auto bg-red-600  text-white font-semibold flex">
          Get A Quote{" "}
          <FaArrowRightLong className="ml-4 my-auto"></FaArrowRightLong>
        </button>
        {/* <p > <FaArrowRightLong className="my-auto"></FaArrowRightLong></p> */}
      </div>

      <footer className="footer grid-rows-3 p-10 bg-slate-900 text-white font-semibold pt-48">
        <div>
          <span className="footer-title text-2xl ">About</span>
          <a className="link link-hover">Who We Are</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Industries</a>
          <a className="link link-hover">Case Study</a>
          <a className="link link-hover">Portfolio</a>
          <a className="link link-hover">Sitemap</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <span className="footer-title text-2xl ">Ecommerce</span>
          <a className="link link-hover">Magento</a>
          <a className="link link-hover">Shopify</a>
          <a className="link link-hover">Ubercart</a>
          <a className="link link-hover">Prestashop</a>
          <a className="link link-hover">CS Cart</a>
          <a className="link link-hover">VirtueMart</a>
          <a className="link link-hover">BigCommerce</a>
          <a className="link link-hover">WooCommerce</a>
        </div>
        <div>
          <span className="footer-title text-2xl ">Blockchain</span>
          <a href="#" class="link link-hover">
            Wallet
          </a>
          <a href="#" class="link link-hover">
            Exchange
          </a>
          <a href="#" class="link link-hover">
            Ethereum
          </a>
          <a href="#" class="link link-hover">
            Hyperledger
          </a>
          <a href="#" class="link link-hover">
            Smart Contracts
          </a>
          <a href="#" class="link link-hover">
            Private Blockchains
          </a>
          <a href="#" class="link link-hover">
            NFT Marketplace
          </a>
        </div>
        <div>
          <span className="footer-title text-2xl ">Mobile</span>

          <a href="#" class="link link-hover">
            Android Apps
          </a>
          <a href="#" class="link link-hover">
            iPhone Apps
          </a>
          <a href="#" class="link link-hover">
            Hybrid Apps
          </a>
          <a href="#" class="link link-hover">
            Flutter
          </a>
          <a href="#" class="link link-hover">
            React Native
          </a>
          <a href="#" class="link link-hover">
            Kotlin
          </a>
          <a href="#" class="link link-hover">
            Ionic
          </a>
          <a href="#" class="link link-hover">
            Swift
          </a>
          <a href="#" class="link link-hover">
            Xamarin
          </a>
        </div>
        <div>
          <span className="footer-title text-2xl ">Al & Ml</span>
          <a href="#" class="link link-hover">
            Text to Speech
          </a>
          <a href="#" class="link link-hover">
            Business Intelligence
          </a>
          <a href="#" class="link link-hover">
            Data Forecasting
          </a>
          <a href="#" class="link link-hover">
            Natural Language Processing
          </a>
          <a href="#" class="link link-hover">
            Data Analytics
          </a>
          <a href="#" class="link link-hover">
            Object Recognition
          </a>
          <a href="#" class="link link-hover">
            Sentiment Analysis
          </a>
          <a href="#" class="link link-hover">
            Alexa Skills Development
          </a>
        </div>
        <div>
          <span className="footer-title text-2xl ">Game</span>
          <a href="#" class="link link-hover">
            Unity 3D
          </a>
          <a href="#" class="link link-hover">
            Unreal Engine
          </a>
          <a href="#" class="link link-hover">
            Augmented Reality
          </a>
          <a href="#" class="link link-hover">
            Virtual Reality
          </a>
          <a href="#" class="link link-hover">
            Casual Games
          </a>
          <a href="#" class="link link-hover">
            Metaverse
          </a>
        </div>

        <div>
          <span className="footer-title text-2xl ">WEB</span>
          <a href="#" class="link link-hover">
            PHP
          </a>
          <a href="#" class="link link-hover">
            Java
          </a>
          <a href="#" class="link link-hover">
            Python
          </a>
          <a href="#" class="link link-hover">
            Wordpress
          </a>
          <a href="#" class="link link-hover">
            Drupal
          </a>
          <a href="#" class="link link-hover">
            Laravel
          </a>
          <a href="#" class="link link-hover">
            CodeIgniter
          </a>
          <a href="#" class="link link-hover">
            CakePHP
          </a>
          <a href="#" class="link link-hover">
            TypeScript
          </a>
        </div>

        <div>
          <span className="footer-title text-2xl ">IoT & Embedded</span>
          <a href="#" class="link link-hover">
            IoT App
          </a>
          <a href="#" class="link link-hover">
            Embedded Software
          </a>
          <a href="#" class="link link-hover">
            IoT Hardware Prototyping
          </a>
          <a href="#" class="link link-hover">
            IoT Dashboard and Analytics
          </a>
          <a href="#" class="link link-hover">
            Smart Home - Home Automation
          </a>
        </div>

        <div>
          <span className="footer-title text-2xl ">Salesforce</span>
          <a href="#" class="link link-hover">
            Salesforce Development
          </a>
          <a href="#" class="link link-hover">
            Salesforce Consulting
          </a>
          <a href="#" class="link link-hover">
            Salesforce Implementation
          </a>
        </div>
      </footer>

      <div className="bg-slate-900 text-white p-10">
        <span className="footer-title text-2xl ">Locate Us</span>
        <div className="lg:grid grid-cols-4 gap-2">
          <div className="flex">
            <img className="mt-5" src={india} alt="logo" />
            <div className="mt-5 ml-5">
              <div className="flex">
                <img src={indiaImg} alt="" />
                <p className="ml-2">INDIA (HQ)</p>
              </div>
              <p className="text-sm">C-106/B, Ganesh Meridian, Opp.</p>
              <p className="text-sm">Gujarat High Court, S. G. Highway,</p>
              <p className="text-sm">Ahmedabad, Gujarat, 380061</p>
              <p className="text-sm">+91 8000-161161</p>
            </div>
          </div>

          <div className="flex">
            <img className="mt-5" src={mumbai} alt="logo" />
            <div className="mt-5 ml-5">
              <div className="flex">
                <img src={indiaImg} alt="" />
                <p className="ml-2">MUMBAI OFFICE</p>
              </div>
              <p className="text-sm">Level 8, Vibgyor Towers, G Block,</p>
              <p className="text-sm">C62 Bandra Kurla Complex,</p>
              <p className="text-sm">Mumbai 400 098</p>
              <p className="text-sm">+91 8000-161161</p>
            </div>
          </div>

          <div className="flex">
            <img className="mt-5" src={usa} alt="logo" />
            <div className="mt-5 ml-5">
              <div className="flex">
                <img src={USA} alt="" />
                <p className="ml-2">USA OFFICE</p>
              </div>
              <p className="text-sm">One World Trade Center, 285 Fulton</p>
              <p className="text-sm">Street suite 8500, New York, NY</p>
              <p className="text-sm">10007, United States.</p>
              <p className="text-sm">+1 309 791 4105</p>
            </div>
          </div>

          <div className="flex">
            <img className="mt-5" src={uk} alt="logo" />
            <div className="mt-5 ml-5">
              <div className="flex">
                <img src={UK} alt="" />
                <p className="ml-2">UK OFFICE</p>
              </div>
              <p className="text-sm">Level 30, The Leadenhall Building,</p>
              <p className="text-sm">122 Leadenhall Street, London EC3V</p>
              <p className="text-sm">4AB</p>
              <p className="text-sm">+44 20 8133 8639</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-3 bg-slate-900 text-white p-10 ">
        <div className="col-span-1 flex flex-col">
          <span className="footer-title text-2xl ">Help</span>
          <a href="#" class="link link-hover">
            Contact Us
          </a>
          <a href="#" class="link link-hover">
            Privacy Policy
          </a>
          <a href="#" class="link link-hover">
            Cyber Security Policy
          </a>
          <a href="#" class="link link-hover">
            Sitemap
          </a>
          <a href="#" class="link link-hover">
            Global
          </a>
        </div>

        <div className="w-full col-span-2">
          <span className="footer-title text-2xl">
            Subscribe To Our Newsletter
          </span>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-white">
                Stay updated with latest technology trends and topics with us.
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered lg:w-full lg:pr-16"
              />
              <button className="btn bg-slate-300 lg:absolute top-0  right-0 lg:rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>

          <p className="mt-24">
            © 2023 Hyperlink InfoSystem | All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
