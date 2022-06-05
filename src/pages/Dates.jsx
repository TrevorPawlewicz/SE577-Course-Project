import React   from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
//-------------------------------------------

function Dates() {
    let params = useParams();
    console.log("params = ", params);
    const [details, setDetails] = useState([]);

    const fetchDetails = async () => {
      const data = await fetch ("/api");
      const detailData = await data.json();
      console.log("detailData = ", detailData);
      setDetails(detailData);
    };

    useEffect(() => {
      fetchDetails();
    }, [params.id]);



    return (
      <Wrapper>
      <div>
        <h1>Dates</h1>

          <img src={"./Comcast_logo.png"} alt="Dates" />
        </div>
        <Info>
          <div>
            <p>
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
              wordswordswordswordswordswordswordswords
            </p>
          </div>
        </Info>
      </Wrapper>
    );
  }


  const Wrapper = styled.div`
    margin: 10rem;
    display: flex;
    @media (max-width: 1068px) {
      flex-direction: column;
    }
    .active {
      background: linear-gradient(35deg, #494949, #313131);
      color: #fff;
    }
    h1 {
      margin-bottom: 6rem;
    }
    ul {
      margin-top: 2rem;
    }
    li {
      font-size: 1.2rem;
      line-height: 2.5rem;
    }
    p {
      margin: 1rem 0;
      font-size: 1.1rem;
      line-height: 1.8rem;
      &:first-child {
        margin-top: 2rem;
      }
    }
  `;

  const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #fff;
    border: 2px solid #000;
    margin-right: 2rem;
    font-weight: 600;
  `;

  const Info = styled.div`
    margin-left: 5rem;
    @media (max-width: 1068px) {
      margin-top: 3rem;
      margin-left: 1rem;
    }
  `;

export default Dates;
