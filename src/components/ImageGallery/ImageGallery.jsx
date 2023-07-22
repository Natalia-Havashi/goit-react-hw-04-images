import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import '../../styles.css';
export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};
