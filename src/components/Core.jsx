import { seedData } from "../data";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
// import { useEffect, useState } from "react";


function Core(){
  // const [core, setCore] = useState([]);

  // useEffect(() => {
  //   getCoreData();
  // }, []);
  //
  // const getCoreData = async () => {
  //   const api = await fetch("../data");
  //   const data = await api.json();
  //   console.log(data);
  //   setCore(data.department);
  // };

  return (
    <div>
      <Wrapper >
        <h3>Core Stuff</h3>

        <Splide options={{ perPage:3, arrows: false, drag: 'free', gap: '5rem'}}>
          {seedData.map((data) => {
            return (
              <SplideSlide>
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
