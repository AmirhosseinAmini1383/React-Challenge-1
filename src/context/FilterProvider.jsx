import { createContext, useContext, useState } from "react";

const StatusFilterContext = createContext();
function FilterProvider({ children }) {
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("created_desc");
  return (
    <StatusFilterContext.Provider
      value={{
        filterStatus,
        setFilterStatus,
        category,
        setCategory,
        sort,
        setSort,
      }}
    >
      {children}
    </StatusFilterContext.Provider>
  );
}

export default FilterProvider;

export function useFilter() {
  return useContext(StatusFilterContext);
}
