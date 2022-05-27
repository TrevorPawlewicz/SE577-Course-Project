import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { Card, Button, Tag, Divider } from "antd";
import { AuthContext } from "../App";
import Core from "./Core";
//--------------------IMPORTS------------------------------

export default function Home() {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!state.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const { avatar_url, name, public_repos, followers, following, gists_url } = state.user;
  const myGistUrl = gists_url.replace(/\{.*}/,"");

  // console.log("myGistUrl = ", myGistUrl);
  // console.log("state.user = ", state.user);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  }

  const handleGist = () => {
    console.log('You clicked handleGist!');
    navigate('/main');
  }

  return (
    <Wrapper>

      <div>
        <Core />
      </div>

      <div>
        <Button block danger onClick={()=> handleLogout()}>Logout</Button>
        <hr/>
        <Button block type="primary" onClick={()=> handleGist()}>Gist Search</Button>
      </div>

      <div className="container">
        <div>
          <div className="content">
            <img src={avatar_url} alt="Avatar"/>
            <span>{name}</span>
            <span>{public_repos} Repos</span>
            <span>{followers} Followers</span>
            <span>{following} Following</span>
            <span>{myGistUrl}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.container{
  display: flex;
  flex-direction: column;
  height: 50vh;
  font-family: Arial;

  button{
    all: unset;
    width: 100px;
    height: 35px;
    margin: 10px 10px 0 0;
    align-self: flex-end;
    background-color: #0041C2;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #0041C2;

    &:hover{
      background-color: #fff;
      color: #0041C2;
    }
  }

  >div{
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;

    .content{
      display: flex;
      flex-direction: column;
      padding: 20px 100px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: auto;

      img{
        height: 150px;
        width: 150px;
        border-radius: 50%;
      }

      >span:nth-child(2){
        margin-top: 20px;
        font-weight: bold;
      }

      >span:not(:nth-child(2)){
        margin-top: 8px;
        font-size: 14px;
      }

    }

  }
}
`;
