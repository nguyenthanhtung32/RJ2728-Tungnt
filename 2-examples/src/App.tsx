import React from "react";
import "./App.css";
import anh from "./assets/images/1.avif";
import Session02 from "./components/homeworks/session02/Session02";
import Ss3 from "./components/example/Session03/Session03";
import Btnlike from "./components/homeworks/session03/B1/LikeButton";
import Btnrate from "./components/homeworks/session03/B2/RateButton";
import Countdown from "./components/example/4-LifeCycle/Countdown";
import CountClass from "./components/example/4-LifeCycle/CountClass";
import CountFunc from "./components/example/4-LifeCycle/CountFunc";
import ChangeColor from "./components/example/ex/ChangeColor";
import RenderTable from "./components/example/ex/RenderTable";
import ImageViewer from "./components/homeworks/session03/B3/ImageViewer";
import Tab from "./components/homeworks/session03/B4/Tab";

function App() {
  return (
    /*  <Btnrate/>  */
    /* <Countdown/> */
    /* <CountClass/> */
    /* <CountFunc/> */
   /*  <ChangeColor/> */
   /* <RenderTable/> */
   /*  <Btnlike/> */ 
  /*   <ImageViewer/>  */
  <Tab/>

    /* <>
      <div className="body">
        <header className="h2">
          <h2>The Pulpit Rock</h2>
        </header>
        <div className="row p-4">
          <div className="col-12 col-md-3 col-content">
            <p className="p-4 mx-3 border-bottom">The Drive</p>
            <p className="p-4 mx-3 border-bottom">The Walk</p>
            <p className="p-4 mx-3 border-bottom">The Return</p>
            <p className="p-4 mx-3 border-bottom">The End</p>
          </div>
          <div className="col-12 col-md col-content">
            <h2>The Walk</h2>
            <p>
              The walk to the Pulpit Rock will take you approximately two hours,
              give or take an hour depending on the weather conditions and your
              physical shape.
            </p>
            <img src={anh} className="d-block w-100" alt=""></img>
          </div>
          <div className="col-12 col-md-3 col-content">
            <div className="border p-2">
              <h2>What?</h2>
              <p>
                The Pulpit Rock is a part of a mountain that looks like a
                pulpit.
              </p>
              <h2>Where?</h2>
              <p>The Pulpit Rock is in Norway</p>
              <h2>Price?</h2>
              <p>The walk is free!</p>
            </div>
          </div>
        </div>
      </div>
      <Session02 />
      <Ss3 />
    </> */
  );
}

export default App;
