import ColorBlock from './components/ColorBlock';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="glass-panel max-w-4xl w-full p-10 md:p-16 rounded-[2.5rem] flex flex-col items-center">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 mb-4 drop-shadow-lg leading-tight py-2">
            React useEffect Lab:<br />Color Toggler
          </h1>
          <p className="text-lg text-blue-100/90 max-w-xl mx-auto font-light tracking-wide">
            Practice managing side effects with the <code className="bg-black/20 px-2 py-1 rounded text-purple-200">useEffect</code> hook.
          </p>
        </header>

        <ColorBlock />
      </div>
    </div>
  );
}

export default App;
