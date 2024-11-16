import { createContext, useContext, useState } from "react";

const StatusFilterContext = createContext();
function StatusFilterProvider({ children }) {
  const [filterStatus, setFilterStatus] = useState("ALL");
  return (
    <StatusFilterContext.Provider value={{ filterStatus, setFilterStatus }}>
      {children}
    </StatusFilterContext.Provider>
  );
}

export default StatusFilterProvider;

export function useStatusFilter() {
  return useContext(StatusFilterContext);
}
