import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
// import HorizontalScroll from 'react-horizontal-scrolling'
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { BiLeftArrowAlt } from 'react-icons/bi'

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (



  // <BiLeftArrowAlt />
  // LeftArrow={LeftArrow} RightArrow={RightArrow}
  <>



    {RightArrow(RightArrow)}


    < div className="flex space-x-3 overflow-y-scroll scrollbar-hide p-3 -ml-3"  >


      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> :
            <ExerciseCard exercise={item} />}
        </Box>

      ))}

    </ div>  {LeftArrow(LeftArrow)} </>

);

export default HorizontalScrollbar;
