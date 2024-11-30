import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Loader from "../Loader/Loader";
import { useProjects } from "../../context/ProjectsProvider";
import { useMemo } from "react";
import { useFilter } from "../../context/FilterProvider";

function Table() {
  const { data, isLoading } = useProjects();
  if (isLoading || !data) return <Loader />;
  const { filterStatus, category, sort } = useFilter();

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

  const filteredCategoryData = useMemo(() => {
    if (!category) return filteredStatusData;
    return filteredStatusData.filter(
      (item) => item.category.id === Number(category)
    );
  }, [filteredStatusData, category]);

  const sortedData = useMemo(() => {
    return [...filteredCategoryData].sort((a, b) => {
      switch (sort) {
        case "created_desc":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "created_asc":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "budget_asc":
          return a.budget - b.budget;
        case "budget_desc":
          return b.budget - a.budget;
        case "deadline_asc":
          return new Date(a.deadline) - new Date(b.deadline);
        case "deadline_desc":
          return new Date(b.deadline) - new Date(a.deadline);
        default:
          return filteredCategoryData;
      }
    });
  }, [sort, filteredCategoryData]);

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
          {sortedData.length ? (
            sortedData.map((item) => (
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
            ))
          ) : (
            <p className="text-red-400 font-bold text-sm mt-16">
              ! به نظر می رسد پروژه ای با فیلترهای انتخابی شما وجود ندارد
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
