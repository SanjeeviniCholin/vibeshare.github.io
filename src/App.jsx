import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sliderbar from "./components/Sliderbar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="main-wrapper">
        <div className="app-container">
          <Sliderbar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <div className="content">
            <Header />
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
