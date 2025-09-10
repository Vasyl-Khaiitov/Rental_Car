import icons from "./icon-sprite.svg";

export const Icon = ({ name, classname }) => (
  <svg className={classname} aria-label={name}>
    {/* <use href={`${icons}#icon-${name}`} /> */}
    <use href={`#icon-${name}`} />
  </svg>
);

export default Icon;
