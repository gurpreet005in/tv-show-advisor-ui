import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const submitRequest = (e) => {
    if (e.key == "Enter" && e.target.value.trim() != "") {
      onSubmit(e.target.value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        className={s.input}
        onChange={handleChange}
        value={value}
        type="text"
        placeholder="Search TV Show"
        onKeyUp={submitRequest}
      />
    </>
  );
};

export default SearchBar;
