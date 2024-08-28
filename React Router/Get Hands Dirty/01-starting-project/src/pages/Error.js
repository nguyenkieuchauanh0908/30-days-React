import MainNavigation from "../components/MainNavigation";
import classes from "../pages/Root.module.css";
export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}
