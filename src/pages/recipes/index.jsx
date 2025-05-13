import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

function RecipeList() {
  const location = useLocation();
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>Recipe List</h1>
      <p>Here you can find a list of delicious recipes.</p>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div>
                <img src={recipeItem?.image} alt={recipeItem?.name} />
                <br />
                <label>{recipeItem?.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default RecipeList;
