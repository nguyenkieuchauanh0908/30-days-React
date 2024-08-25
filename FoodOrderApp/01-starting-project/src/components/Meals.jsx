import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    err,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching data...</p>;
  }
  if (!loadedMeals) {
    return <p>No meals found...</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
