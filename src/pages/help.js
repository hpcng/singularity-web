import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HelpPage = () => (
  <Layout>
    <Seo title="Help" />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Documentation</h6>
            <p className="mb-3 text-sm text-gray-900">
              Learn everything you need to know to get started, along with in-depth documentation for each version.
            </p>
          </div>
          <Link
            to="https://singularity.hpcng.org/docs-user"
            aria-label="Documentation"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Documentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-slack"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Slack Community</h6>
            <p className="mb-3 text-sm text-gray-900">
              Questions? Feel free to reach out to our knowledgeable Slack community, who's always willing to help.
            </p>
          </div>
          <Link
            to="https://join.slack.com/t/hpcng/shared_invite/zt-ll5c3ofb-XhvMPbXUhTVrHlutQz2jbA"
            aria-label="Slack"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            Join Slack
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Mailing List</h6>
            <p className="mb-3 text-sm text-gray-900">
              Join our mailing list to hear the latest from the project and reach out with questions.
            </p>
          </div>
          <Link
            to="https://groups.google.com/a/lbl.gov/g/singularity"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            Join Mailing List
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">GitHub</h6>
            <p className="mb-3 text-sm text-gray-900">
              Need to report an issue? Want to contribute? Head over to the Singularity GitHub repo.
            </p>
          </div>
          <Link
            to="https://github.com/hpcng/singularity"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default HelpPage
