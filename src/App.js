import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import contacts from "./components/Contacts";
import Addcntact from "./components/Addcntact";
import Viewcontact from "./components/Viewcontact";
import { confirmAlert } from "react-confirm-alert";
import Editcontact from "./components/Editcontact";
import { contactcontext } from "./context/contactcontext";
//import { Routes, Route, useNavigate } from "react-router-dom";
import {
  getAllContacts,
  getAllGroups,
  createContact,
  deleteContact,
} from "./Services/ContactService";
import { Route, useNavigate, Routes, Navigate } from "react-router-dom";
const App = () => {
  const [showcontacts, setShowcontacts] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [groups, SetGroups] = useState([]);
  const [contactQuery, setContactQuery] = useState({ text: "" });
  const [filteredContacts, SetFilteredContacts] = useState([]);
  const [getcontact, SetGetcontact] = useState({});
  const navigatte = useNavigate;
  useEffect(() => {
    const fetchdata = async () => {
      try {
        SetLoading(true);
        const { data: Contactsdata } = await getAllContacts();
        const { data: groupsdata } = await getAllGroups();
        setShowcontacts(Contactsdata);
        SetGroups(groupsdata);
        SetFilteredContacts(Contactsdata);
        SetGetcontact(Contactsdata);
        SetLoading(false);
      } catch (err) {
        console.log(err.message);
        SetLoading(false);
      }
    };
    fetchdata();
  }, []);
  const removecontact = async (contactId) => {
    try {
      SetLoading(true);
      const response = await deleteContact(contactId);
      if (response) {
        const { data: contactdata } = await getAllContacts();
        SetGetcontact(contactdata);
        SetLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      SetLoading(false);
    }
  };

  const confirmalert = (contactId, contactfullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <h1>پاک کردن مخاطب</h1>
            <p>ایا مطمِئنی مخاطب {contactfullname} رو میخوای پاک کنی؟ </p>
            <button
              onClick={() => {
                removecontact(contactId);
                onClose();
              }}
            >
              بله مطمئنم
            </button>
            <button onClick={onClose}>انصراف</button>
          </div>
        );
      },
    });
  };

  //dar vaghe ma ba klick kardam roye har keybord baraye por kardane form ha darim event ersal mishe va ma mikhaym in event o begirim dar ezash meghdar bedim
  //preventDefault baraye hame form ha estefade mishe= pishfarze form(refresh shodan)ejra nemishe
  const createcontactform = async (event) => {
    event.preventDefault();
    SetLoading((prevLoading) => !prevLoading);
    try {
      const { status, data } = await createContact(getcontact);
      const allcontact = [...showcontacts, data];
      if (status === 201) {
        SetGetcontact({});
        setShowcontacts(allcontact);
        SetFilteredContacts(allcontact);
        SetLoading((prevLoading) => !prevLoading);
        navigatte("/contact");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const searchcontact = (event) => {
    setContactQuery({ ...contactQuery, text: event.target.value });
    const allcontactsearch = getcontact.filter((contact) => {
      //console.log(contact);
      return contact.fullname
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    SetFilteredContacts(allcontactsearch);
  };
  const Setcontactinfo = (event) => {
    SetGetcontact({
      ...getcontact,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <contactcontext.Provider
      value={{
        loading,
        SetLoading,
        showcontacts,
        setShowcontacts,
        groups,
        SetGroups,
        contactQuery,
        setContactQuery,
        filteredContacts,
        SetFilteredContacts,
        getcontact,
        SetGetcontact,
        confirmalert,
        createcontactform,
        searchcontact,
        Setcontactinfo,
      }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/contact" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/add" element={<Addcntact />} />
          <Route path="/contact/:contactId" element={<Viewcontact />} />
          <Route path="/contact/edit/:contactId" element={<Editcontact />} />
        </Routes>
      </div>
    </contactcontext.Provider>
  );
};

export default App;
