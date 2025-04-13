import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/filters/selectors';

export default function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);
  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (
          <Contact key={contact.id} item={contact} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
