import { Link } from "react-router-dom";
import { useContext } from "react";
import { contactcontext } from "../context/contactcontext";
import "./Contact.css";
import Contacts from "./Contacts";
import notfound from "../assets/no-found.gif";
import Sppiner from "./Sppiner";
import { Button } from "bootstrap";

const Contact = () => {
  const { showcontacts, loading, confirmalert } = useContext(contactcontext);
  return (
    <div className="addcontact">
      <button className="addbutton">
        <Link to={"/contact/add"}>
          ساخت مخاطب جدید
          <i className="fa fa-plus-circle" />
        </Link>
      </button>
      {loading ? (
        <Sppiner />
      ) : (
        <section>
          {showcontacts.length > 0 ? (
            showcontacts.map((c) => (
              <Contacts
                key={c.id}
                Contact={c}
                confirmalert={() => confirmalert(c.id, c.fullname)}
              />
            ))
          ) : (
            <div className="notfound">
              <img src={notfound} />
              <h2>مخاطب یافت نشد</h2>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
export default Contact;
