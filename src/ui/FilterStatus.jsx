import { useStatusFilter } from "../context/StatusFilterProvider";

function FilterStatus({ options }) {
  const { filterStatus, setFilterStatus } = useStatusFilter();
  return (
    <div className="flex items-center text-slate-700">
      <div className="flex items-center bg-white rounded-lg p-1 gap-x-5 border border-gray-200 rtl">
        {options.map(({ value, label }) => {
          const isActive = value === filterStatus;
          return (
            <button
              key={value}
              className={` rounded-md px-5 py-1 transition-all duration-300 ${
                isActive ? "text-white bg-indigo-500 font-medium" : ""
              }`}
              onClick={() => setFilterStatus(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <span className="font-medium ml-4">وضعیت</span>
    </div>
  );
}
export default FilterStatus;
