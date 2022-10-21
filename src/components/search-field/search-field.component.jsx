import styles from './search-field.module.scss';

const SearchField = (props) => {
    const {placeholder, setSearch} = props;

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    return ( 
        <div className = {styles.div}>
            <input 
                type="text" 
                placeholder={placeholder}
                onChange = {handleChange}
            />
        </div>
    )
}
 
export default SearchField;