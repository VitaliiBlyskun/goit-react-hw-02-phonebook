const Filter = ({ value, onChange }) => {
  return (
    <label>
      Finds contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  )
};

export default Filter;
