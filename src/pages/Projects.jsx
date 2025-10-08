import Navbar from "../components/Navbar";
import { FaRProject } from "react-icons/fa";

function Projects() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-cols-1 items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl text-[#00c9a7] font-extrabold py-4 mt-20">
        <span className="flex items-center leading-relaxed font-poppins underline underline-offset-4 decoration-[#00c9a7]">
          {" "}
          PROJECTS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 sm:text-base md:text-xl lg:text-2xl py-12 px-20 items-center justify-center gap-14">
        {/* pro 1 */}
        <div className="relative group rounded-xl overflow-hidden shadow-2xl border-b-8 border-stone-300">
          <img
            src="/hospital.png"
            alt="project 1"
            className="w-full h-64 object-cover transform group-hover:scale-100 transition duration-500"
          />

          <a
            href="https://amadia-hospital.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-85 transition-all duration-500"
          >
            <span className="text-[#00c9a7] font-semibold text-2xl mb-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
              View Project
            </span>
          </a>
        </div>

        {/* PRO 2 */}

        <div className="relative group rounded-xl overflow-hidden shadow-2xl border-b-8 border-stone-300">
          <img
            src="/Advertsite.png"
            alt="project2"
            className="w-full h-64 object-cover transform group-hover:scale-100 transition duration-500"
          />

          <a
            href="https://jubi-ad-marketplace.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-85 transition-all duration-500"
          >
            <span className="text-[#00c9a7] font-semibold text-2xl mb-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
              View Project
            </span>
          </a>
        </div>

        {/* PRO 3 */}
        <div className="relative group rounded-xl overflow-hidden shadow-2xl border-b-8 border-stone-300">
          <img
            src="/market.png"
            alt="project3"
            className="w-full h-64 object-cover transform group-hover:scale-100 transition duration-500 "
          />

          <a
            href="https://jubi-ad-marketplace.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-85 transition-all duration-500"
          >
            <span className="text-[#00c9a7] font-semibold text-2xl mb-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
              View Project
            </span>
          </a>
        </div>

        {/* PRO 4 */}
        <div className="relative group rounded-xl overflow-hidden shadow-2xl border-b-8 border-stone-300">
          <img
            src="/e-commerce.png"
            alt="project 4"
            className="w-full h-64 object-cover transform group-hover:scale-100 transition duration-500"
          />

          <a
            href="https://myommerce.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-85 transition-all duration-500"
          >
            <span className="text-[#00c9a7] font-semibold text-2xl mb-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
              View Project
            </span>
          </a>
        </div>

        {/* PRO 5 */}
        <div className="relative group rounded-xl overflow-hidden shadow-2xl border-b-8 border-stone-300">
          <img
            src="/fillform.png"
            alt="project 5"
            className="w-full h-64 object-cover transform group-hover:scale-100 transition duration-500"
          />

          <a
            href="https://myproductform.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-85 transition-all duration-500"
          >
            <span className="text-[#00c9a7] font-semibold text-2xl mb-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
              View Project
            </span>
          </a>
        </div>

                {/* PRO 6 */}                
        <div className="relative group rounded-xl overflow-hidden shadow-2xl border-b-8 border-stone-300">
          <img
            src="/Craft.png"
            alt="project 6"
            className="w-full h-64 object-cover transform group-hover:scale-100 transition duration-500"
          />

          <a
            href="https://craftconnect-front-end.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-85 transition-all duration-500"
          >
            <span className="text-[#00c9a7] font-semibold text-2xl mb-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
            View Project
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
