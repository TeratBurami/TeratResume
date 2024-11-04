import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Dialog from '../components/dialog'
import { useMediaQuery } from '@mui/material';
import itemData from '../json/activity.json'
import { useState } from 'react';

export default function ActivityCard() {

    const match_media = useMediaQuery("(min-width:600px)");

    
  return (
    <div>
        <div className="w-11/12 md:w-4/5 mx-auto">
            {itemData.map((item) => (
            <div className='md:flex gap-6 p-4 bg-white mb-8 rounded-xl shadow-lg'>
              <img className='rounded-xl shadow-md md:mb-0 mb-4' src={item.img} alt="" />
              <div className='w-full'>
                <h1 className='text-right shadow-md text-xl font-bold bg-cyan-800 p-2 rounded-xl text-white'>{item.title}</h1>
                <p className='text-right text-cyan-800 text-base mb-4'>{item.date}</p>
                <p className='bg-white rounded-xl p-2 shadow-md mx-auto text-cyan-950 text-sm'>{item.more_detail}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

// const itemData = [
//   {
//     img: 'https://i.pinimg.com/564x/44/98/b6/4498b6ef6034c4402a35ebdb757c9df9.jpg',
//     title: 'Thailand Cyber Top Talent 2023 by NCSA',
//     description: 'Top 81 out of 354 competitors (Top 22%)',
//     date:'Sept 2023',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://i.pinimg.com/564x/44/98/b6/4498b6ef6034c4402a35ebdb757c9df9.jpg',
//     title: 'Thailand Cyber Top Talent 2024 by NCSA',
//     description: 'Top 24 out of 340 competitors (Top 7%)',
//     date:'Sept 2024',
//   },
//   {
//     img: 'https://i.pinimg.com/564x/44/98/b6/4498b6ef6034c4402a35ebdb757c9df9.jpg',
//     date:'Sept 2024',
//     title: 'ICPC Thailand National Competition 2024',
//     description: 'Joined international programming competition',
//     cols: 2,
//   },
//   {
//     img: 'https://i.pinimg.com/564x/44/98/b6/4498b6ef6034c4402a35ebdb757c9df9.jpg',
//     date:'Nov 2023',
//     title: 'Hackathon Mahidol MU My Mind',
//     description: 'Hackathon creating application for helping depression',
    
//   },
// ];