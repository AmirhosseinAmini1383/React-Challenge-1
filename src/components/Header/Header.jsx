import { useState } from "react";
import FilterStatus from "../../ui/FilterStatus";
import Select from "../../ui/Select";
import { useProjects } from "../../context/ProjectsProvider";

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

const sortOptions = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "created_desc",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "created_asc",
  },
  {
    label: "قیمت (صعودی)",
    value: "budget_asc",
  },
  {
    label: "قیمت (نزولی)",
    value: "budget_desc",
  },
  {
    label: "ددلاین (صعودی)",
    value: "deadline_asc",
  },
  {
    label: "ددلاین (نزولی)",
    value: "deadline_desc",
  },
];

function Header() {
  const { data } = useProjects();
  const [category, setCategory] = useState(1);
  const [sort, setSort] = useState("created_desc");

  const uniqueCategories = Array.from(
    new Set(data.map((project) => JSON.stringify(project.category)))
  ).map((category) => {
    const parsedCategory = JSON.parse(category);
    return {
      label: parsedCategory.title,
      value: parsedCategory.id,
    };
  });

  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }

  function handleChangeSort(e) {
    setSort(e.target.value);
  }
  
  return (
    <div className="mt-10 md:mt-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-row gap-x-8">
          <Select
            options={sortOptions}
            value={sort}
            onChange={handleChangeSort}
          />
          <Select
            options={uniqueCategories}
            value={category}
            onChange={handleChangeCategory}
          />
          <FilterStatus options={statusOptions} />
        </div>
        <h1 className="text-right text-slate-700 font-extrabold text-xl">
          لیست پروژه ها
        </h1>
      </div>
    </div>
  );
}

export default Header;

// function CategorySelection() {
//   return (
//     <div className="rtl">
//       <select name="" id="" className="text-slate-700">
//         <option value="">دسته بندی همه</option>
//         <option value="">UI/UX طراحی</option>
//         <option value="">برنامه نویسی وب</option>
//         <option value="">سئو</option>
//         <option value="">برنامه نویسی بک اند</option>
//         <option value="">برنامه نویس فرانت اند</option>
//       </select>
//     </div>
//   );
// }
