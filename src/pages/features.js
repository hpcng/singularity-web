import * as React from "react"
import { Link } from "gatsby"

import { NewspaperIcon, DownloadIcon, SupportIcon } from '@heroicons/react/outline'

import Layout from "../components/layout"
import Seo from "../components/seo"

const features = [
    {
        name: 'Example Feature 1',
        description:
            'tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra',
    },
    {
        name: 'Example Feature 2',
        description:
            'tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra',
    },
    {
        name: 'Example Feature 3',
        description:
            'tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra',
    },
    {
        name: 'Example Feature 4',
        description:
            'tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra',
    },
    {
        name: 'Example Feature 5',
        description:
            'tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra',
    },
    {
        name: 'Example Feature 6',
        description:
            'tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra',
    },
]

const FeaturesPage = () => (
    <Layout>
        <Seo title="Features" />
        <div>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                    <h2 className="max-w-xl font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                        Features
                    </h2>
                </div>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-50">
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
                            <h6 className="mb-2 font-semibold leading-5">{feature.name}</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-10 mt-20 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Ready to take it for a spin?
                    </h2>

                    <Link
                        to="/getting-started"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
                        aria-label="View Support Options"
                        title="View Support Options"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default FeaturesPage
