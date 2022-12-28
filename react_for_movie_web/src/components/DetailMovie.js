import PropTypes from "prop-types";
import styles from "./DetailMovie.module.css";
function DetailMovie({
  bgImgOri,
  title,
  coverImg,
  rating,
  year,
  like_count,
  descrip_full,
}) {
  return (
    <div className={styles.Detail_container}>
      <div>
        <img
          src={bgImgOri}
          alt={title}
          className={styles.Detail_Movie_img}
        ></img>
      </div>
      <div>
        <div className={styles.Detail_Movie_header}>
          <img src={coverImg} alt={title} />
          <div>
            <h4>{title}</h4>
            <span>{year}년</span>
          </div>
        </div>
        <div className={styles.Detail_Movie_Rate_row}>
          <div className={styles.Detail_Movie_Rate}>Rate : {rating}</div>
          <div className={styles.Detail_Movie_Rate}>like : {like_count}</div>
        </div>
        <hr />
        <div className={styles.Detail_Movie_comment}>
          {descrip_full}
          {descrip_full.length > 235
            ? `${descrip_full.slice(0, 235)}...`
            : descrip_full}
        </div>
      </div>
    </div>
  );
}
DetailMovie.propTypes = {
  bgImgOri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  descrip_full: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default DetailMovie;
