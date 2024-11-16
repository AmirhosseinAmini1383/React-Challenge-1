import { useStatusFilter } from "../../context/StatusFilterProvider";

function Header() {
  return (
    <div className="mt-10 md:mt-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-row gap-x-8">
          <CategorySelection />
          <SortDate />
          <Status />
        </div>
        <h1 className="text-right text-slate-700 font-extrabold text-xl">
          لیست پروژه ها
        </h1>
      </div>
    </div>
  );
}

export default Header;

function CategorySelection() {
  return (
    <div className="rtl">
      <select name="" id="" className="text-slate-700">
        <option value="">دسته بندی همه</option>
        <option value="">UI/UX طراحی</option>
        <option value="">برنامه نویسی وب</option>
        <option value="">سئو</option>
        <option value="">برنامه نویسی بک اند</option>
        <option value="">برنامه نویس فرانت اند</option>
      </select>
    </div>
  );
}

function SortDate() {
  return (
    <div className="rtl">
      <select name="" id="" className="text-slate-700">
        <option value="">مرتب سازی(جدید ترین)</option>
        <option value="">مرتب سازی(قدیمی ترین)</option>
      </select>
    </div>
  );
}

function Status() {
  const { filterStatus, setFilterStatus } = useStatusFilter();
  return (
    <div className="flex items-center text-slate-700">
      <div className="flex items-center bg-white rounded-lg p-1 gap-x-5 border border-gray-200">
        <button
          className={` rounded-md px-5 py-1  ${
            filterStatus === "CLOSED"
              ? "text-white bg-indigo-500 font-medium"
              : ""
          }`}
          onClick={() => setFilterStatus("CLOSED")}
        >
          بسته
        </button>
        <button
          className={` rounded-md px-5 py-1  ${
            filterStatus === "OPEN"
              ? "text-white bg-indigo-500 font-medium"
              : ""
          }`}
          onClick={() => setFilterStatus("OPEN")}
        >
          باز
        </button>
        <button
          className={` rounded-md px-5 py-1  ${
            filterStatus === "ALL" ? "text-white bg-indigo-500 font-medium" : ""
          }`}
          onClick={() => setFilterStatus("ALL")}
        >
          همه
        </button>
      </div>
      <span className="font-medium ml-4">وضعیت</span>
    </div>
  );
}
