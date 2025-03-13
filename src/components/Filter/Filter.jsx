import css from "./Filter.module.css";

export default function Filter({ filterValue, handleChangeFilter }) {
  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="filters">
        Projects filters
      </label>
      <select
        className={css.filters}
        id="filters"
        value={filterValue}
        onChange={(e) => handleChangeFilter(e.target.value)}
      >
        <option value="all projects">All projects</option>
        <option value="react">React</option>
        <option value="ts">React + TS</option>
        <option value="next">Next + TS</option>
        <option value="vanilla">Vanilla JS</option>
        <option value="personal">Personal projects</option>
        <option value="command">Command projects</option>
        <option value="new">New</option>
        <option value="2025">2025 year</option>
        <option value="2024">2024 year</option>
        <option value="2023">2023 year</option>
        <option value="2022">2022 year</option>
      </select>
    </div>
  );
}
