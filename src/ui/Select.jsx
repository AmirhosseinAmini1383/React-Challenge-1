function Select({ value, options, onChange }) {
  return (
    <div>
      <select
        value={value}
        className=" p-1.5 text-slate-700"
        onChange={onChange}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
