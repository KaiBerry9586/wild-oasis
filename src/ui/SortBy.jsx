import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParmas, setSearchParams] = useSearchParams();
  const sortBy = searchParmas.get("sortBy") || "";

  function handleChange(e) {
    searchParmas.set("sortBy", e.target.value);
    setSearchParams(searchParmas);
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
