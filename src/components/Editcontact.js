import { useState, useEffect, useContext } from "react";
import { contactcontext } from "../context/contactcontext";
import Sppiner from "./Sppiner";
import "./Editcontact.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getContact, updateContact } from "../Services/ContactService";
const Editcontact = () => {
  const { contactId } = useParams();
  const {
    loading,
    SetLoading,
    groups,
    showcontacts,
    SetFilteredContacts,
    filteredContacts,
  } = useContext(contactcontext);
  const Navigate = useNavigate();
  const [state, SetState] = useState({});
  useEffect(() => {
    const fetchdata = async () => {
      try {
        SetLoading(true);
        const { data: contactdata } = await getContact(contactId);
        SetLoading(false);
        SetState(contactdata);
      } catch (err) {
        console.log(err);
        SetLoading(false);
      }
    };
    fetchdata();
  }, []);
  const contactinfo = (event) => {
    SetState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const submitform = async (event) => {
    event.preventDefault();
    try {
      SetLoading(true);
      const { data, status } = await updateContact(state, contactId);
      SetLoading(false);
      if (status === 200) {
        const allcontact = [...showcontacts];
        const contactindex = allcontact.findIndex(
          (c) => c.id === parseInt(contactId)
        );
        allcontact[contactindex] = { ...data };
        SetState(allcontact);
        SetFilteredContacts(allcontact);
        Navigate("/contact");
        console.log(allcontact[contactindex]);
        console.log(state);
        console.log(filteredContacts);
      }
    } catch (err) {
      console.log(err);
      SetLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Sppiner />
      ) : (
        <>
          <section className="edit">
            <h3>ویرایش مخاطب</h3>
            <img src={""} />
            <form className="editform" onSubmit={submitform}>
              <input
                name="fullname"
                type="text"
                value={state.fullname}
                onChange={contactinfo}
                placeholder="نام و نام خانوادگی"
                required={true}
              ></input>
              <input
                name="image"
                type="text"
                value={state.image}
                onChange={contactinfo}
                placeholder="آدرس تصویر"
                required={true}
              ></input>
              <input
                name="mobile"
                type="text"
                value={state.mobile}
                onChange={contactinfo}
                placeholder="موبایل"
                required={true}
              ></input>
              <input
                name="email"
                type="text"
                value={state.email}
                onChange={contactinfo}
                placeholder="آدرس ایمیل"
                required={true}
              ></input>
              <input
                name="job"
                type="text"
                value={state.job}
                onChange={contactinfo}
                placeholder="شغل"
                required={true}
              ></input>
              <select
                name="group"
                required={true}
                value={state.group}
                onChange={contactinfo}
              >
                <option value="">انتخاب گروه</option>
                {groups.length > 0 &&
                  groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
              </select>
              <button type="dubmit">ویرایش مخاطب</button>
              <Link to={"/contact"}>انصراف</Link>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default Editcontact;
