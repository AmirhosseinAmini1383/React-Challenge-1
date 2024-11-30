import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import AppLayout from "./components/AppLayout/AppLayout";
import ProjectsProvider from "./context/ProjectsProvider";
import FilterProvider from "./context/FilterProvider";

function App() {
  return (
    <ProjectsProvider>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<AppLayout />} />
        </Routes>
      </FilterProvider>
    </ProjectsProvider>
  );
}

export default App;

// const projects = [
//   {
//     _id: 1,
//     title: "طراحی اپلیکیشن سفر آنلاین",
//     description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
//     status: "CLOSED",
//     category: {
//       id: 1,
//       title: "طراحی UI/UX",
//       englishTitle: "design-ui/ux",
//     },
//     budget: 10000,
//     tags: ["Ui/UX", "Figma"],
//     deadline: "2023-12-23T12:55:48.740Z",
//     createdAt: "2023-10-23T18:18:55.636Z",
//     updatedAt: "2024-06-02T13:37:48.468Z",
//   },
//   {
//     _id: 2,
//     title: "توسعه سایت فروشگاهی",
//     description: "یک سایت فروشگاهی کامل با پنل ادمین",
//     status: "OPEN",
//     category: {
//       id: 2,
//       title: "برنامه نویسی وب",
//       englishTitle: "web development",
//     },
//     budget: 50000,
//     tags: ["React", "Nodejs", "online shop"],
//     deadline: "2023-12-23T12:55:48.740Z",
//     createdAt: "2023-10-23T18:18:55.636Z",
//     updatedAt: "2024-06-02T13:37:48.468Z",
//   },
// ];
