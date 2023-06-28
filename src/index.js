import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Nav from './components/Nav'
import Top3 from './components/Tops-3'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    <Nav/>
    <App/>
    <Top3/>
    <Footer/>
    </>
)
 
    