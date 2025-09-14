import { FaLinkedin } from "react-icons/fa6";
import BARBA from "../assets/BARBA.png";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";

function Aboutme() {
 
  return (
   <>

     <Navbar/>
    <div className="grid grid-cols-2 m-8 text-center justify-center font-sans items-center">
       
      <div>
        <h1 className="mt-30 text-2xl font-roboto">
          BARBARA <span className="text-[#00c9a7]">NKANSAH</span>
        </h1>
        <h2 className="text-2xl font-roboto">
          Vertual Assistant & Web Developer
        </h2>

        <img
          src={BARBA}
          alt="Profile"
          className="max-w-md mt-10 mx-auto object-cover hover:bg-[#00c9a70a]"
        />
      </div>

      <div className="text-2xl tracking-tight mr-50 mt-30 text-justify font-roboto">
        <p>
          Hi, I’m Barbara, a virtual assistant and a curious web developer who loves turning ideas into
          interactive websites. I specialize in frontend development using HTML,
          CSS, JavaScript, and React to build clean, user-friendly designs.{" "}
          <br /> <br />I enjoy solving problems like puzzles, whether it’s
          making a layout responsive, fixing tricky bugs, or bringing creative
          designs to life. When I’m not coding, I’m exploring new tools like
          Figma or learning the latest web trends to stay ahead.
          <br />
          <br /> What makes me different? I bring not only technical skills but
          also teamwork, creativity, and the drive to learn fast. Employers can
          count on me to deliver well-structured code, great design sense, and
          positive energy.
        </p>
      </div>
    </div>
    </>
  );
}

export default Aboutme;
