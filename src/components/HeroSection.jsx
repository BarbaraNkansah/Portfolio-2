import { easeInOut, MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import BARBA from "../assets/BARBA.png";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { p } from "framer-motion/client";

function HeroSection() {
  return (
    <section className="w-full bg-black text-white overflow-x-hidden">
      <div className="flex flex-col-reverse md:flex-row xl:max-w-screen-xl md:max-w-screen-lg mx-auto py-16 px-6 md:px-12 pt-26 justify-between items-center overflow-x-hidden md:pt-32 min-h-[85vh]">
        <motion.div
          className="max-w-xl text-center md:text-left mt-10 md:mt-0"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <TypeAnimation
            sequence={["Hi, I'm Barbara"]}
            wrapper="h1"
            speed={50}
            repeat={0}
            cursor={false}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          />

          <TypeAnimation
            sequence={[2000," A Front-end Developer  & Virtual Assistant"]}
            wrapper="h2"
            speed={50}
            repeat={0}
            cursor={false}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2"
          />

          <TypeAnimation
          sequence={[4000,
            ` I specialize in creating clean, user-friendly websites and providing
            reliable virtual support services. Whether it's building responsive
            web interfaces or managing daily business tasks, I'm passionate
            about helping brands and individuals succeed online. Let's connect and build
            something amazing together.`]}
            wrapper="p"
            speed={50}
            repeat={0}
            cursor={false}
            className="mt-4 sm:text-base md:text-lg text-gray-300 text-sm leading-relaxed max-w-lg mx-auto md:mx-0"
           
          />

          <div className="flex justify-center md:justify-start gap-6 sm:gap-6 sm:text-2xl text-xl md:text-3xl text-[#00c9a7] mt-4">
            <a
              href="https://www.linkedin.com/in/barbara-oparebea/"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow hover:bg-[#00b091] transition p-2 rounded-full"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/BarbaraNkansah"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow hover:bg-[#00b091] transition p-2 rounded-full"
            >
              {" "}
              <FaGithub />
            </a>
            <a
              href="https://wa.me/233501117005?text=Hello%20Barbara%2C%20I%20saw%20your%20portfolio!
          "
              target="_blank"
              rel="noopener noreferrer"
              className="shadow hover:bg-[#00b091] transition p-2 rounded-full"
            >
              {" "}
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/barbielopez728/#"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow hover:bg-[#00b091] transition p-2 rounded-full"
            >
              {" "}
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <div className="mb-10 md:mb-0 flex justify-center">
          <motion.img
            src={BARBA}
            alt="my profile"
            className="w-64 sm:w-72 md:w-80 lg:w-[28rem] rounded-full object-cover shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
