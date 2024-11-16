import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const ProjectContext = createContext();
const BASE_URL = "http://localhost:5000/project";

function ProjectsProvider({ children }) {
  const { data, isLoading } = useFetch(BASE_URL);
  return (
    <ProjectContext.Provider value={{ data, isLoading }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectsProvider;

export function useProjects() {
  return useContext(ProjectContext);
}
