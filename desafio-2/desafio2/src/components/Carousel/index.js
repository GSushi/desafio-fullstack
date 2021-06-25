import React, { useState, useEffect } from 'react';

import { CarouselContent, Slider, Button } from './styles';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export default function Carousel(props) {

  const [activePage, setActivePage] = useState(0);
  const [animationDirection, setAnimationDirection] = useState({});
  const [numPerPage, setNumPerPage] = useState(0);

  function updateSize() {
    if (window.matchMedia("(max-width: 800px)").matches) {
      /* a viewport tem no maximo 800 pixels de largura */
      setNumPerPage(props.numMobile);

    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      /* a viewport tem no maximo 1024 pixels de largura */
      setNumPerPage(props.numTablet);

    } else if (window.matchMedia("(max-width: 1800px)").matches) {
      /* a viewport tem no maximo 1440 pixels de largura */
      setNumPerPage(props.numDesktop);

    } else setNumPerPage(props.numLargeDesktop);
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  });

  const maxSteps = Math.ceil(props.itens.length / numPerPage);

  const handleNext = () => {
    setActivePage((prevActivePage) => prevActivePage + 1);
    setAnimationDirection({
      active: true,
      direction: 'right',
    })
  };

  const handleBack = () => {
    setActivePage((prevActivePage) => prevActivePage - 1);
    setAnimationDirection({
      active: true,
      direction: 'left',
    })
  };

  const indexOfLastItem = (activePage + 1) * numPerPage;
  const indexOfFirstItem = indexOfLastItem - numPerPage;
  const itensPerPage = props.itens.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <CarouselContent>
      <Button onClick={handleBack} disabled={activePage === 0}>
        <KeyboardArrowLeft />
      </Button>

      <Slider numItens={numPerPage} wobble={animationDirection}
        onAnimationEnd={() => setAnimationDirection({ active: false, direction: '' })}>

        {itensPerPage.map((item, index) => (
          <div className="card-carousel" key={index}>
            {item}
          </div>
        ))
        }

      </Slider>

      <Button left={true} onClick={handleNext} disabled={activePage === maxSteps - 1}>
        <KeyboardArrowRight />
      </Button>

    </CarouselContent>

  );
}
