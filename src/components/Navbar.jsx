import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
// Hamburger (Menu) & Close (X) icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
      <header className="fixed top-0 left-0 w-full z-50 bg-black px-20 py-2">
        <div className="flex mx-auto justify-between items-center m-8 text-xl font-serif bg-black text-white rounded-full md:shadow-lg">
          <h1 className="ml-20">
           <Link to="/"> BARBARA <span className="text-[#00c9a7]">NKANSAH</span></Link>
          </h1>

          {/* Hamburger button (Mobile only) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:block md:bg-transparent`}
          >
            <ul className="flex flex-col gap-4 md:flex-row md:gap-10">
              <li className="relative cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00c9a7] after:transition-all after:duration-300 hover:after:w-full">
                
                <Link to="/project">Projects</Link>
              </li>
              <li className="relative cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00c9a7] after:transition-all after:duration-300 hover:after:w-full">
                
                    <Link to="/about">About Me</Link>
              </li>
          
              <li className="relative cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00c9a7] after:transition-all after:duration-300 hover:after:w-full">
                   <Link to="/contact">Contact</Link>
              </li>
              <a
                href="/Barbara_Nkansah_Resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="relative cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00c9a7] after:transition-all after:duration-300 hover:after:w-full"
              >
                CV
              </a>
            </ul>
          </nav>
        </div>
      </header>
     
    
  );
}

export default Navbar;
