import "./Addcntact.css";
import { useContext } from "react";
import { contactcontext } from "../context/contactcontext";
import background from "../assets/man-taking-note.png";
import Sppiner from "./Sppiner";
import { Link } from "react-router-dom";
const Addcntact = () => {
  const { loading, getcontact, Setcontactinfo, groups, createcontactform } =
    useContext(contactcontext);
  return (
    <>
      {loading ? (
        <Sppiner />
      ) : (
        <>
          <section>
            <h3>ساخت مخاطب جدید</h3>
            <img src={background} />
            <form onSubmit={createcontactform}>
              <input
                name="fullname"
                type="text"
                value={getcontact.fullname}
                onChange={Setcontactinfo}
                placeholder="نام و نام خانوادگی"
                required={true}
              ></input>
              <input
                name="image"
                type="text"
                value={getcontact.image}
                onChange={Setcontactinfo}
                placeholder="آدرس تصویر"
                required={true}
              ></input>
              <input
                name="mobile"
                type="text"
                value={getcontact.mobile}
                onChange={Setcontactinfo}
                placeholder="موبایل"
                required={true}
              ></input>
              <input
                name="email"
                type="text"
                value={getcontact.email}
                onChange={Setcontactinfo}
                placeholder="آدرس ایمیل"
                required={true}
              ></input>
              <input
                name="job"
                type="text"
                value={getcontact.job}
                onChange={Setcontactinfo}
                placeholder="شغل"
                required={true}
              ></input>
              <select
                name="group"
                required={true}
                value={getcontact.group}
                onChange={Setcontactinfo}
              >
                <option value=""> انتخاب گروه</option>
                {groups.length > 0 &&
                  groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
              </select>
              <input type="submit" value="ساخت مخاطب" />
              <button>
                <Link to={"/contact"}>انصراف</Link>
              </button>
            </form>
          </section>
        </>
      )}
    </>
  );
};
export default Addcntact;
