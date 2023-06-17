import logo from './logo.svg';
import './App.css';
import { Dashboard } from "./Module/Dashboad/index";
import DrawerAppBar from './Layout/Header';
import { createTheme, ThemeProvider } from "@mui/material/styles";


function App() {
   const theme = createTheme({
     typography: {
       fontFamily:  'Josefin Sans, sans-serif',
     },
   });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <DrawerAppBar />
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
