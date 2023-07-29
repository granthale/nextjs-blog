import Link from "next/link";
import React from "react";

const Socials = () => {
  const socials = {
    Twitter: "https://twitter.com/grant__hale",
    LinkedIn: "https://www.linkedin.com/in/grantrhale/",
    Github: "https://github.com/granthale",
    Email: "mailto:contact@granthale.com",
  };
  return (
    <div className="flex sticky">
      {Object.keys(socials).map((key) => (
        <Link
          className="m-4 text-gray hover:text-primary"
          key={key}
          href={socials[key]}
          target="_blank"
        >
          {key}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
