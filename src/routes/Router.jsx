import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllIssues from "../pages/AllIssues";
import AddIssue from "../pages/AddIssue";
import MyIssues from "../pages/MyIssues";
import MyContribution from "../pages/MyContribution";
import IssueDetails from "../pages/IssueDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/issues", element: <AllIssues /> },
      { path: "/add-issue", element: <AddIssue /> },
      { path: "/my-issues", element: <MyIssues /> },
      { path: "/my-contribution", element: <MyContribution /> },
      { path: "/issue/:id", element: <IssueDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
