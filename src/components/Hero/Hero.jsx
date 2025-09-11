import css from "./Hero.module.css";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalog">
          <Button
            type="button"
            name="View Catalog"
            paddingsY="12"
            paddingsX="88"
            className={css.button}
          />
        </Link>
      </div>
    </section>
  );
}
