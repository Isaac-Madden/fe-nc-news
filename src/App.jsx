import './App.css'

import { Header } from './Components/Header'
import { NavigationBar } from './Components/NavigationBar'

import { Home } from './Components/Home'
import { UserProfile } from './Components/UserProfile'
import { ListOfArticles } from './Components/FullListOfArticles'
import { SingleArticle } from './Components/ArticleComponents/SingleArticle'

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Header />
    <NavigationBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/userprofile" element={<UserProfile />} />
    <Route path="/viewarticles" element={<ListOfArticles />} />
    <Route path="/viewarticles/:article_id" element={<SingleArticle />} />
    </Routes>
    </>
  )
}

export default App
