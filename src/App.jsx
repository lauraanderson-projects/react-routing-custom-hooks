import { Routes, Route, useNavigate, Link } from "react-router-dom";
import "./App.css";
import RecipeList from "./pages/recipes";
import CommentsList from "./pages/comments";
import RecipeDetails from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>React routing, Custom hooks and more</h1>

      <div>
        <Link to={"/recipes"}>Alt Recipes</Link>
      </div>
      <button
        onClick={() => navigate("/recipes")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Recipes
      </button>
      <button
        onClick={() => navigate("/comments")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Comments
      </button>
      <Routes>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/comments" element={<CommentsList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
