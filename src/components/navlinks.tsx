import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "New Arrivals",
    url: "#",
  },
  {
    title: "Men",
    url: "#",
  },
  {
    title: "Women",
    url: "#",
  },
  {
    title: "Collections",
    url: "#",
  },
];

const NavLinks = () => {
  return (
    <>
      {navLinks.map(({ title, url }, index) => (
        <Link
          key={index}
          href={url}
          className="text-gray-900 hover:text-red-600 transition-colors font-medium">
          {title}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
