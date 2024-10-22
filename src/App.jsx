import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmark = blog => {
    console.log("bookmark adding soon")
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-5xl mx-auto'>
      <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
    </div>
    </>
  )
}

export default App
