import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error: err,
  } = useHttp("http://localhost:3000/mealss", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching data...</p>;
  }

  if (err) {
    return <Error message={err} title="Failed to fetch data!" />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
