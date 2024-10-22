import PropTypes from 'prop-types';
const Blog = ({blog}) => {
  const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
  return (
    <div>
      <img className='rounded-md' src={cover} alt={`Cover picture of the title ${title}`} />
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-end'>
          <img className='rounded-full h-10 w-10 object-cover' src={author_img} alt="" />
          <div>
            <h3 className='text-gray-700 font-semibold'> {author} </h3>
            <p className='text-xs text-gray-500'> {posted_date} </p>
          </div>
        </div>
        <div>
          <span className='text-xs text-gray-400'>{reading_time} min read</span>
        </div>
      </div>
      <h2 className='text-3xl text-gray-800'>{title}</h2>
      <p>
        {
          hashtags.map((hashtag,idx)=><span className='text-gray-500' key={idx}><a className='pr-2' href=''> {hashtag} </a></span>)
        }
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog;