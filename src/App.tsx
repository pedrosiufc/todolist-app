import IconSun from "/images/icon-sun.svg";

function App() {
  return (
    <main className="bg-neutral-very-dark-blue h-screen">
      <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
        <header>
          <h1>TODO</h1>
          <button>
            <img src={IconSun} alt="" />
          </button>
        </header>
      </div>
    </main>
  );
}

export default App;
