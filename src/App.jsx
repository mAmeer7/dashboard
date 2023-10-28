import { useMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Topbar from './pages/global/Topbar'
import Sidebar from './pages/global/Sidebar';
import Dashboard from "./pages/dashboard";
import Calendar from './pages/calender/Calender'
import Team from "./pages/teams/Team";
import Contact from "./pages/contacts/Contact";
import Invoice from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <div className="searchbox">
          <Topbar/>
          </div>
         
          </div>
          <main className="content">
          
          <Routes>
            <Route path="/" element={<Dashboard/>}/>

            <Route path="/team" element={<Team/>}/>
            <Route path="/contacts" element={<Contact/>}/>
            <Route path="/invoice" element={<Invoice/>}/>
            <Route path="/form" element={<Form/>}/>
            {/* <Route path="/bars" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/lines" element={<Line/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/geography" element={<Geography/>}/>  */}
            <Route path="/calendar" element={<Calendar/>}/>
          </Routes>
          </main>
   
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
