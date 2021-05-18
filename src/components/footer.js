import * as React from "react"

const Footer = () => {
    const navigation = {
        main: [
          { name: 'News', href: '#' },
          { name: 'GitHub', href: '#' },
          { name: 'Slack', href: '#' },
          { name: 'Mailing List', href: '#' },
        ],
      }


    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                {navigation.main.map((item) => (
                    <div key={item.name} className="px-5 py-2">
                    <a href={item.href} className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-900">
                        {item.name}
                    </a>
                    </div>
                ))}
                </nav>
                <p className="mt-8 text-center text-base text-gray-500">&copy; 2021 HPCng. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;