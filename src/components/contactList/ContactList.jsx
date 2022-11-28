// import PropTypes from 'prop-types';

const ContactList = ({ list, onDelete }) => {
  <div>
    <ul>
        {list.map(item => <li key={item.id}>
            <p>{item.name + ":"}</p>
            <p>{item.number}</p>
            <button
              type="button"
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Delete
            </button>
        </li>)}
    </ul>
  </div>;
};

export default ContactList


