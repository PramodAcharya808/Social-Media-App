import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import styles from "./App.module.css";
import CreatePost from "../components/CreatePost";
import MainDisplayArea from "../components/MainDisplayArea";
import PostList from "../components/PostList";
import { useState } from "react";
import { PostListContextProvider } from "../store/PostList.store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListContextProvider>
      <div className={`container-fluid`}>
        <div className="row">
          <div className="col-2 p-0">
            <SideBar></SideBar>
          </div>
          <div className="col-10 p-0">
            <Header></Header>

            <MainDisplayArea>
              <Outlet />
              <Footer></Footer>
            </MainDisplayArea>
          </div>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
