import { useEffect, useState } from 'react';

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { getClientDocuments } from '../../../../services/api/clientDocument';
import Spinner from '../../../../components/Spinner';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


 const Testimonial = () => {
const [comments, setComments] = useState(null);

useEffect(() => {
  getClientDocuments('cosmeticos-images').then(({ data: givenComments }) => {
    console.log('givenComments', givenComments);
    setComments(givenComments);
  });
}, []);

  return (
    <div className="testimonial">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >

        {comments &&
          comments.map((comment, key) => (
          <div className="comment" itemId={`${key + 1}`} key={key}>
            <div>
              <img src={comment.photo} alt="image-comment" className="border" />
              <h3>{comment.comment}</h3>
              <h5>{comment.name}</h5>
            </div>
          </div>
        ))}
      </Carousel>

        <style jsx>{`
        .testimonial {
            width: 100vw;
            height: 70vh;
            display: flex;
            justify-content:center;
            align-items:center;
            text-shadow: 0 0 1px 1px black;
            margin: 5em 0;
            background:#ebebeb;

        }
        .comment{
            width:350px;
            height:400px;
            border:1px solid grey;
            margin:5px;
        }
        .border{
            border-radius:50%;
        }

        `}</style>
    </div>
  );
};
export default Testimonial;
