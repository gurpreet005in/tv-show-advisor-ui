import TVShowListItems from "../TVShowListItems/TVShowListItems";
import s from "./style.module.css";

const TVShowList = ({ tvShowList, onClickItem }) => {
  return (
    <div className={s.title}>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItems tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default TVShowList;
