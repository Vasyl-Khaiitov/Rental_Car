// ! Corect optimization sprite
// import icons from "./icon-sprite.svg";
import iconsUrl from "./icon-sprite.svg?url";

export const Icon = ({ name, classname }) => (
  <svg className={classname} aria-label={name}>
    {/* <use href={`${icons}#icon-${name}`} />*/}
    <use href={`${iconsUrl}#icon-logo`} />
  </svg>
);

export default Icon;
