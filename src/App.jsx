import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { BACKDROP_BASE_PATH } from "./config";
import TVShowDetails from "./component/TVShowDetails/TVShowDetails";
import Logo from "./component/Logo/Logo";
import logoImage from "./asserts/images/logo.png";
import TVShowList from "./component/TVShowList/TVShowList";
import SearchBar from "./component/SearchBar/SearchBar";

const App = () => {
  const [currentTvShow, setCurrentTvShow] = useState(0);
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopularTvShows() {
    try {
      const popularTvShowList = await TVShowAPI.fetchPopulars();
      if (popularTvShowList.length > 0) {
        setCurrentTvShow(popularTvShowList[0]);
      }
    } catch (error) {
      //console.log("Something wrong while pulling records");
      alert("Bravo !");
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResp = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
      console.log("Something wrong while pulling records");
    }
  }

  async function fetchByTitle(title) {
    try {
      const tvShowList = await TVShowAPI.fetchByTitle(title);
      if (tvShowList.length > 0) {
        setCurrentTvShow(tvShowList[0]);
      }
    } catch (error) {
      console.log("Something wrong while pulling records");
    }
  }

  useEffect(() => {
    fetchPopularTvShows();
  }, []);

  useEffect(() => {
    fetchRecommendations(currentTvShow.id);
  }, [currentTvShow]);

  function updateCurrentTVShow(tvShow) {
    setCurrentTvShow(tvShow);
  }

  console.log("TV Show ", currentTvShow);
  console.log("TV Recommendations", recommendationList);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACKDROP_BASE_PATH}${currentTvShow.backdrop_path}") no-repeat center/ cover`
          : "skyblue",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo img={logoImage} title="NightShow" subtitle="Find the show" />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_container}>
        {currentTvShow && <TVShowDetails tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTvShow && (
          <TVShowList
            tvShowList={recommendationList}
            onClickItem={updateCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
};

export default App;
