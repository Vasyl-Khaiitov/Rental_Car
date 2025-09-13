import css from "./Logo.module.css";
import Icon from "../../assets/Icon/Icon";

export default function Logo() {
  return (
    <>
      <Icon name="icon-logo" className={css.iconLogo} aria-label="icon-logo" />
    </>
  );
}
