import PropTypes from "prop-types";
import { useEffect } from "react";
import { ContactListItem } from "./ContactListItem";
import styles from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../Redux/Counter/counter-operation";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  function foundContacts() {
    const normalizeFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(normalizeFilter);
      });
    }
  }
  return (
    <ul className={styles.contact_list}>
      <ContactListItem contacts={foundContacts()} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default ContactList;
