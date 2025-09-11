import css from "./CatalogPage.module.css";
import CarList from "../../components/_CarListFolder/CarList/CarList";
import Filter from "../../components/Filter/Filter";

export default function CatalogPage() {
  return (
    <>
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className={css.title_filter}>
          Filter
        </h2>
        <Filter />
      </section>

      <section aria-labelledby="carlist-heading">
        <h2 id="carlist-heading" className={css.title_cars}>
          Available Cars
        </h2>
        <CarList />
      </section>
    </>
  );
}
