import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { deleteContact } from '../../redux/operations';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const deleteUsers = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(item => (
        <Contact key={item.id} item={item} onDelete={deleteUsers} />
      ))}
    </ul>
  );
};
