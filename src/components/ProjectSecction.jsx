import React from "react";
import { Link } from "react-router";

function ProjectSecction() {
  return (
    <div className="grid grid-cols-2 items-center justify-center mx-auto h-150 shadow-2xl mt-20">
      <div className="max-w-md ml-30 font-sans text-center">
        <h2 className="text-5xl font-bold mb-4">
          Get to know more about my websites and projects
        </h2>
        <Link
          to="/project"
          className="bg-[#00c9a7] text-white px-7 py-4 rounded-full shadow hover:bg-[#00b091] transition inline-block mt-6"
        >
          View Projects
        </Link>
      </div>
      <div>
        <video autoPlay loop muted playsInline className="object-cover">
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ProjectSecction;
