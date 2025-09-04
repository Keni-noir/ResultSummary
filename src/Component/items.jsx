import Data from './data.json';
function items(){
    return(
        <div>
            {Data.map((item) => (
                <div key={item.id} className=" flex space-between p-3 gap-72 mb-4 bg-gray-100 rounded-md">
                    <div className='flex gap-3'>
                        <img src={item.icon} alt="" className='w-10 h-6'/>
                        <h2 className="text-font-semibold text-gray-800 ">{item.category}</h2>
                    </div>
                    <p className="text-gray-600 justify-left">{item.score}/100</p>
                </div>
            ))}
        </div>
    );
}

export default items