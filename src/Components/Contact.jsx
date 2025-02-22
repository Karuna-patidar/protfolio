import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
     id="contact"
      className="flex justify-around bg-slate-700 text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
           Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:karunapatidar0206@gmail.com" target="_blank">  karunapatidar0206@gmail.com</a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href ="https://www.linkedin.com/in/karuna-patidar-3b66a6236/" target="_blank">linkedin.com/Karuna Patidar</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/Karuna-patidar" target="_blank">github.com/Karuna-patidar</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;