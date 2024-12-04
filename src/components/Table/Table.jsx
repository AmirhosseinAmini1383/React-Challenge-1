import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Loader from "../Loader/Loader";
import { useProjects } from "../../context/ProjectsProvider";
import { useMemo } from "react";
import { useFilter } from "../../context/FilterProvider";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import toLocalDateShort from "../../utils/toLocalDateShort";

function Table() {
  const { data, isLoading } = useProjects();
  if (isLoading || !data) return <Loader />;
  const { filterStatus, category, sort } = useFilter();

  const handleSort = (a, b) => {
    switch (sort) {
      case "created_desc":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "created_asc":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "budget_asc":
        return a.budget - b.budget;
      case "budget_desc":
        return b.budget - a.budget;
      case "deadline_asc":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case "deadline_desc":
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      default:
        return filteredProjects;
    }
  };

  const filteredProjects = data
    .filter((p) => (filterStatus === "ALL" ? true : p.status === filterStatus))
    .filter((p) =>
      category === "ALL" ? true : p.category.englishTitle === category
    )
    .sort(handleSort);

  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <table className="w-full mt-14 font-medium">
        <thead>
          <tr className="mb-4">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>تاریخ ایجاد</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr
              key={project._id}
              className="bg-white py-4 border border-gray-200 "
            >
              <td>{project._id}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocalDateShort(project.createdAt)}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tags) => (
                    <span className="badge badge--secondary" key={tags}>
                      {tags}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td className="flex flex-1 justify-center">
                <ClipboardDocumentListIcon className="w-6 h-6 text-gray-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!filteredProjects.length && (
        <p className="text-red-400 font-bold text-sm mt-16">
          به نظر می رسد پروژه ای با فیلترهای انتخابی شما وجود ندارد !
        </p>
      )}
    </div>
  );
}

export default Table;
