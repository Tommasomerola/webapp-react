import HomePage from "./pages/HomePage"
import FilmPage from "./pages/FilmPage"

import DefaultLayout from "./layouts/DefaultLayout"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
              <Route index path="/" element={<HomePage/>} />
              <Route path="/film/:id" element={<FilmPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
