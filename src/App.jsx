import Item from './Component/items.jsx';
function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="container flex flex-col mx-auto w-2xl rounded-3xl bg-white min-h-108 mt-40 md:flex-row">
          <div className="justify-center place-items-center-safe rounded-3xl w-1/2 bg-blue-600 p-6">
                <h1 className="text-xl text-gray-300 font-bold mb-6">Your Result</h1>
                <div className="p-10 mb-6 rounded-full bg-gradient-to-t from-blue-800 to-sky-500 text-white">
                    <h1 className="items-center font-bold text-6xl">76</h1>
                    <p className="items-center px-2.5 text-gray-100" >of 100</p>
                </div>
                <h2 className="text-2xl text-gray-100 font-bold mb-6">Great</h2>
                <h2 className="text-center text-md text-gray-300">You scored higher than 65% of the people who have taken this test.</h2>
          </div>
          <div className="container flex-col justify-center w-1/2 p-6">
                <h1 className="text-xl text-black font-bold mb-6">Summary</h1>
                <Item />
                <div className='w-full bg-blue-950 p-3 rounded-3xl text-center text-white text-md font-bold'>Continue</div>
          </div>
      </div>
    </div>
  );
}
  

export default App
