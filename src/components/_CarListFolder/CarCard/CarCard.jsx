import { useDispatch, useSelector } from "react-redux";
import Icon from "../../../assets/Icon/Icon";
import Button from "../../../common/Button/Button";
import { addFavorite, removeFavorite } from "../../../redux/favoriteCar/slice";
import css from "./CarCard.module.css";
import { useNavigate } from "react-router-dom";
import { selectIsFavoriteById } from "../../../redux/favoriteCar/selectors";

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
  const formatedAddress = address?.split(",").slice(1).join(",");
  const milesToKm = (miles) => (miles * 1.60934).toFixed(0);
  const navigate = useNavigate();
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
    navigate(`/catalog/${id}`);
  };

  return (
    <>
      <div className={css.img_wrapper}>
        <img src={img} alt="Car photo" className={css.img_card} />
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

      <h2 className={css.car_title}>
        {brand},<span className={css.span_model}>{model}</span>
      </h2>
      <p className={css.car_year}>{year}</p>
      <p className={css.car_price}>${price}</p>
      <p className={css.car_location}>{formatedAddress}</p>
      <p className={css.car_company}>{company}</p>
      <p className={css.car_type}>{type}</p>
      <p className={css.car_mileage}>{milesToKm(mileage)} km</p>
      <Button
        name="Read more"
        type="button"
        paddingsX={88}
        className={css.btn_ReadMore}
        onClick={handleReadMore}
      />
    </>
  );
}
