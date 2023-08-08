import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleEvent from "./SingleEvent";

const TopSecForSmall = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("./event.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // Slick setting
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // grouping function
  const groupIntoChunksOfTwo = (data) => {
    const result = [];
    for (let i = 0; i < data.length; i += 2) {
      result.push(data.slice(i, i + 2));
    }
    return result;
  };

  const groupedCards = groupIntoChunksOfTwo(events);

  return (
    <Slider {...settings}>
      {groupedCards.map((slide, index) => (
        <div key={index}>
          <div className="card-container flex gap-4">
            {slide.map((card) => (
              <SingleEvent key={card.id} event={card} />
            ))}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TopSecForSmall;
