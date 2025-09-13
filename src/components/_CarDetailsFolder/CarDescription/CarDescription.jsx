import Icon from "../../../assets/Icon/Icon";
import css from "./CarDescription.module.css";

export default function CarDescription({ car }) {
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
    <article className={css.card}>
      <section className={css.section}>
        <img src={img} alt={`${brand} ${model}`} className={css.image} />
        <h2 className={css.title}>{`${brand} ${model}, ${year}`}</h2>
        <p className={css.id}>Id:{id}</p>
        <p className={css.location}>
          <Icon name="icon-location" className={css.icon} /> {formatedAddress}
        </p>
        <p className={css.mileage}>Mileage: ${mileage} km</p>
        <p className={css.price}>Price: ${rentalPrice}</p>
        <p className={css.description}>{description}</p>
      </section>

      <section className={css.section}>
        <h3>Rental Conditions:</h3>
        <ul>
          {rentalConditions?.map((cond, index) => (
            <li key={index}>
              <Icon name="icon-check_circle" className={css.icon} /> {cond}
            </li>
          ))}
        </ul>
      </section>

      <section className={css.section}>
        <h3>Car Specifications:</h3>
        <ul>
          <li>
            <Icon name="icon-calendar" className={css.icon} /> Year: {year}
          </li>
          <li>
            <Icon name="icon-car" className={css.icon} /> Type: {type}
          </li>
          <li>
            <Icon name="icon-fuel_pump" className={css.icon} /> Fuel
            Consumption: {fuelConsumption} L/100km
          </li>
          <li>
            <Icon name="icon-gear" className={css.icon} /> Engine Size:{" "}
            {engineSize}
          </li>
        </ul>
      </section>

      <section className={css.section}>
        <h3>Accessories and Functionalities:</h3>
        <ul>
          {accessories?.map((item, index) => (
            <li key={index}>
              <Icon name="icon-check_circle" className={css.icon} /> {item}
            </li>
          ))}
        </ul>
        <ul>
          {functionalities?.map((functional, index) => (
            <li key={index}>
              <Icon name="icon-check_circle" className={css.icon} />{" "}
              {functional}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
