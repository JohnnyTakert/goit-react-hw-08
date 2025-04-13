import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {error && (
        <p style={{ textAlign: 'center', color: 'red' }}>Ошибка: {error}</p>
      )}
      <SearchBox />
      <ContactList />
    </>
  );
}
