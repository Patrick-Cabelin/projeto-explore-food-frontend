import { Container } from './style'
import Carousel from 'react-elastic-carousel'

import { Icons } from '../../image/Icons'

function DishCarousel({children}){
  const {CareLeft, CareRight} = Icons()
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1400, itemsToShow: 4 },
  ]

  function carousel(){
    carousel.slidePrev()
  }
  
  function carouselNext(){
    carousel.slideNext()
  }

  return (
    <Container>

      <div>
        <button onClick={carousel}>{<CareLeft/>}</button>
      </div>

      <Carousel
      breakPoints={breakPoints}
      pagination={false}
      showEmptySlots
      transitionMs={750}
      ref={ref => (carousel = ref)}
      > 
        {children}
      </Carousel>

      <div
      >
        <button onClick={carouselNext}>{<CareRight/>}</button>
      </div>

    </Container>
  )
}

  export { DishCarousel }