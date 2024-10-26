import { Link } from "react-router-dom";
import "./Contacts.css";
const contacts = ({ Contact, confirmalert }) => {
  return (
    <div className="main">
      <div className="photo">
        <img src={Contact.image} />
      </div>
      <div className="group">
        <ul className="list-group">
          <li>
            <h6> نام و نام خانوادگی :{Contact.fullname}</h6>
          </li>
          <li>
            <h6> شماره موبایل :{Contact.mobile}</h6>
          </li>
          <li>
            <h6> آدرس ایمیل :{Contact.email}</h6>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <Link to={`${Contact.id}`} className="fa fa-eye"></Link>
        <Link to={`edit/${Contact.id}`} className="fa fa-pencil"></Link>
        <button onClick={confirmalert} className="fa fa-trash"></button>
      </div>
    </div>
  );
};
export default contacts;
