import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';



import { mainNavbarItems } from './components/Navbar/consts/navbarItems';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={dashboardTheme}>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<App />}>
                    {mainNavbarItems.map((item, index) => (
                        <Route key={item.id} path={item.route} element={item.element} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
