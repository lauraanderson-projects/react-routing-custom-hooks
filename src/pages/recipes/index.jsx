import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

//uselocalstorage
//useCounter
//useSessinStorage
//useId
//useOutsideClick

function RecipeList() {
  const location = useLocation();
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  const windowSize = useWindowResize();

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1 style={{ color: windowSize.width < 900 ? "red" : "black" }}>
        Recipe List
      </h1>
      <p>
        Window Size: {windowSize.width} x {windowSize.height}
      </p>
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
