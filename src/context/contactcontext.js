import { createContext } from "react";
export const contactcontext = createContext({
  loading: false,
  SetLoading: () => {},
  showcontacts: [],
  setShowcontacts: () => {},
  groups: [],
  SetGroups: () => {},
  contactQuery: {},
  setContactQuery: () => {},
  filteredContacts: [],
  SetFilteredContacts: () => {},
  getcontact: [],
  SetGetcontact: () => {},
  confirmalert: () => {},
  createcontactform: () => {},
  searchcontact: () => {},
  Setcontactinfo: () => {},
});
