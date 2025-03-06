import itemData from '../json/activity.json'

export default function ActivityCard() {

    
  return (
    <div>
        <div className="w-11/12 md:w-4/5 mx-auto">
            {itemData.map((item) => (
            <div className='md:flex gap-6 p-4 bg-white mb-8 rounded-xl shadow-lg'>
              <a href={item.img} className='w-full bg-white shadow-md rounded-xl'><img className={'rounded-xl md:mb-0 mb-4 object-cover '+item.imgClass} src={item.img} alt="" /></a>
              <div className='w-full flex flex-col justify-between'>
                <div>
                  <h1 className='text-right shadow-md text-xl font-bold bg-cyan-800 p-2 rounded-xl text-white'>{item.title}</h1>
                  <p className='text-right text-cyan-800 text-base mb-4'>{item.date}</p>
                  <p className='bg-slate-200 rounded-xl p-2 shadow-md mx-auto text-cyan-800 text-base overflow-auto'>{item.more_detail}</p>
                </div>
                <div className='flex justify-center md:justify-end gap-8 mt-4'>
                  {item.button.map((button) => (
                    <a href={button.url} target="_blank" className='bg-cyan-800 text-white md:text-lg p-2 md:p-3 rounded-xl shadow-md'>{button.title}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}