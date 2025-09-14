import BARBA from "../assets/BARBA.png";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function HeroSection() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center bg-black text-white h-130 mt-30">
        <div className="ml-40 mx-auto">
          <h1 className="text-3xl font-bold">Hi I'm Barbara,</h1>
          <h2 className="text-xl mt-1">
            A Front-end Developer & Virtual Assistant
          </h2>
          <p className="mt-2 text-gray-300">
            I specialize in creating clean, user-friendly websites and providing
            reliable virtual support services. Whether it's building responsive
            web interfaces or managing daily business tasks, I'm passionate
            about helping brands and individuals succeed online. Let's build
            something amazing together.
          </p>

          <div className="flex gap-6 text-3xl text-[#00c9a7] mt-2">
            <a
              href="https://www.linkedin.com/in/barbara-oparebea/"
              target="_blank"
              rel="noopener noreferrer" className="shadow hover:bg-[#00b091] transition"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/BarbaraNkansah"
              target="_blank"
              rel="noopener noreferrer"  className="shadow hover:bg-[#00b091] transition"
            >
              {" "}
              <FaGithub />
            </a>
            <a
              href="https://wa.me/233501117005?text=Hello%20Barbara%2C%20I%20saw%20your%20portfolio!
          "
              target="_blank"
              rel="noopener noreferrer" className="shadow hover:bg-[#00b091] transition"
            >
              {" "}
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/barbielopez728/#"
              target="_blank"
              rel="noopener noreferrer" className="shadow hover:bg-[#00b091] transition"
            >
              {" "}
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="max-w-sm rounded-full object-cover mx-auto">
          <img src={BARBA}  alt="my profile" />
        </div>
      </div>
  )
}

export default HeroSection