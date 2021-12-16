import Form from "./Form/Form.js";
import ContactList from "./Contacts/ContactsList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import actions from './Redux/Counter/counter-action';

function App() {
  const contacts = useSelector((state)=> state.contacts.items)
  const filter = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch()

  function handleFilter(e) {
    const { value } = e.currentTarget;
    dispatch(actions.changeFilter(value))
  }

  function foundContacts() {
    const normalizeFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(normalizeFilter);
      });
    }
  }

  function handleAddContact(name, number) {
    if (
      contacts.find((contact) => {
        return contact.name === name || contact.number === number;
      })
    )
      return alert(`${name} is already in contacts`);

    if (name === "" || number === "") return alert("Please enter correct name");
    else {

      dispatch(actions.addContact(name, number))
    }
  }

  return (
    <div className={styles.App}>
      <h1>Phonebook</h1>
      <Form onClick={handleAddContact} />
      <h2 className="contact_title">Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList
        contacts={foundContacts()}
      />
      </div>
  );
}

export default App;
