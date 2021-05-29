import * as React from "react"
import { Link } from "gatsby"

import { NewspaperIcon, DownloadIcon, SupportIcon, ArrowsExpandIcon, LockClosedIcon, BadgeCheckIcon } from '@heroicons/react/outline'

import Layout from "../components/layout"
import logo from "../images/logo.png"
import Seo from "../components/seo"

const features = [
  {
    name: 'Absolute Trust and Security',
    description:
      'Singularity is the only container system that supports public/private key signing providing trust and guarantees of immutability.',
  },
  {
    name: 'Compatibility',
    description:
      'Singularity is 100% OCI (Open Contianers Initiative) and Docker compatible.',
  },
  {
    name: 'Encrypted',
    description:
      'Singularity containers can be encrypted and are never decrypted to storage.',
  },
  {
    name: 'Absolute Portability',
    description:
      'The single file SIF container format allows you to reproducibly run, share, and archive your workload from workstations, to HPC, to the edge.',
  },

  {
    name: 'Secure',
    description:
      'Singularity runs "rootless" and prohibits privilege escalation from within the container, users are the same inside and outside of the container.',
  },
  {
    name: 'Integration over isolation',
    description:
      'With an optimal security model, you can securely leverage GPUs, FPGAs, high speed networks, and filesystems.',
  },
  {
    name: 'Easy to Use',
    description:
      'Singularity intuitively allows non-privileged users to run any contained application.',
  },
  {
    name: 'Community',
    description:
      'Singularity is by far, the most utilized container system for performance intensive computing!',
  },
  {
    name: 'Support',
    description:
      'In addition to an active community for support, the official Singularity project is also commercially supported by CIQ.',
  },

]


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mb-10">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
              <img src={logo} className="w-48 mb-5 inline-flex justify-center" /><br />
                Singularity
              </h2>
            <h3 className="text-base text-gray-800 md:text-lg mb-10 font-semibold">
              THE CONTAINER SYSTEM FOR PERFORMANCE AND SECURITY
            </h3>
            <p className="text-base mb-10 text-gray-700 md:text-lg">
              Singularity is the most widely used container system for HPC because it is designed to execute applications at bare metal performance while being secure, portable, and 100% reproducible. Singularity is an open-source project, with a friendly community of developers and users. The user base continues to expand, with Singularity now used across industry and academia in many areas of work.
            </p>
          </div>

          <div className="flex items-center sm:justify-center">

            <Link to="/getting-started">
              <button
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none">
                Get Started
              </button>
            </Link>
            <Link
              to="/help"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-900">
              Need help?
            </Link>
          </div>



        </div>
      </div>


      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 py-10">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h3 className="max-w-xl font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              Overview
              </h3>
          </div>
        </div>


        <div className="grid mt-10 mb-5 grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <div className="flex mt-5 mb-5 flex-col bg-white rounded-2xl shadow-xl border border-gray-200">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 inline-block bg-blue-900 rounded-xl shadow-lg transform -translate-y-1/2">
                <LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                ENCAPSULATE
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Create a new container including any application(s) or use an existing OCI/Docker container and secure it cryptographically to guarantee it's contents.
              </p>
            </div>
          </div>


          <div className="flex mt-5 mb-5 flex-col bg-white rounded-2xl shadow-xl border border-gray-200">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 inline-block bg-blue-900 rounded-xl shadow-lg transform -translate-y-1/2">
                <ArrowsExpandIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                PROLIFERATE
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Copy or share your containers anywhere and to anyone using any transport, securely.
              </p>
            </div>
          </div>


          <div className="flex mt-5 mb-5 flex-col bg-white rounded-2xl shadow-xl border border-gray-200">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 inline-block bg-blue-900 rounded-xl shadow-lg transform -translate-y-1/2">
                <BadgeCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                ORCHESTRATE
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Run your workload with 100% confidence that it is secure, trusted, and immutable.
              </p>
            </div>
          </div>


        </div>
        <div className="md:mx-auto sm:text-center lg:max-w-2xl">
          <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/UbxCwcreJqU?controls=1&&amp;rel=0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p className="mt-4 text-base text-gray-500">
            Singularity video tutorial, recorded by Ian Kanesherio @ CIQ.
          </p>

        </div>


      </div>


      <div className="relative px-4 mb-10 sm:px-0 bg-gray-100">

        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h3 className="max-w-xl font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                Features
              </h3>
            </div>
          </div>


          <div className="grid gap-8 row-gap-5 lg:grid-cols-3">

            {features.map((feature) => (
              <div key={feature.name}>

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
                      <h6 className="font-semibold leading-5">{feature.name}</h6>
                    </div>
                    <p className="text-sm text-gray-900">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>


  </Layout>
)

export default IndexPage
