import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Dialog from '../components/dialog'
import { useMediaQuery } from '@mui/material';

export default function ActivityCard() {

    const match_media = useMediaQuery("(min-width:600px)");
    
  return (
    <div>
        <div className="image grid md:grid-cols-2 mx-6 md:mx-20 mt-6 md:mt-12 mb-10 md:mb-20 gap-2">
            {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{border:'2px solid cyan'}}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={<p className='font-bold text-sm md:text-xl text-cyan-300'>{item.title}</p>}
                subtitle={<p className='font-bold text-cyan-500'><span className='text-base md:text-lg'>{item.date}</span><br />{item.description}</p>}
                actionIcon={
                    <Dialog title={item.title} description={item.description} image={item.img} date={item.date}></Dialog>
                  }
              />
            </ImageListItem>
          ))}
        </div>
    </div>
  );
}

const itemData = [
  {
    img: 'https://i.pinimg.com/564x/44/98/b6/4498b6ef6034c4402a35ebdb757c9df9.jpg',
    title: 'Thailand Cyber Top Talent 2023 by NCSA',
    description: 'Top 81 out of 354 competitors (Top 22%)',
    date:'Sept 2023',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.pinimg.com/564x/44/98/b6/4498b6ef6034c4402a35ebdb757c9df9.jpg',
    title: 'Thailand Cyber Top Talent 2024 by NCSA',
    description: 'Top 24 out of 340 competitors (Top 7%)',
    date:'Sept 2024',
  },
  {
    img: 'https://i.pinimg.com/564x/44/98/b6/4498b6ef6034c4402a35ebdb757c9df9.jpg',
    date:'Sept 2024',
    title: 'ICPC Thailand National Competition 2024',
    description: 'Joined international programming competition',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/44/98/b6/4498b6ef6034c4402a35ebdb757c9df9.jpg',
    date:'Nov 2023',
    title: 'Hackathon Mahidol MU My Mind',
    description: 'Hackathon creating application for helping depression',
    
  },
];