import '../../styles.css';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <li className="ImageGalleryItem" onClick={handleClick}>
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
