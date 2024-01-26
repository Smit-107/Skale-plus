import React, { useEffect, useState } from 'react';
import EventsCard from './EventsCard';
import ShowMoreButton from './ShowMoreButton';
import { UseResizeScreenLayout640 } from '../../components/Core/useScreenResize';

const EventsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const isScreenWide = UseResizeScreenLayout640();

  useEffect(() => {
    if (isScreenWide) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  }, [isScreenWide]);

  return (
    <div className="pt-[30px] mb-[25px]">
      <p className="px-[15px] text-[#000] mb-[10px] font-Poppins sm:font-musticaPro text-[25px] sm:text-[45px] not-italic font-bold sm:font-semibold leading-[130%] tracking-[-0.5px] sm:tracking-[-0.9px] text-center">
        Events
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 md:gap-6 xl:gap-20 pt-[20px] sm:pt-[40px] px-[15px] md:px-[50px] lg:px-[100px] gap-4 xl:px-[180px]">
        {(!showMore ? [1, 2, 3, 4] : [1, 2, 3, 4].slice(0, 2)).map(
          (item, index) => (index < 3 || !isScreenWide) && <EventsCard key={index} />
        )}
      </div>
      <ShowMoreButton showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
};

export default EventsSection;


// import React, { useEffect, useState } from 'react';
// import Grid from '@mui/material/Grid';
// import EventsCard from './EventsCard';
// import ShowMoreButton from './ShowMoreButton';
// import { UseResizeScreenLayout640 } from '../../components/Core/useScreenResize';

// const EventsSection = () => {
//   const [showMore, setShowMore] = useState(false);
//   const isScreenWide = UseResizeScreenLayout640();

//   useEffect(() => {
//     if (isScreenWide) {
//       setShowMore(false);
//     } else {
//       setShowMore(true);
//     }
//   }, [isScreenWide]);

//   return (
//     <div className="pt-[30px] mb-[25px]">
//       <p className="px-[15px] text-[#000] mb-[10px] font-Poppins sm:font-musticaPro text-[25px] sm:text-[45px] not-italic font-bold sm:font-semibold leading-[130%] tracking-[-0.5px] sm:tracking-[-0.9px] text-center">
//         Events
//       </p>
//       <Grid
//         container
//         spacing={isScreenWide ? (5): (2) }
//         justifyContent="start"
//         pt={0}
//         className="!pt-[20px] sm:!pt-[40px] px-[15px] md:px-[50px] lg:px-[100px] xl:px-[180px] "
//       >
//         {(!showMore ? [1, 2, 3, 4] : [1, 2, 3, 4].slice(0, 2)).map(
//           (item, index) => (index < 3 || !isScreenWide) && <Grid key={index} item xs={12} sm={6} md={4}  >
//           <EventsCard />
//         </Grid>
//         )}
        
//       </Grid>
//       <ShowMoreButton showMore={showMore} setShowMore={setShowMore} />
//     </div>
//   );
// };

// export default EventsSection;

