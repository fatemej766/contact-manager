import { useState, useEffect } from "react";
import { useContext } from "react";
import { contactcontext } from "../context/contactcontext";
import { Link, useParams } from "react-router-dom";
import { getGroup, getContact } from "../Services/ContactService";
import Sppiner from "./Sppiner";
import "./viewcontact.css";
const Viewcontact = () => {
  const { contactId } = useParams();
  const [state, Setstate] = useState({
    contact: {},
    group: {},
  });
  const { loading, SetLoading } = useContext(contactcontext);
  useEffect(() => {
    const fetchDataa = async () => {
      try {
        SetLoading(true);
        const { data: contactdata } = await getContact(contactId);
        const { data: groupdata } = await getGroup(contactdata.group);
        SetLoading(false);
        Setstate({
          ...state,
          contact: contactdata,
          group: groupdata,
        });
        console.log(contactdata);
      } catch (err) {
        console.log("err.message");
        Setstate({ ...state, loading: false });
      }
    };
    fetchDataa();
  }, []);
  const { contact, group } = state;

  return (
    <>
      <section>
        <div>
          <p>اطلاعات مخاطب</p>
        </div>
      </section>
      {loading ? (
        <Sppiner />
      ) : (
        <>
          {Object.keys(contact).length > 0 && (
            <section>
              <div>
                <img src={contact.image} />
              </div>
              <div>
                <ul>
                  <li> :نام و نام انوادگی {contact.fullname} </li>
                  <li> :ایمیل {contact.email} </li>
                  <li> :شغل {contact.job} </li>
                  <li> :گروه {group.name} </li>
                </ul>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};
export default Viewcontact;
