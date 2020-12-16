import { CONTACT } from "./action-types";

const clearcontact = () => ({
    type: CONTACT.CLEAR
});

const setContactError = error => ({
    type: CONTACT.LOAD_FAILED,
    error
});

const sendContact = () => ({
    type: CONTACT.SEND_CONTACT,
});

const setContactName = name => ({
    type: CONTACT.SET_CONTACT_NAME,
    name
});

const setContactEmail = email => ({
    type: CONTACT.SET_CONTACT_EMAIL,
    email
});

const setContactMessage = message => ({
    type: CONTACT.SET_CONTACT_MESSAGE,
    message
});

export { clearcontact, setContactError, sendContact, setContactName, setContactEmail, setContactMessage };
