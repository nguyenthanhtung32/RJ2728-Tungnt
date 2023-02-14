import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../common/Navigation/Navigation";
import UserDetail from "./User/Detail/UserDetail";
import UserForm from "./User/Form/UserForm";
import UserList from "./User/List/UserList";
import ListXe from "./BookXe/List/ListXe";
import FormXe from "./BookXe/Form/FormXe";
import DetailXe from "./BookXe/Detail/DetailXe";
import Footer from "../common/Footer/Footer";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

function BaseWebRouter(props: IProps) {
  const { setIsLogin } = props;

  return (
    /* <BrowserRouter>
      <Navigation setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/detail/:id" element={<UserDetail />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/form/:id" element={<UserForm />} />
      </Routes>
    </BrowserRouter> */
    <BrowserRouter>
      <Navigation setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<ListXe />} />
        <Route path="/detail/:id" element={<DetailXe />} />
        <Route path="/form" element={<FormXe />} />
        <Route path="/form/:id" element={<FormXe />} />
        <Route
          path="#"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 Page not found ☻☺</p>
            </main>
          }
        />
      </Routes>
      <Footer title={undefined} />
    </BrowserRouter>
  );
}

export default BaseWebRouter;
