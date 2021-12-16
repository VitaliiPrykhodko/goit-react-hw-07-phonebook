import PropTypes from "prop-types";
import styles from "./Filter.module.css"
import { useSelector } from "react-redux";

const Filter = ({ handleFilter }) => {
  const filter = useSelector((state)=>state.contacts.filter)
    return (
        <div className={styles.filter_box}>
             <label className={styles.filter_label}>
        Find contacts by name
        <input
          onChange={handleFilter}
          value={filter}
          className={styles.input_filter}
          type="text"
        />
      </label>
        </div>
       
    )
}

Filter.propTypes = {
    handleFilter: PropTypes.func.isRequired
}

export default Filter