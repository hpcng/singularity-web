import * as React from "react"

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="text-5xl font-extrabold mb-10 text-center">Latest News</h1>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="flex">
                <div className="pt-1 mr-6 text-center">
                    <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                    <p className="text-sm text-blue-gray-700">Jul</p>
                    </div>
                    <div className="px-2">
                    <p className="text-lg font-bold">18</p>
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                    <a
                        href="/"
                        className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-blue-900 text-blue-500"
                        aria-label="Category"
                        title="Delevopment"
                    >
                        Delevopment
                    </a>
                    </div>
                    <div className="mb-2">
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-blue-900"
                    >
                        Why I love Laravel
                    </a>
                    </div>
                    <p className="mb-5 text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni voluptatem doloremque.
                    </p>
                    <div className="flex items-center">
                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                        <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                    </a>
                    <div>
                        <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-900"
                        >
                        Petru Vîrtos
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex">
                <div className="pt-1 mr-6 text-center">
                    <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                    <p className="text-sm text-blue-gray-700">May</p>
                    </div>
                    <div className="px-2">
                    <p className="text-lg font-bold">6</p>
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                    <a
                        href="/"
                        className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-blue-900 text-blue-500"
                        aria-label="Category"
                        title="Food &amp; Snacks"
                    >
                        Food &amp; Snacks
                    </a>
                    </div>
                    <div className="mb-2">
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-blue-900"
                    >
                        Pizza, you should try it
                    </a>
                    </div>
                    <p className="mb-5 text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni voluptatem doloremque.
                    </p>
                    <div className="flex items-center">
                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                        <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                    </a>
                    <div>
                        <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-900"
                        >
                        Alex Stratulat
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex">
                <div className="pt-1 mr-6 text-center">
                    <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                    <p className="text-sm text-blue-gray-700">Feb</p>
                    </div>
                    <div className="px-2">
                    <p className="text-lg font-bold">27</p>
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                    <a
                        href="/"
                        className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-blue-900 text-blue-500"
                        aria-label="Category"
                        title="Out of this world"
                    >
                        Out of this world
                    </a>
                    </div>
                    <div className="mb-2">
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-blue-900"
                    >
                        Whatever, just feed me
                    </a>
                    </div>
                    <p className="mb-5 text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni voluptatem doloremque.
                    </p>
                    <div className="flex items-center">
                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                        <img
                        src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                    </a>
                    <div>
                        <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-900"
                        >
                        Susie the Cat
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;