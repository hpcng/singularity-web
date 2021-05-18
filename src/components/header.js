import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../images/logo.png"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            aria-label="Singularity"
            title="Singularity"
            className="inline-flex items-center mr-8"
          >
            <img src={logo} className="w-8" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Singularity
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="User Documentation"
                title="User Documentation"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
              >
                User Documentation
              </Link>
            </li>
            <li>
              <Link
                to="/"
                aria-label="Administrator Documentation"
                title="Administrator Documentation"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
              >
                Administrator Documentation
              </Link>
            </li>
            <li>
              <Link
                to="/"
                aria-label="News"
                title="News"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
              >
                News
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              aria-label="GitHub"
              title="GitHub"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200" 
            >
              <svg viewBox="0 0 24 24" className="w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </Link>
          </li>
          <li>
            <a
              href="/"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
              aria-label="Get Started"
              title="Get Started"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;