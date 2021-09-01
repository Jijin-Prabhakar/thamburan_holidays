import "./App.css";
import Header from "./components/Header/Header";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import GalleryContainer from "./components/GalleryContainer/GalleryContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerContainer />
      <GalleryContainer />
    </div>
  );
}

export default App;
