import { useDispatch, useSelector } from "react-redux";
import Icon from "../../../assets/Icon/Icon";
import Button from "../../../common/Button/Button";
import { addFavorite, removeFavorite } from "../../../redux/favoriteCar/slice";
import css from "./CarCard.module.css";
import { selectIsFavoriteById } from "../../../redux/favoriteCar/selectors";
import { useNavigationLoader } from "../../Hero/useLoader";
import Loader from "../../Loader/Loader";

export default function CarCard({
  id,
  img,
  brand,
  model,
  year,
  type,
  price,
  company,
  address,
  mileage,
}) {
  const { isNavigating, navigateWithLoader } = useNavigationLoader();

  const addressParts =
    address
      ?.split(",")
      .slice(-2)
      .map((part) => part.trim()) || [];

  const milesToKm = (miles) =>
    Math.round(miles * 1.60934).toLocaleString("uk-UA");
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavoriteById(id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  const handleReadMore = () => {
    navigateWithLoader(`/catalog/${id}`);
  };

  return (
    <>
      <div className={css.img_wrapper}>
        <img
          src={img}
          alt={`${brand} ${model}`}
          className={css.img_card}
          loading="lazy"
          decoding="async"
          width="276"
          height="268"
        />
        <button
          className={css.icon_btn}
          onClick={handleToggleFavorite}
          aria-label="Add to favorites"
        >
          <Icon
            name={isFavorite ? "icon-heart_active" : "icon-hard_default"}
            className={css.icon_heart}
          />
        </button>
      </div>

      <div className={css.car_title_block}>
        <h2 className={css.car_title}>
          {brand}
          <span className={css.span_model}>{model}</span>, {year}
        </h2>
        <p className={css.car_price}>${price}</p>
      </div>

      <p className={css.car_info_row}>
        <span>{addressParts[0]}</span>
        <Icon name="icon-Line" className={css.icon_line} />
        <span>{addressParts[1]}</span>
        <Icon name="icon-Line" className={css.icon_line} />
        <span>{company}</span>
        <Icon name="icon-Line" className={css.icon_line} />
        <span>{type}</span>
        <Icon name="icon-Line" className={css.icon_line} />
        <span>{milesToKm(mileage)} km</span>
      </p>

      <Button
        type="button"
        paddingsX={88}
        className={css.btn_ReadMore}
        onClick={handleReadMore}
      >
        {isNavigating ? <Loader size="12" /> : "Read more"}
      </Button>
    </>
  );
}
