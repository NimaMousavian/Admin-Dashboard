import { useRoutes } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";
import { ThemeProvider, createTheme } from "@mui//material/styles";
import theme from "./mui";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar>
          <SideBar>{router}</SideBar>
        </NavBar>
      </ThemeProvider>
    </>
  );
}

export default App;
