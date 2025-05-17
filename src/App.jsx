import { Routes, Route, useNavigate, Link, useRoutes } from "react-router-dom";
import "./App.css";
import RecipeList from "./pages/recipes";
import CommentsList from "./pages/comments";
import RecipeDetails from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReactHookForm from "./pages/react-hook-form-example";
import Hooks from "./pages/hooks";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "recipes", element: <RecipeList /> },
        { path: "comments", element: <CommentsList /> },
        { path: "recipes/:id", element: <RecipeDetails /> },
        { path: "react-hook-form", element: <ReactHookForm /> },
        { path: "hooks", element: <Hooks /> },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return element;
}

function App() {
  const navigate = useNavigate();

  return (
    <div>
      {/*<h1>React routing, Custom hooks and more</h1>

      <div>
        <Link to={"/home/recipes"}>Alt Recipes</Link>
      </div>
      <button
        onClick={() => navigate("/home/recipes")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Recipes
      </button>
      <button
        onClick={() => navigate("/home/comments")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Comments
      </button>*/}
      {/*<Routes>
        <Route path="/" element={<Layout />}>
          <Route path="recipes" element={<RecipeList />} />
          <Route path="comments" element={<CommentsList />} />
          <Route path="recipes/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>*/}
      <CustomRoutes />
    </div>
  );
}

export default App;
