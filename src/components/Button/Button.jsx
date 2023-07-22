import '../../styles.css';
import { BiSolidDownload } from 'react-icons/bi';
import PropTypes from 'prop-types';
export const Button = ({ onClick }) => {
  return (
    <div className="Container-button">
      <button className="Button" onClick={onClick}>
        <BiSolidDownload size={30} color="white" />
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
