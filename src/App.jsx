import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)
  }
  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time)
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-5xl mx-auto gap-4'>
      <Blogs 
      handleAddToBookmark = {handleAddToBookmark}
      handleReadingTime = {handleReadingTime}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
