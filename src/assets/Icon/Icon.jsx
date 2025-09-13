// ! Corect optimization sprite
// import icons from "./icon-sprite.svg";
import iconsUrl from "./icon-sprite.svg?url";

export const Icon = ({ name, className }) => (
  <svg className={className} aria-label={name}>
    {/* <use href={`${icons}#icon-${name}`} />*/}
    <use href={`${iconsUrl}#${name}`} />
  </svg>
);

export default Icon;
