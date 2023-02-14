import React, { useState } from "react";
import "./App.css";
import Btnlike from "./components/homeworks/session03/B1/LikeButton";
import Btnrate from "./components/homeworks/session03/B2/RateButton";
import Countdown from "./components/example/4-LifeCycle/Countdown";
import CountClass from "./components/example/4-LifeCycle/CountClass";
import CountFunc from "./components/example/4-LifeCycle/CountFunc";
import ChangeColor from "./components/example/ex/ChangeColor";
import UserList from "./components/pages/User/List/UserList";
import ImageViewer from "./components/homeworks/session03/B3/ImageViewer";
import Tab from "./components/homeworks/session03/B4/Tab";
import UserDetail from "./components/pages/User/Detail/UserDetail";
import UserForm from "./components/pages/User/Form/UserForm";
import BaseWebRouter from "./components/pages/BaseWebRouter";
import Login from "./components/pages/Auth/Login";
import ListXe from "./components/pages/BookXe/List/ListXe";
import FormXe from "./components/pages/BookXe/Form/FormXe";
import DetailXe from "./components/pages/BookXe/Detail/DetailXe";
import BlockUl1 from "./components/homeworks/session02/BlockUI1/BlockUl1";
import BlockUI2 from "./components/homeworks/session02/BlockUl2/BlockUl2";
import BlockUI3 from "./components/homeworks/session02/BlockUl3/BlockUl3";
import BlockUl4 from "./components/homeworks/session02/BlockUl4/BlockUl4";
import BlockUI5 from "./components/homeworks/session02/BlockUl5/BlockUl5";
import BlockUI6 from "./components/homeworks/session02/BlockUl6/BlockUl6";
import BlockUI7 from "./components/homeworks/session02/BlockUl7/BlockUl7";
import Accordions from "./components/homeworks/session03/B5/Accordions";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    /*  <Btnrate/>  */
    /* <Countdown/> */
    /* <CountClass/> */
    /* <CountFunc/> */
    /*  <ChangeColor/> */
    /*  <Btnlike/> */
    /*   <ImageViewer /> */
    /* <Tab/>  */
    /*   <UserDetail/>  */
    /*  <UserList /> */
    /*  <UserForm /> */
    <>
      {isLogin ? (
        <BaseWebRouter setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </>
    /*    <BlockUl1/> */
    /*  <BlockUI2/> */
    /*  <BlockUI3/> */
    /*    <BlockUl4 /> */
    /*  <BlockUI5/> */
    /*  <BlockUI6/> */
    /*  <BlockUI7/> */
    /*     <Accordions /> */
  );
}

export default App;
