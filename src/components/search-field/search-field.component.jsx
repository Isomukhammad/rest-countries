import styles from './search-field.module.scss';

const SearchField = (props) => {
    const {placeholder, setSearch, theme} = props;

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    return ( 
        <div className = {styles.div}>
            <input 
                type="text" 
                placeholder={placeholder}
                onChange = {handleChange}
                style = { theme === 'dark' ? 
                    {
                        boxShadow: '0 5px 5px rgb(35, 35, 35)',
                        backgroundColor: '#333',
                        color: '#FFF'
                    }
                    : null   
                }    
            />
        </div>
    )
}
 
export default SearchField;