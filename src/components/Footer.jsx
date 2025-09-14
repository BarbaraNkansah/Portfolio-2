import { Link } from "react-router-dom";
import { FaArrowDown, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaArrowDownAZ, FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {

const{ref, inView}= useInView({

  triggerOnce: false,
  threshold: 0.2,
});

  return (
    <motion.footer
    ref={ref}
    initial={{y:100, opacity:0}}
    animate={inView ? { y :0, opacity:1} : {}}
    transition={{duration: 0.8, ease: "easeOut"}}
    className="bg-black text-white"
    >
    <div className="grid md:grid-cols-2 items-center mx-auto font-roboto gap-10 p-10">
      <div className="m-10">
        <h1 className="text-2xl mb-4">
          <Link to="/">
            {" "}
            BARBARA <span className="text-[#00c9a7]">NKANSAH</span>
          </Link>
        </h1>
        <p className="text-xl tracking-tighter mb-3">
          I create and design websites for brands and companies
        </p>

        <div className="flex gap-6 text-3xl text-[#00c9a7] mb-2">
          <a
            href="https://www.linkedin.com/in/barbara-oparebea/"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow hover:bg-[#00b091] transition"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/BarbaraNkansah"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow hover:bg-[#00b091] transition"
          >
            {" "}
            <FaGithub />
          </a>
          <a
            href="https://wa.me/233501117005?text=Hello%20Barbara%2C%20I%20saw%20your%20portfolio!
             "
            target="_blank"
            rel="noopener noreferrer"
            className="shadow hover:bg-[#00b091] transition"
          >
            {" "}
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/barbielopez728/#"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow hover:bg-[#00b091] transition"
          >
            {" "}
            <FaInstagram />
          </a>
        </div>

        <div className="mt-5 ">
          <a href="/Barbara_Nkansah_Resume.pdf"
          download="Barbara_Mkansah_Resume.pdf"
          className="flex justify-center items-center gap-2 border-2 rounded shadow hover:bg-[#00b091] transition w-48 text-xl text-gray-400">
            
            Download CV  
            <FaArrowDown className="text-gray-600"/>
            </a>
        </div>
      </div>

      <div className="ml-60 mt-8">
        <h2 className="mb-8 text-2xl">HIRE ME</h2>
        <div className="relative w-[300px]">
          <input
            type="text"
            id="name"
            name="email"
            placeholder="Email me via contact"
            required
            autoComplete="email"
            className="border-2 w-full h-12 pl-10 rounded-md"
          />
          <motion.span
          animate={{y: [0,-5,0]}}
          transition={{duration: 0.8, repeat: Infinity, ease:"easeInOut"}}
          
          >
          <FaMessage className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-3xl" />
          </motion.span>
        </div>
      </div>

    </div>

    <div className="flex justify-center shadow-2xl bg-black text-white py-4 border-t border-gray-800">
      © 2025 Barbara Nkansah. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
