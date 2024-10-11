// import html from '../../assets/images/web_dev icon/html.jpg'
// import html from '../assets/images/web_dev_icon/html.jpg'


interface Props{
    src:string
    title:string
}

export default function SkillDisplay({src,title}:Props){
    return(
        <div className="my-2">
            {/* <img className="w-40 h-40" src={src} alt={title} /> */}
            <div className="mx-auto w-20 h-20 md:w-32 md:h-32 rounded-full bg-cyan-600"></div>
            <p className="text-center text-cyan-900 text-sm md:text-lg font-bold">{title}</p>
        </div>
    )
}