import { Container } from './style'
import { Icons } from '../../Icons'

import { useEffect, useState } from 'react'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


function DishCarousel({ children }) {
  const [dishCard, setDishcard]=useState([])
  const [carousel, setCarousel] = useState(null)

  const {CareLeft,CareRight} = Icons()
  
  const responsive={
    400: {
      items: 1.3,
    },
    769: {
      items: 2.5,
    },
    1024: {
      items: 3,
    },
  }

  useEffect(() => {
    const newDishCard = [];
  
    for (let index = 0; index < children.length; index++) {
      const dish = children[index];
      if (dish !== undefined) {
        newDishCard.push(dish);
      }
    }
    setDishcard(newDishCard);
  }, [children]);

  return (
    <Container>
      <AliceCarousel
        responsive={responsive}
        buttonsDisabled={true}
        dotsDisabled={true}
        mouseTrackingEnabled={true}
        mouseDragEnabled={true}
          ref={(el) => setCarousel(el)}

          renderPrevButton={() => (
            <button onClick={() => carousel.slidePrev()}>
              <CareLeft />
            </button>
          )}
          renderNextButton={() => (
            <button onClick={() => carousel.slideNext()}>
              <CareRight />
            </button>
          )}

        items={dishCard}
      />
    </Container>
  )
}

export { DishCarousel }