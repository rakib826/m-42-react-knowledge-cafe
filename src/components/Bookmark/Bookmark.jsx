import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className='bg-white rounded-md my-2 mx-4'  >
      <h3 className='px-4 py-2 text-sm'>{title}</h3>
    </div>
  );
};


Bookmark.propTypes = {
  bookmark: PropTypes.object
}
export default Bookmark;