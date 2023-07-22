import { MagnifyingGlass } from 'react-loader-spinner';
import '../../styles.css';
export const Loader = () => {
  return (
    <div className="Loader-container">
      <div className="Loader">
        <MagnifyingGlass
          visible={true}
          height="150"
          width="150"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    </div>
  );
};
