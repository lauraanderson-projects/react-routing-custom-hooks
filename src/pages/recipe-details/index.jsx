import { useParams } from "react-router-dom";

function RecipeDetails() {
  const parms = useParams();
  console.log(parms);
  const { id } = parms;

  return (
    <div>
      <h1>Recipe Details of {id}</h1>
      <p>Details about the selected recipe will be displayed here.</p>
    </div>
  );
}
export default RecipeDetails;
