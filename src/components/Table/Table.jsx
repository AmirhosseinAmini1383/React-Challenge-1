import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Loader from "../Loader/Loader";
import { useProjects } from "../../context/ProjectsProvider";
import { useMemo } from "react";
import { useStatusFilter } from "../../context/StatusFilterProvider";

function Table() {
  const { data, isLoading } = useProjects();
  if (isLoading || !data) return <Loader />;
  const { filterStatus } = useStatusFilter();

  const filteredStatusData = useMemo(() => {
    switch (filterStatus) {
      case "ALL": {
        return data;
      }
      case "OPEN": {
        return data.filter((d) => d.status === "OPEN");
      }
      case "CLOSED": {
        return data.filter((d) => d.status === "CLOSED");
      }
      default:
        return data;
    }
  }, [data, filterStatus]);

  return (
    <div>
      <table className="w-full mt-14">
        <thead>
          <tr className="grid grid-cols-6 rtl mb-4 text-slate-700 font-medium">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {filteredStatusData.map((item) => (
            <tr
              key={item._id}
              className="grid grid-cols-6 rtl bg-white py-4 border border-gray-200 text-slate-700 text-sm font-medium"
            >
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.budget}</td>
              <td>
                {new Date(item.deadline).toLocaleDateString("fa-IR", {
                  year: "numeric",
                  month: "numeric",
                  day: "2-digit",
                })}
              </td>
              <td>
                <span
                  className={`text-white px-3 py-1 rounded-3xl ${
                    item.status === "CLOSED" ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {item.status === "CLOSED" ? "بسته" : "باز"}
                </span>
              </td>
              <td className="flex flex-1 justify-center">
                <ClipboardDocumentListIcon className="w-6 h-6 text-gray-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
