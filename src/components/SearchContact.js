import { useContext } from "react";
import { contactcontext } from "../context/contactcontext";
const SearchContact = () => {
  const { searchcontact, contactQuery } = useContext(contactcontext);
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: "purple" }}
      >
        <i className="fa fa-search" />
      </span>
      <input
        dir="rtl"
        type="text"
        value={contactQuery.text}
        onChange={searchcontact}
        style={{ backgroundColor: "gray", borderColor: "purple" }}
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;
