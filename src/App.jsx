import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import styles from "./App.module.css";
import CreatePost from "./components/CreatePost";
import MainDisplayArea from "./components/MainDisplayArea";
import PostList from "./components/PostList";
import { useState } from "react";
function App() {
  let [activeMenu, setactiveMenu] = useState("Create Post");

  return (
    <div className={`container-fluid`}>
      <div className="row">
        <div className="col-2 p-0">
          <SideBar activeMenu={activeMenu}></SideBar>
        </div>
        <div className="col-10 p-0">
          <Header></Header>

          <MainDisplayArea>
            {activeMenu === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}
          </MainDisplayArea>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
