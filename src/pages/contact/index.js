import { connect } from "react-redux";
import { default as Contact } from "./Contact";
import { setContactName, setContactEmail, setContactMessage, sendContact } from "../../store";

const mapStateToProps = state => ({
    name: state.contact.name,
    email: state.contact.email,
    message: state.contact.message,
    error: state.contact.error,
    isLoading: state.contact.isLoading,
});

const mapDispatchToProps = dispatch => ({
    setContactName: name => dispatch(setContactName(name)),
    setContactEmail: email => dispatch(setContactEmail(email)),
    setContactMessage: message => dispatch(setContactMessage(message)),
    sendContact: () => dispatch(sendContact())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
