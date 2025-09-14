import Icon from "../../../assets/Icon/Icon";
import css from "./CarDescription.module.css";

export default function CarDescription({ car, children }) {
  if (!car) return <p>Loading car details...</p>;

  const {
    id,
    img,
    brand,
    model,
    year,
    type,
    rentalPrice,
    address,
    mileage,
    fuelConsumption,
    engineSize,
    accessories,
    rentalConditions,
    description,
    functionalities,
  } = car;

  const formatedAddress = address?.split(",").slice(1).join(",");

  return (
    <article className={css.card_wrapper}>
      <div className={css.left_column}>
        <img
          src={img}
          alt={`${brand} ${model}`}
          className={css.image}
          width="640"
          height="512"
        />
        <div className={css.form_wrapper_order}>{children}</div>
      </div>
      <div className={css.right_column}>
        <div className={css.basic_info}>
          <div className={css.title_block}>
            <h2>{`${brand} ${model}, ${year}`}</h2>
            <p className={css.id}>Id: {String(id).slice(0, 23)}...</p>
          </div>
          <div className={css.block_location}>
            <p className={css.location}>
              <Icon name="icon-location" className={css.icon} />
              {formatedAddress}
            </p>
            <p className={css.mileage}>
              Mileage: {Math.round(mileage).toLocaleString("uk-UA")} km
            </p>
          </div>

          <p className={css.price_descr}> ${rentalPrice}</p>
        </div>

        <p className={css.description}>{description}</p>

        <section className={css.section}>
          <h3 className={css.title}>Rental Conditions:</h3>
          <ul>
            {rentalConditions?.map((cond, index) => (
              <li key={index} className={css.list_items}>
                <Icon name="icon-check_circle" className={css.icon} /> {cond}
              </li>
            ))}
          </ul>
        </section>

        <section className={css.section}>
          <h3 className={css.title}>Car Specifications:</h3>
          <ul>
            <li className={css.list_items}>
              <Icon name="icon-calendar" className={css.icon} /> Year: {year}
            </li>
            <li className={css.list_items}>
              <Icon name="icon-car" className={css.icon} /> Type: {type}
            </li>
            <li className={css.list_items}>
              <Icon name="icon-fuel_pump" className={css.icon} /> Fuel
              Consumption: {fuelConsumption} L/100km
            </li>
            <li className={css.list_items}>
              <Icon name="icon-gear" className={css.icon} /> Engine Size:{" "}
              {engineSize}
            </li>
          </ul>
        </section>

        <section className={css.section_last}>
          <h3 className={css.title}>Accessories and Functionalities:</h3>
          <ul>
            {accessories?.map((item, index) => (
              <li key={index} className={css.list_items}>
                <Icon name="icon-check_circle" className={css.icon} /> {item}
              </li>
            ))}
          </ul>
          <ul>
            {functionalities?.map((functional, index) => (
              <li key={index} className={css.list_items}>
                <Icon name="icon-check_circle" className={css.icon} />{" "}
                {functional}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
