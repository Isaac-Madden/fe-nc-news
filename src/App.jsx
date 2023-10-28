import './CSS/App.css'

import { Header } from './Components/Header'
import { NavigationBar } from './Components/NavigationBar'

import { Home } from './Components/HomeComponents/Home'
import { UserProfile } from './Components/UserProfileComponents/UserProfile'
import { ListOfArticles } from './Components/ArticleComponents/FullListOfArticles'
import { SingleArticle } from './Components/ArticleComponents/SingleArticle'

import { Route, Routes } from "react-router-dom";
import { PageNotFound } from './Components/ErrorComponents/PageNotFound'
import { TopicNotFound } from './Components/ErrorComponents/TopicNotFound'



function App() {

  return (
    <>
    <Header />
    <NavigationBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/userprofile" element={<UserProfile />} />
    <Route path="/articles" element={<ListOfArticles />} />
    <Route path="/articles/:article_id" element={<SingleArticle />} />
    <Route path="/articles/topic/:topic_name/:article_id" element={<SingleArticle />} />
    <Route path="/articles/topic/*" element={<TopicNotFound />} />
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App
