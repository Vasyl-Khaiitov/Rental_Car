import css from "./Hero.module.css";
import Button from "../../common/Button/Button";
import { useNavigationLoader } from "./useLoader";
import Loader from "../Loader/Loader";

export default function Hero() {
  const { isNavigating, navigateWithLoader } = useNavigationLoader();

  const handleNavigate = () => {
    navigateWithLoader("/catalog");
  };

  return (
    <div className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Button
          type="button"
          paddingsY="12"
          paddingsX="88"
          className={css.button}
          onClick={handleNavigate}
        >
          {isNavigating ? <Loader size="12" /> : "View Catalog"}
        </Button>
      </div>
    </div>
  );
}
