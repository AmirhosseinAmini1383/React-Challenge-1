import { useFilter } from "../context/FilterProvider";

function FilterStatus({ options }) {
  const { filterStatus, setFilterStatus } = useFilter();
  return (
    <div className="flex items-center text-slate-700">
      <span className="font-medium ml-4">وضعیت</span>
      <div className="flex items-center bg-white rounded-lg p-1 gap-x-5 border border-gray-200">
        {options.map(({ value, label }) => {
          const isActive = value === filterStatus;
          return (
            <button
              key={value}
              className={` rounded-md px-5 py-1 transition-all duration-300 ${
                isActive ? "text-white bg-primary-900 font-medium" : ""
              }`}
              onClick={() => setFilterStatus(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default FilterStatus;
