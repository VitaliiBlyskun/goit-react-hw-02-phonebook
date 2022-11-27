// import PropTypes from 'prop-types';

export const ContactList = ({ list }) => {
  <div>
    <ul>
        {list.map(item => <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.number}</p>
        </li>)}
    </ul>
  </div>;
};

