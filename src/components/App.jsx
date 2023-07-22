import { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImagesSerch } from 'api/images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getImagesSerch(query, page);
        const { hits, totalHits } = data;

        setImages(prevImages => [...prevImages, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / 12));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const onSubmitForm = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const modalClose = () => {
    setModalVisible(false);
  };

  const clickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = selectedImage => {
    setSelectedImage(selectedImage);
    setModalVisible(true);
  };

  const showButton = images.length > 0;

  return (
    <div>
      <Searchbar onSubmit={onSubmitForm} />
      {showButton && (
        <ImageGallery images={images} onClick={handleImageClick} />
      )}

      {isLoading && <Loader />}
      {!isLoading && showButton && loadMore && (
        <Button onClick={clickLoadMore} />
      )}
      {modalVisible && <Modal image={selectedImage} onClose={modalClose} />}
    </div>
  );
};

export default App;
