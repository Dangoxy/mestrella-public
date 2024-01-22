import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route, HashRouter } from "react-router-dom";
import App from './App.jsx'
import AboutPage from './AboutPage.jsx';
import './index.css'
import DetailsPage from './DetailsPage.jsx';
import FeedbackPage from './FeedbackPage.jsx';
import SearchPage from './SearchPage.jsx';



ReactDOM.createRoot(document.getElementById('root'))
.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path= "/:type/:id" element={<DetailsPage/>}></Route>
            <Route path="feedback" element={<FeedbackPage />}></Route>
            <Route path="searchpage/:search" element={<SearchPage />}></Route>
        </Routes>
    </HashRouter>

)
