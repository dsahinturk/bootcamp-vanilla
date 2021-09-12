import {} from "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import AppRouter from "./routing/AppRouter";

const App = () => {
  return (
    <AppWrapper>
      <AppRouter />
    </AppWrapper>
  );
}

export default App;
