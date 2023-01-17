import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/phonebookSlice";

export const ContactList = () => {

  const phonebook = useSelector(state => state.phonebook);
  const filter = useSelector(state=> state.filter)
  const dispatch = useDispatch()

  return phonebook.filter(contact => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  }).map(contact => {
    return (
      <li className="contact" key={contact.id}>
        {contact.name} {contact.number}
        <button data-index={contact.id} key={contact.id} onClick={(e)=> dispatch(deleteContact(e.currentTarget.dataset.index))}>
          Delete
        </button>
      </li>
    );
  });
};
