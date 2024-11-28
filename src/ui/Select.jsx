function Select({ value, options, onChange }) {
  console.log(options);

  return (
    <div className="rtl">
      <select value={value} className="text-slate-700" onChange={onChange}>
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
