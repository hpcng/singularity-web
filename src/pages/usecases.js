import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UseCases = () => (
  <Layout>
    <Seo title="Uses Cases" />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
          Use Cases
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Check out who is using Singularity for a variety of cases and applications and how they are getting the best of Singularity.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">ALCF Research Benefits from Singularit</h6>
            <p className="mb-3 text-sm text-gray-900">
            Scaling code for massively parallel architectures is a common challenge the scientific community faces. When moving from a system used for development—a personal laptop, for instance, or even a university’s computing cluster—to a large-scale supercomputer like those housed at the Argonne Leadership Computing Facility (ALCF), a U.S. Department of Energy (DOE) Office of Science User Facility, researchers traditionally would only migrate the target application: the underlying software stack would be left behind.
            </p>
          </div>
          <Link
            to="https://www.hpcwire.com/off-the-wire/alcf-research-benefits-from-singularity/"
            aria-label="Documentation"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Use Case
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Performance Evaluation of Container-based Virtualization for High Performance Computing Environments</h6>
            <p className="mb-3 text-sm text-gray-900">
            Virtualization technologies have evolved along with the development of computational environments since virtualization offered needed features at that time such as isolation, accountability...
            </p>
          </div>
          <Link
            to="https://arxiv.org/abs/1709.10140"
            aria-label="Slack"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Use Case
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Decoupling EDA Toolchains from the OS with Singularity Containers</h6>
            <p className="mb-3 text-sm text-gray-900">
            Singularity containers introduce a compelling means for unlocking the implied dependency between application toolchains and operating system. By encapsulating everything but the kernel in a single file, Singularity containers decouple the runtime and allow it to be highly portable in a trusted way..
            </p>
          </div>
          <Link
            to="https://insidehpc.com/2019/06/decoupling-eda-toolchains-from-the-os-with-singularity-containers/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Use Case
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">How Singularity Containers can ease the Transition to RHEL 8</h6>
            <p className="mb-3 text-sm text-gray-900">
            The general availability of Red Hat Enterprise Linux 8 was announced this week at the Red Hat Summit in Boston. In this special guest feature, Ian Lumb writes that the company's Singularity containers can ease the transition to RHEL 8. "RHEL 8 is a transition over time, not a discrete event in time. Singularity containers preserve your heavily vested legacy deployments, while enabling you to make the transition on your terms.".
            </p>
          </div>
          <Link
            to="https://insidehpc.com/2019/05/how-singularity-containers-can-ease-the-transition-to-rhel-8/"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Use Case
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Argonne Looks to Singularity for HPC Code Portability</h6>
            <p className="mb-3 text-sm text-gray-900">
            Over at Argonne, Nils Heinonen writes that Researchers are using the open source Singularity framework as a kind of Rosetta Stone for running supercomputing code almost anywhere. "Once a containerized workflow is defined, its image can be snapshotted, archived, and preserved for future use. The snapshot itself represents a boon for scientific provenance by detailing the exact conditions under which given data were generated: in theory, by providing the machine, the software stack, and the parameters, one’s work can be completely reproduced.".
            </p>
          </div>
          <Link
            to="https://insidehpc.com/2019/02/argonne-looks-to-singularity-for-hpc-code-portability/"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Use Case
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Singularity Scientific containers for mobility of compute</h6>
            <p className="mb-3 text-sm text-gray-900">
            Here we present Singularity, software developed to bring containers and reproducibility to scientific computing. Using Singularity containers, developers can work in reproducible environments of their choosing and design, and these complete environments can easily be copied and executed on other platforms. Singularity is an open source initiative that harnesses the expertise of system and software engineers and researchers alike, and integrates seamlessly into common workflows for both of these groups. As its primary use case, Singularity brings mobility of computing to both users and HPC centers, providing a secure means to capture and distribute software and compute environments. This ability to create and deploy reproducible environments across these centers, a previously unmet need, makes Singularity a game changing development for computational science.
            </p>
          </div>
          <Link
            to="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0177459"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Use Case
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Toward Full Specialization of the HPC Software Stack</h6>
            <p className="mb-3 text-sm text-gray-900">
              Diversity and complexity are all good requirement refinement enablers, mainly in what concerns software stack.
            </p>
          </div>
          <Link
            to="https://www.mcs.anl.gov/events/workshops/ross/2017/slides/ross2017-gerofi.pdf"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Use Case
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default UseCases
