import "./App.css";
import Header from "./components/Header";
import MidCover from "./components/MidCover";
import NoticeBoard from "./components/NoticeBoard";
import UpdateHistory from "./components/UpdateHistory";
import CommunityBanner from "./components/CommunityBanner";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-section">
        <MidCover />
        <div className="banner-side">
          <CommunityBanner />
        </div>
      </div>
      <div className="content">
        <div className="content-wrapper">
          <div className="left-section">
            <NoticeBoard />
          </div>
          <div className="right-section">
            <UpdateHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
