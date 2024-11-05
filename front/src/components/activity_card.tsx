import itemData from '../json/activity.json'

export default function ActivityCard() {

    
  return (
    <div>
        <div className="w-11/12 md:w-4/5 mx-auto">
            {itemData.map((item) => (
            <div className='md:flex gap-6 p-4 bg-white mb-8 rounded-xl shadow-lg'>
              <img className='rounded-xl shadow-md md:mb-0 mb-4' src={item.img} alt="" />
              <div className='w-full'>
                <h1 className='text-right shadow-md text-xl font-bold bg-cyan-800 p-2 rounded-xl text-white'>{item.title}</h1>
                <p className='text-right text-cyan-800 text-base mb-4'>{item.date}</p>
                <p className='bg-slate-200 rounded-xl p-2 shadow-md mx-auto text-cyan-800 text-base overflow-auto'>{item.more_detail}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}