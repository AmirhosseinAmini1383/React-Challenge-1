import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-right text-slate-500 font-extrabold text-xl mt-10 md:mt-20">
        لیست پروژه ها
      </h1>
      <button
        onClick={() => navigate("/app")}
        className="mt-10 md:mt-32 bg-indigo-500 px-10 py-5 text-white font-extrabold rounded-xl shadow-2xl cursor-pointer"
      >
        نشان دادن پروژه ها
      </button>
    </div>
  );
}

export default Home;
