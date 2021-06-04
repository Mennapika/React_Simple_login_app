import React from 'react'
import "./Home.css"
import {
    HomeBtn,
    HomeBtnLink,
  } from "./HomeElement";
export const Home = () => {
    return (
        <div className="HomeContainer">
            <h1>Welcome to Instabug </h1>
            <HomeBtn>
            <HomeBtnLink to="/login">logout</HomeBtnLink>
          </HomeBtn>
        </div>
    )
}
