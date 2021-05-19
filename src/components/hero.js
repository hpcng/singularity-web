import * as React from "react"
import { Link } from "gatsby"

const Hero = () => {
    return (
      <div className="mb-16">
        <div className="bg-gray-100">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
                Singularity
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Singularity was created to run complex applications on HPC clusters in a simple, portable, and reproducible way. First developed at Lawrence Berkeley National Laboratory, it quickly became popular at other HPC sites, academic sites, and beyond. Singularity is an open-source project, with a friendly community of developers and users. The user base continues to expand, with Singularity now used across industry and academia in many areas of work.
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
              >
                Get Started
              </button>
              <Link
                to="/help"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-900"
              >
                Need help?
              </Link>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-900 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-900 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-900 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-900 group-hover:scale-y-100" />
                <div className="relative p-5 bg-white rounded-sm">
                    <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-blue-50 lg:mb-0">
                        <svg
                        className="w-8 h-8 text-blue-900"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <h6 className="font-semibold leading-5">Integration over isolation</h6>
                    </div>
                    <p className="text-sm text-gray-900">
                    Easily make use of GPUs, high speed networks, parallel filesystems on a cluster or server by default.
                    </p>
                </div>
                </div>
                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-900 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-900 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-900 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-900 group-hover:scale-y-100" />
                <div className="relative p-5 bg-white rounded-sm">
                    <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-blue-50 lg:mb-0">
                        <svg
                        className="w-8 h-8 text-blue-900"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <h6 className="font-semibold leading-5">Mobility of compute</h6>
                    </div>
                    <p className="text-sm text-gray-900">
                    The single file SIF container format is easy to transport and share.
                    </p>
                </div>
                </div>
                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-900 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-900 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-900 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-900 group-hover:scale-y-100" />
                <div className="relative p-5 bg-white rounded-sm">
                    <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-blue-50 lg:mb-0">
                        <svg
                        className="w-8 h-8 text-blue-900"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <h6 className="font-semibold leading-5">Simple, effective security model</h6>
                    </div>
                    <p className="text-sm text-gray-900">
                    You are the same user inside a container as outside, and cannot gain additional privilege by default.
                    </p>
                </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    );
  };

  export default Hero;