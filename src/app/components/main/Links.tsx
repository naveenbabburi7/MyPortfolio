import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Links() {
  return (
    <div className="flex gap-4 flex-col md:flex-row w-full justify-center items-center">

      <a href="https://www.linkedin.com/in/naveen-kumar-babburi/">
        <FaLinkedin size="48px" />
      </a>
      <a href="https://github.com/naveenbabburi7">
        <FaGithub size="48px" />
      </a>
       <a href="https://www.instagram.com/naughty__boy_naveen/">
        <FaSquareInstagram size="48px"/>
      </a>

    </div>
  );
}

export default Links;
