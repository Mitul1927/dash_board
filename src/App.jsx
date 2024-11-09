import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Chat from "../components/Chat";
import Liveclass from "../components/liveclass";
import Myaccount from "../components/myaccount";
import Mycourses from "../components/mycourses";
import Notify from "../components/notify";
import Schedule from "../components/schedule";
import Students from "../components/students";
import Dashboard from "../components/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/chat", element: <Chat /> },
      { path: "/liveclass", element: <Liveclass /> },
      { path: "/myaccount", element: <Myaccount /> },
      { path: "/mycourses", element: <Mycourses /> },
      { path: "/notify", element: <Notify /> },
      { path: "/schedule", element: <Schedule /> },
      { path: "/students", element: <Students /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
