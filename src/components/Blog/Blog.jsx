import PropTypes from 'prop-types';

import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark,handleReadingTime}) => {
  const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
  
  
  
  
  return (
    <div className='my-10 '>
      <img className='rounded-md w-full' src={cover} alt={`Cover picture of the title ${title}`} />
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center my-4'>
          <img className='rounded-full h-10 w-10 object-cover' src={author_img} alt="" />
          <div>
            <h3 className='text-gray-700 font-semibold'> {author} </h3>
            <p className='text-xs text-gray-500'> {posted_date} </p>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <span className='text-xs text-gray-400'>{reading_time} min read</span>
          <button 
          onClick={()=>handleAddToBookmark(blog)} 
          className='text-orange-500'> <FaBookmark></FaBookmark> </button>
        </div>
      </div>
      <h2 className='text-2xl font-semibold text-gray-800'>{title}</h2>
      <p className='my-4'>
        {
          hashtags.map((hashtag,idx)=><span className='text-gray-500' key={idx}><a className='pr-2' href=''> {hashtag} </a></span>)
        }
      </p>
      <button 
      onClick={()=>handleReadingTime(reading_time)}
      className='text-xs text-purple-700 font-semibold underline'>Mark as read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func
}
export default Blog;