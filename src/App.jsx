import Item from './Component/items.jsx';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-lg">
        
        {/* Left side */}
        <div className="flex flex-col items-center text-center justify-center bg-blue-600 p-8 md:w-1/2">
          <h1 className="text-xl text-gray-300 font-bold mb-6">Your Result</h1>
          <div className="flex flex-col items-center justify-center w-32 h-32 mb-6  rounded-full bg-gradient-to-t from-blue-800 to-sky-500 text-white">
            <h1 className="font-bold text-6xl ">76</h1>
            <p className="text-gray-100 text-center ">of 100</p>
          </div>
          <h2 className="text-2xl text-gray-100 font-bold mb-6">Great</h2>
          <h2 className="text-md text-gray-300 text-center W-1/2">
            You scored higher than 65% of the people who have taken this test.
          </h2>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          <h1 className="text-xl text-black font-bold mb-6">Summary</h1>
          <Item />
          <button className="mt-6 w-full bg-blue-950 p-3 rounded-3xl text-white text-md font-bold hover:bg-blue-900 transition">
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
