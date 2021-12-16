import PropTypes from "prop-types";
import { ContactListItem } from "./ContactListItem"
import styles from "./ContactsList.module.css"

const ContactList = ({ contacts}) => {
    return (
        <ul className={styles.contact_list}>
                    <ContactListItem
                        contacts={contacts}
                    />
          </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
}
export default ContactList