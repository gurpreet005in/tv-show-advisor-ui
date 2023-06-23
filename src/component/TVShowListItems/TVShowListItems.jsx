import s from "./style.module.css";
import { SMALL_BASE_COVER_BASE_URL } from "../../config";

const TVShowListItems = ({ tvShow, onClick }) => {
  const onClickShow = () => {
    onClick(tvShow);
  };

  return (
    <div className={s.container} onClick={onClickShow}>
      <img
        className={s.image}
        alt={tvShow.name}
        src={SMALL_BASE_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
};

export default TVShowListItems;
