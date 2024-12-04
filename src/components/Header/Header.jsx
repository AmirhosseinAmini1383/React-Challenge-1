import { useState } from "react";
import FilterStatus from "../../ui/FilterStatus";
import Select from "../../ui/Select";
import { useProjects } from "../../context/ProjectsProvider";
import { useFilter } from "../../context/FilterProvider";

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
  const { category, setCategory, sort, setSort } = useFilter();

  const categories = data.map((p) => {
    return {
      label: p.category.title,
      value: p.category.englishTitle,
    };
  });

  const filteredCategories = categories.filter(
    (obj1, index, self) =>
      self.findIndex((obj2) => obj2.value === obj1.value) === index
  );

  const transformedCategory = [
    {
      value: "ALL",
      label: "دسته بندی (همه)",
    },
    ...filteredCategories,
  ];

  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }

  function handleChangeSort(e) {
    setSort(e.target.value);
  }

  return (
    <div className="mt-10 md:mt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-right text-slate-700 font-extrabold text-xl">
          لیست پروژه ها
        </h1>
        <div className="flex items-center flex-row gap-x-8">
          <FilterStatus options={statusOptions} />
          <Select
            options={transformedCategory}
            value={category}
            onChange={handleChangeCategory}
          />
          <Select
            options={sortOptions}
            value={sort}
            onChange={handleChangeSort}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
