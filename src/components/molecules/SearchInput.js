import React from "react";

// Atoms
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Input/Label";

const SearchInput = ({ name, onClick, label, ...props }) => {
  return (
    <>
      {label && <Label label={label} id={`input-${name}`} />}
      <div className="input-container">
        <Input
          name={name}
          type="text"
          placeholder="Add your value here"
          {...props}
        />
        <Button type="submit">{"Search"}</Button>
      </div>
    </>
  );
};

export default SearchInput;
