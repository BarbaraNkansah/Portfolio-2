import BARBA from "../assets/BARBA.png";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function HeroSection() {
  return (
    <section className="w-full bg-black text-white overflow-x-hidden">
    <div className="flex flex-col md:flex-row xl:max-w-screen-xl md:max-w-screen-lg mx-auto py-16 px-6 md:px-12 pt-26 justify-between items-center overflow-x-hidden md:pt-32 min-h-[85vh]">
       
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi I'm Barbara,
            </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
            A Front-end Developer & Virtual Assistant
          </h2>
          <p className="mt-4 sm:text-base md:text-lg text-gray-300 text-sm leading-relaxed max-w-lg">
            I specialize in creating clean, user-friendly websites and providing
            reliable virtual support services. Whether it's building responsive
            web interfaces or managing daily business tasks, I'm passionate
            about helping brands and individuals succeed online. Let's build
            something amazing together.
          </p>

          <div className="flex justify-center md:justify-start gap-6 sm:gap-6 sm:text-2xl text-xl md:text-3xl text-[#00c9a7] mt-4">
            <a
              href="https://www.linkedin.com/in/barbara-oparebea/"
              target="_blank"
              rel="noopener noreferrer" className="shadow hover:bg-[#00b091] transition p-2 rounded-full"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/BarbaraNkansah"
              target="_blank"
              rel="noopener noreferrer"  className="shadow hover:bg-[#00b091] transition p-2 rounded-full"
            >
              {" "}
              <FaGithub />
            </a>
            <a
              href="https://wa.me/233501117005?text=Hello%20Barbara%2C%20I%20saw%20your%20portfolio!
          "
              target="_blank"
              rel="noopener noreferrer" className="shadow hover:bg-[#00b091] transition p-2 rounded-full"
            >
              {" "}
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/barbielopez728/#"
              target="_blank"
              rel="noopener noreferrer" className="shadow hover:bg-[#00b091] transition p-2 rounded-full"
            >
              {" "}
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0 flex justify-center">
          <img src={BARBA} 
           alt="my profile" 
          className="w-60 sm:w-64 md:w-80 lg:w-[28rem] rounded-full object-cover" 
           />
        </div>
      </div>
      </section>
  )
}

export default HeroSection