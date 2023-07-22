import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImagesSerch } from 'api/images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    modalVisible: false,
    selectedImage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });

      try {
        const data = await getImagesSerch(query, page);
        const { hits, totalHits } = data;
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          isLoading: false,
          loadMore: page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false });
      }
    }
  }
  onSubmitForm = query => {
    this.setState({ query, images: [], page: 1 });
  };

  modalClose = () => {
    this.setState({ modalVisible: false });
  };

  clickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = selectedImage => {
    this.setState({ selectedImage, modalVisible: true });
  };
  render() {
    const { images, isLoading, loadMore, modalVisible, selectedImage } =
      this.state;
    const showButton = images.length > 0;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery images={images} onClick={this.handleImageClick} />

        {isLoading && <Loader />}
        {showButton && loadMore && <Button onClick={this.clickLoadMore} />}
        {modalVisible && (
          <Modal image={selectedImage} onClose={this.modalClose} />
        )}
      </div>
    );
  }
}
