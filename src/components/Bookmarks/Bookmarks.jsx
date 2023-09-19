import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-4 bg-gray-300 mt-2">
      <div className="ml-4">
        <h3 className="text-2xl">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-3xl pl-4 mt-4">
        Bookmarked Blogs:{bookmarks.length}
      </h2>

      {bookmarks.map(bookmark => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
