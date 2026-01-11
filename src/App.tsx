import IconSun from "/images/icon-sun.svg";

function App() {
  return (
    <main className="bg-neutral-very-dark-blue h-screen">
      <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
        <header className="flex justify-between max-w-[43.75rem] m-auto mb-6 pt-20">
          <h1 className="text-white text-[2.5rem] font-bold tracking-[1rem]">TODO</h1>
          <button>
            <img src={IconSun} alt="Alternar Tema" />
          </button>
        </header>
      </div>
    </main>
  );
}

export default App;
