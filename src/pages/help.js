import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HelpPage = () => (
  <Layout>
    <Seo title="Help" />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Get Help
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Singularity has many resources available for assistance.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
              <svg
                className="w-12 h-12 text-blue-900"
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
            <h6 className="mb-2 font-semibold leading-5">Documentation</h6>
            <p className="mb-3 text-sm text-gray-900">
              Learn everything you need to know to get started, along with in-depth documentation for each version.
            </p>
          </div>
          <Link
            to="https://singularity.hpcng.org/docs-user"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-deep-purple-800"
          >
            View Documentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
              <svg
                className="w-12 h-12 text-blue-900"
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
            <h6 className="mb-2 font-semibold leading-5">Slack Community</h6>
            <p className="mb-3 text-sm text-gray-900">
              Questions? Feel free to reach out to our knowledgeable Slack community, who's always willing to help.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-deep-purple-800"
          >
            Join Slack
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
              <svg
                className="w-12 h-12 text-blue-900"
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
            <h6 className="mb-2 font-semibold leading-5">Mailing List</h6>
            <p className="mb-3 text-sm text-gray-900">
              Join our mailing list to hear the latest from the project and reach out with questions.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-deep-purple-800"
          >
            Join Mailing List
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
              <svg
                className="w-12 h-12 text-blue-900"
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
            <h6 className="mb-2 font-semibold leading-5">GitHub</h6>
            <p className="mb-3 text-sm text-gray-900">
              Need to report an issue? Want to contribute? Head over to the Singularity GitHub repo.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-deep-purple-800"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default HelpPage
