import IconSun from "/images/icon-sun.svg";

const Todoheader = () => {
   return (    
     <header className="flex justify-between mb-6 pt-20">
          <h1 className="text-white text-[2.5rem] font-bold tracking-[1rem]">TODO</h1>
        
          <button>
            <img className="w-8 h-8"src={IconSun} alt="Alternar Tema" />
          </button>
        </header>    
   );
};

export default Todoheader;