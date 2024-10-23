import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className='md:w-1/3  mt-10'>
      <div className='bg-sky-50 py-1 mb-4 rounded-md border-2 border-sky-200'>
        <h2 className='text-sm font-semibold text-center my-4'>Reading Time: {readingTime} min</h2>
      </div>
      <div className='bg-slate-200 h-96 overflow-y-auto rounded-md'>
        <h2 className='text-xl font-semibold text-center my-4'>Bookmarks: {bookmarks.length}</h2>
        {
          bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
        }
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}

export default Bookmarks