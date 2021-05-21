import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Talks = () => (

    <Layout>
    <Seo title="Uses Cases" />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
          Talks
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          What about getting some knowledge from those who has the hands on the wheel with Singularity, learn their ways, techniques, or even getting some enlightment in where to use Singularity ? Here we go, a fresh list with talks and presentations !
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Singularity: Containers for Science, Reproducibility, and HPC

</h6>
            <p className="mb-3 text-sm text-gray-900">
            In this video from the 2017 HPC Advisory Council Stanford Conference, Greg Kurtzer from LBNL presents: Singularity: Containers for Science, reproducibility, and HPC.

"Explore how Singularity liberates non-privileged users and host resources (such as interconnects, resource managers, file systems, accelerators ...) allowing users to take full control to set-up and run in their native environments

This talk explores Singularity how it combines software packaging models with minimalistic containers to create very lightweight application bundles which can be simply executed and contained completely within their environment or be used to interact directly with the host file systems at native speeds.

A Singularity application bundle can be as simple as containing a single binary application or as complicated as containing an entire workflow and is as flexible as you will need.
Gregory M Kurtzer, Technology Architect and Developer
Gregory M. Kurtzer is currently the IT HPC Systems Architect and Technology Developer at Lawrence Berkeley National Laboratory. His specialties include Linux (environment, services and deep system internals), open source and development (Perl, C, SQL, PHP, HTML, etc.); HPC applications, administration, automation and provisioning of large scale system architectures.

Along with his solid reputation for sparking new trends, the pioneering open source entrepreneur has created, founded, built and contributed to communities with install counts in the millions of users, and numerous breakthrough projects including CentOS Linux, Caos Linux, Perceus, Warewulf and most recently Singularity.".
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=DA87Ba2dpNM"
            aria-label="Documentation"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Building containers with Singularity</h6>
            <p className="mb-3 text-sm text-gray-900">
            We use singularity to create containers both in an interactive mode and also using definition files to build them automatically..
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=nrgO3Q8-6hQ"
            aria-label="Slack"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Introduction to Singularity: Containers for Scientific and High-Performance Computing
</h6>
            <p className="mb-3 text-sm text-gray-900">
            In this webinar, we provide an overview of Singularity and how you might incorporate the use of containers in your own research. We also show you how to access and use some of the containerized applications that we make available to users on XSEDE systems like Comet and Expanse at SDSC.
.
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=vEjLuX0ClN0"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Singularity: Containers for High-Performance Computing
</h6>
            <p className="mb-3 text-sm text-gray-900">
            Singularity is an application containerization solution for High Performance Computing (HPC), developed by Singularity LLC.

The goal of Singularity is to allow for "mobility of computing", where an application containerized on one Linux system should be able to run on another system as it is, without the need to reconcile software dependencies and Linux version differences between the source and target systems.

This session will provide an overview of the main features and benefits of Singularity, as well as a demonstration of how to run Singularity on WestGrid and Compute Canada systems, how to access filesystems from the container, and how to convert Docker containers to Singularity applications.
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=a2Yh0t1Azd0"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Run NVIDIA GPU Cloud Containers in Singularity
</h6>
            <p className="mb-3 text-sm text-gray-900">
            This video covers (1) Installing and configuring Singularity (2) Pulling and saving NGC containers and (3) Running NGC containers in an HPC environment. Learn more: https://nvda.ws/2QXzzKm.
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=iOLVqqHQsBU"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Singularity Introduction
</h6>
            <p className="mb-3 text-sm text-gray-900">
            Michael Bauer provides an introduction into the HPC container runtime Singularity.
.
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=29NLgM9fnh4"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Containers Using Singularity on HPC
</h6>
            <p className="mb-3 text-sm text-gray-900">
            In this video from the 2018 Swiss HPC Conference, Abhinav Thota, from Indiana University presents: Containers Using Singularity on HPC..
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=2Aap7pstFog"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Easy-Build Singularity Containers: tutorial (EUM'21)
</h6>
            <p className="mb-3 text-sm text-gray-900">
            In this hands on tutorial we will build 2 containers: a simple one to give users an understanding of how the set of scripts are working and how we can build for example Debian or CentOS containers without much knowledge of the background mechanisms. In the second, more advanced part, we show how to open up the containers and give users are chance to install their bespoken pipelines and use the power of the containers to run that on virtually any suitable platform..
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=34SFF5Ow7Og"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Singularity in High Performance Computing (HPC)
</h6>
            <p className="mb-3 text-sm text-gray-900">
            Containers are a new paradigm for how Linux software can be developed and delivered. Singularity is the most popular Linux container solution for High-Performance Computing (HPC). In this webinar, we cover the basics of using Singularity and best practices of using it on Compute Canada HPC systems. We then discuss the common use cases and our experience with Singularity, and review the recent developments and changes in the newest versions of Singularity 3. The webinar is intended for everyone with basic skills in the Linux command line. To follow the examples on Compute Canada systems, a valid Compute Canada account and an SSH client to connect is needed..
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=z-RtotX0i_0"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">David Godlove: Singularity: simple, secure containers for HPC
</h6>
            <p className="mb-3 text-sm text-gray-900">
            Singularity is the most widely used container solution in high-performance computing (HPC). Instead of a layered filesystem, a Singularity container is stored in a single file. This simplifies the container management lifecycle and facilitates features such as image signing and verification to produce trusted containers. At runtime, Singularity blurs the lines between the container and the host system allowing users to read and write persistent data and leverage hardware like GPUs and Infiniband with ease. The Singularity security model is also unique among container solutions. Users build containers on resources they control or using a service like the Sylabs Remote Builder. Then they move their containers to a production environment where they may or may not have administrative access and the Linux kernel enforces privileges as it does with any other application. These features make Singularity a simple, secure container solution perfect for HPC workloads. Sylabs Inc maintains Singularity and fosters the open-source community. Sylabs also offers a professionally curated and supported version of Singularity called SingularityPRO with enhanced security and stability for production-grade centers..
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=cWncCvFM2ak"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Benchmarking MPI Applications in Singularity Containers on Traditional HPC and Cloud Infrastructures
</h6>
            <p className="mb-3 text-sm text-gray-900">
              In this presentation, Benchmarking over traditional HPC is presented.
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=3Q-IS6MFgb4"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Software Containers with Singularity</h6>
            <p className="mb-3 text-sm text-gray-900">
            An overview of software containers and how to use Singularity to create and run containers for research and high-performance computing tasks. Singularity containers enable portable and reproducible computing environments and workflows. Build a container with a desired software environment and you can run it on personal or workstation computers, on the CARC's high-performance computing clusters, and in the cloud..
            </p>
          </div>
          <Link
            to="https://www.youtube.com/watch?v=xty42A05Wg0"
            aria-label="GitHub Repository"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
          >
            View Presentation
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)
export default Talks