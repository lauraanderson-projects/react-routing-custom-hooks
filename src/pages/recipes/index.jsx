import { useLocation } from "react-router-dom";

function RecipeList() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Recipe List</h1>
      <p>Here you can find a list of delicious recipes.</p>
    </div>
  );
}

export default RecipeList;
