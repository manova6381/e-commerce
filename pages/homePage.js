import React from "react";
// import { NavLink } from "react-router-dom";
import "../images/Balcony-1.jpg";
import "../images/Balcony-2.jpg";
import "../images/Balcony-3.jpg";
import "../images/Balcony-4.jpg";
import "../images/Home-1.jpg"
import "../images/Home-2.jpg"
import "../images/Home-3.jpg"

import "../css/custom.css";
const HomePage = () => {
  return (
    <div
      className=" h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${require("../images/Balcony-2.jpg")})`,
      }}>
      <div className=" flex  justify-around ">
        <div className=" flex ">
          <div className=" flex mx-2 b-2">
            <div className=" mr-2">
              <i className="fa-regular fa-envelope pt-5 pl-2 pb-4"></i>
            </div>
            <p type="button" className=" text-mx pt-4 pr-2 pb-4">
              companymail@gmail.com
            </p>
          </div>
          <div className=" flex mx-2">
            <div className=" mr-2">
              <i className="fa-solid fa-phone pt-5 pl-2 pb-4"></i>
            </div>
            <p className=" text-mx pt-4 pr-2 pb-4">8801833920054</p>
          </div>
          <div className=" flex mx-2">
            <div className=" mr-2">
              <i className="fa-solid fa-clock pt-5 pl-2 pb-4"></i>
            </div>
            <p className=" text-mx pt-4 pr-2 pb-4">Mon - Fri:9:00 -1700</p>
          </div>
        </div>
        <div className=" flex ">
          <div className=" mr-2">
            <i className="fa-brands fa-facebook-f pt-5 pr-2 pb-4"></i>
          </div>
          <div className=" mr-2">
            <i className="fa-brands fa-twitter pt-5 pr-2 pb-4"></i>
          </div>
          <div className=" mr-2">
            <i className="fa-brands fa-google-plus-g pt-5 pr-2 pb-4"></i>
          </div>
          <div className=" mr-2">
            <i className="fa-brands fa-pinterest pt-5 pr-2 pb-4"></i>
          </div>
          <div className=" mr-2">
            <i className="fa-solid fa-wifi pt-5 pr-2 pb-4"></i>
          </div>
        </div>
      </div>

      <div>
        <div className="relative  overflow-hidden ">
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <header className="absolute top-0 left-0 right-0 z-20">
            <nav className="container px-6 py-4 mx-auto md:px-12">
              <div className="items-center justify-between md:flex">
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 border-2 rounded-lg p-2 hover:border-gray-500">
                    <svg
                      className="w-8 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Capa 1"
                      viewBox="0 0 16.16 12.57">
                      <defs></defs>
                      <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                      <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                    </svg>
                  </a>
                  <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                      <svg
                        className="w-12 h-12 "
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 6H20M4 12H20M4 18H20"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="items-center hidden md:flex">
                  <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300 border-2 rounded-lg p-2 hover:border-gray-500">
                    About us
                  </a>
                  <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300 border-2 rounded-lg p-2 hover:border-gray-500">
                    Calendar
                  </a>
                  <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300 border-2 rounded-lg p-2 hover:border-gray-500">
                    Contact us
                  </a>
                </div>
              </div>
            </nav>
          </header>
          <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
            <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
              <span className="font-bold text-yellow-400 uppercase">
                WE PROVIDE
              </span>
              <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                BEST INTERIOR DESIGN
                <br />
                Lorem ipsum reads: Lorem ipsum dolor sit amet,
              </h1>
              <a
                href="#"
                className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className=" text-center font-bold px-4 py-3 mt-6 text-lg text-yellow-400 uppercase">
          ABOUT US
        </h3>
        <h2 className=" text-center px-4 py-3 text-lg font-bold text-gray-800">
          We Are Duplex
        </h2>
        <p className=" text-center px-4 py-3 text-mx font-bold text-gray-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className=" flex mt-16">
        <div className=" flex mr-12">
          <div className=" pt-5 mr-6">
            <i className="fa-solid fa-user-tie text-5xl mt-2px"></i>
          </div>
          <div>
            <h3 className="font-bold text-lg text-yellow-400 uppercase">
              Professionals
            </h3>
            <p className=" text-mx font-bold text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className=" flex mr-12">
          <div className=" pt-5 mr-6">
            <i className="fa-solid fa-umbrella text-5xl mt-2px"></i>
          </div>
          <div>
            <h3 className=" font-bold text-lg text-yellow-400 uppercase">
              Trusted
            </h3>
            <p className=" text-mx font-bold text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className=" flex mr-12">
          <div className="pt-5 mr-6">
            <i class="fa-solid fa-pen-ruler text-5xl mt-2px"></i>
          </div>
          <div>
            <h3 className=" font-bold text-lg text-yellow-400 uppercase">
              Export Design
            </h3>
            <p className=" text-mx font-bold text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex mt-16">
        <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mr-4">
          <a href="#" class="block w-full h-full">
            <div
              className=" h-48 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${require("../images/Balcony-1.jpg")})`,
              }}
            />
            <div class="w-full p-4 bg-white dark:bg-gray-800">
              <p class="font-medium text-indigo-500 text-md"></p>
              <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                New Mac is here !
              </p>
              <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supermac is here, 543 cv and 140 000$. This is best
                racing computer about 7 years on...
              </p>
            </div>
          </a>
        </div>
        <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mr-4">
          <a href="#" class="block w-full h-full">
            <div
              className=" h-48 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${require("../images/Balcony-2.jpg")})`,
              }}
            />
            <div class="w-full p-4 bg-white dark:bg-gray-800">
              <p class="font-medium text-indigo-500 text-md"></p>
              <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                New Mac is here !
              </p>
              <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supermac is here, 543 cv and 140 000$. This is best
                racing computer about 7 years on...
              </p>
            </div>
          </a>
        </div>
        <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mr-4-">
          <a href="#" class="block w-full h-full">
            <div
              className=" h-48 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${require("../images/Balcony-3.jpg")})`,
              }}
            />
            <div class="w-full p-4 bg-white dark:bg-gray-800">
              <p class="font-medium text-indigo-500 text-md"></p>
              <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                New Mac is here !
              </p>
              <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supermac is here, 543 cv and 140 000$. This is best
                racing computer about 7 years on...
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className=" flex mt-16">
        <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mr-4">
          <a href="#" class="block w-full h-full">
            <div
              className=" h-48 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${require("../images/Home-1.jpg")})`,
              }}
            />
            <div class="w-full p-4 bg-white dark:bg-gray-800">
              <p class="font-medium text-indigo-500 text-md"></p>
              <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                New Mac is here !
              </p>
              <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supermac is here, 543 cv and 140 000$. This is best
                racing computer about 7 years on...
              </p>
            </div>
          </a>
        </div>
        <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mr-4">
          <a href="#" class="block w-full h-full">
            <div
              className=" h-48 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${require("../images/Home-2.jpg")})`,
              }}
            />
            <div class="w-full p-4 bg-white dark:bg-gray-800">
              <p class="font-medium text-indigo-500 text-md"></p>
              <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                New Mac is here !
              </p>
              <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supermac is here, 543 cv and 140 000$. This is best
                racing computer about 7 years on...
              </p>
            </div>
          </a>
        </div>
        <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mr-4-">
          <a href="#" class="block w-full h-full">
            <div
              className=" h-48 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${require("../images/Home-3.jpg")})`,
              }}
            />
            <div class="w-full p-4 bg-white dark:bg-gray-800">
              <p class="font-medium text-indigo-500 text-md"></p>
              <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                New Mac is here !
              </p>
              <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supermac is here, 543 cv and 140 000$. This is best
                racing computer about 7 years on...
              </p>
            </div>
          </a>
        </div>
      </div>


      <div className=" mt-16">
        <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
          <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span class="block">Mother hearth host your travel</span>
            </h2>
            <p class="text-md mt-4 text-gray-400">
              The state of Utah in the united states is home to lots of
              beautiful National parks, Bryce national canion park ranks as
              three of the most magnificient &amp; awe inspiring.
            </p>
            <div class="lg:mt-0 lg:flex-shrink-0">
              <div class="mt-12 inline-flex rounded-md shadow">
                <button
                  type="button"
                  class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-around items-center  gap-8 p-8 lg:p-24">
            {/* <img
              src="/images/Balcony-1.jpg"
              class="w-1/2 rounded-lg"
              alt="Tree"
            /> */}
            <div
              className=" w-1/2 h-64 bg-no-repeat bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${require("../images/Balcony-4.jpg")})`,
              }}/>
            <div className=" flex flex-col">
              <div
                className=" rounded-lg h-32 w-60 bg-no-repeat bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${require("../images/Balcony-3.jpg")})`,
                }}/>
              <div
                className=" rounded-lg h-32 w-60 bg-no-repeat bg-cover rounded-lg mt-4"
                style={{
                  backgroundImage: `url(${require("../images/Balcony-2.jpg")})`,
                }}/>
            </div>
          </div>
        </div>

        <footer
          className="bg-white dark:bg-gray-800 w-full py-8 mt-16
         ">
          <div className="max-w-screen-xl px-4 mx-auto">
            <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                  href="#">
                  FAQ
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                  href="#">
                  Configuration
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                  href="#">
                  Github
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                  href="#">
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                  viewBox="0 0 1792 1792">
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                </svg>
              </a>
            </div>
            <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
              <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Subscribe'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
              Create a your Profile
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
