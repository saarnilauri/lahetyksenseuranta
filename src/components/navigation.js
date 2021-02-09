import React from "react";
import { useState } from "react";
import Logo from "../../static/ls-logo.png";
import { Link } from "gatsby";

const LinkItem = ({ title, slug, isActive, isMobile }) => {
  let commonStyles = "uppercase rounded-md font-medium px-3 py-2 text-sm ";
  if (isMobile) {
    commonStyles = "block px-3 py-2 rounded-md text-base font-medium ";
  }
  const styles = isActive
    ? "bg-gray-900 text-white"
    : "text-gray-300 hover:bg-gray-700 hover:text-white";
  return (
    <Link to={slug} className={commonStyles + styles}>
      {title}
    </Link>
  );
};

const Navigation = ({ location }) => {
  //console.log(location);

  const links = [
    { title: "Etusivu", slug: "/", isActive: location.pathname === "/" },
    {
      title: "Podcast",
      slug: "/podcast/",
      isActive: location.pathname === "/podcast/",
    },
    {
      title: "Tarina",
      slug: "/tarina/",
      isActive: location.pathname === "/tarina/",
    },
    {
      title: "Yhteystiedot",
      slug: "/yhteystiedot/",
      isActive: location.pathname === "/yhteystiedot/",
    },
  ];

  //
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="site-navigation">
      <nav className="bg-gray-800 bg-opacity-80 fixed top-0 left-0 w-full border-b-2 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-10 w-auto my-0"
                  src={Logo}
                  alt="Lähetyksenseuranta logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 my-1">
                  {links.map((object) => (
                    <LinkItem
                      key={object.slug}
                      title={object.title}
                      isActive={object.isActive}
                      slug={object.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? "" : "hidden "}sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((object) => (
              <LinkItem
                key={object.slug}
                title={object.title}
                isActive={object.isActive}
                slug={object.slug}
                isMobile
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
