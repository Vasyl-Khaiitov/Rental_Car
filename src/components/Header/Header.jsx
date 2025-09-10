import css from "../Header/Header.module.css";
import Navigation from "./Navigation/Navigation";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
      </div>
    </header>
  );
}
