import PropTypes from 'prop-types';

const Dropdown = ({ selectedPlace, setSelectedPlace }) => {
    const handleChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    Dropdown.propTypes = {
        selectedPlace: PropTypes.string.isRequired,
        setSelectedPlace: PropTypes.func.isRequired,
      };

    return (
        <select value={selectedPlace} onChange={handleChange}>
            <option value="hospital">Hospital</option>
            <option value="police">Delegacia</option>
            <option value="school">Escola</option>
            <option value="restaurant">Restaurante</option>
            <option value="bank">Banco</option>
        </select>
    );
};

export default Dropdown;