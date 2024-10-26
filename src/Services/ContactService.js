import axios from "axios";

const SERVER_URL = "http://localhost:3000";

// @desc Get All Contacts
// @route GET http://localhost:3000/contact
export const getAllContacts = () => {
  const url = `${SERVER_URL}/contact`;
  return axios.get(url);
};

// @desc Get Contact With Contact ID
// @route GET http://localhost:3000/contact/:contactId
export const getContact = (contactId) => {
  const url = `${SERVER_URL}/contact/${contactId}`;
  return axios.get(url);
};

// @desc  Get All Groups
// @route GET http://localhost:3000/groups
export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups`;
  return axios.get(url);
};

// @desc  Get Group Name With Group ID
// @route GET http://localhost:3000/groups/:groupId
export const getGroup = (groupId) => {
  const url = `${SERVER_URL}/groups/${groupId}`;
  return axios.get(url);
};

// @desc  Create New Contact
// @route POST http://localhost:3000/contact
export const createContact = (contact) => {
  const url = `${SERVER_URL}/contact`;
  return axios.post(url, contact);
};

// @desc  Update Contact
// @route PUT http://localhost:3000/contact/:contactId
export const updateContact = (contact, contactId) => {
  const url = `${SERVER_URL}/contact/${contactId}`;
  return axios.put(url, contact);
};

// @desc  Delete Contact
// @route DELETE http://localhost:3000/contact/:contactId
export const deleteContact = (contactId) => {
  const url = `${SERVER_URL}/contact/${contactId}`;
  return axios.delete(url);
};
