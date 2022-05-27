import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
//--------------------IMPORTS------------------------------

function Core(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch("../mydata.json")
    fetch("/api")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result ==> ', result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Wrapper >
          <h1>Project Timeline Calc</h1>

          <Splide options={{ perPage:3, arrows: false, drag: 'free', gap: '5rem'}}>
            {items.seedData.map((data) => {
              return (
                <SplideSlide key={data.id}>

                    <Card>
                      <p>{data.department}</p>
                      <img src={data.image} alt={data.department}/>
                    </Card>

                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      </div>
    );
  }
}



const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  img {
    border-radius: 1rem;

  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: black;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Core;
