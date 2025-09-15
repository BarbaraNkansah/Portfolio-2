import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Hamburger (Menu) & Close (X) icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
      <header className="fixed top-0 left-0 w-full z-50 bg-black px-4 py-2">
        <div className="flex justify-between items-center text-lg font-serif text-white rounded-full md:shadow-lg max-w-7xl mx-auto px-6 py-6 md:px-12">

          <h1 className="text-base sm:text-lg md:text-xl font-bold">
           <Link to="/"> BARBARA <span className="text-[#00c9a7]">NKANSAH</span></Link>
          </h1>

          {/* Hamburger button (Mobile only) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <AnimatePresence>
            {isOpen &&(
              <motion.nav
              initial={{opacity:0, y: -20}}
              animate={{opacity: 1, y: 0}}
              exist={{opacity:0, y: -20}}
              transition={{duration: 0.3}}
              className= "absolute top-14 left-0 w-full bg-black md:hidden"
             >
            
             <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-10 md:py-0">
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
            </motion.nav>
            )}
          </AnimatePresence>
            
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            }absolute top-full left-0 w-full bg-black md:static md:w-auto md:bg-transparent md:block`}
          >
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-10 md:py-0">
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
