import { Container } from './style'
import Carousel from 'react-elastic-carousel'

function DishCarousel({children}){
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 700, itemsToShow: 2 },
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
            <button onClick={carousel}>{'<'}</button>
          </div>
  
          <Carousel
          breakPoints={breakPoints}
          pagination={false}
          showEmptySlots
          transitionMs={900}
          ref={ref => (carousel = ref)}
          > 
            {children}
          </Carousel>
  
          <div
          >
            <button onClick={carouselNext}>{'>'}</button>
          </div>

      </Container>
    )
  }

  export { DishCarousel }