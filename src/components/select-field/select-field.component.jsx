import { useEffect, useState } from 'react';
import styles from './select-field.module.scss';

const SelectField = ({region, setRegion, theme}) => {
    const [open, setOpen] = useState(false);

    const onChangeHandler = (e) => {
        if(e.target.innerHTML !== 'All'){
            setRegion(e.target.innerHTML);
        } else setRegion('');
    }
    const onClickHandler = () => setOpen(!open);

    useEffect(() => {
        console.log(open)
    }, [open])

    return(
        <div  
            className={styles.div}
            onClick={onClickHandler}
            style = { theme === 'dark' ? 
                {
                    boxShadow: '0 5px 5px rgb(35, 35, 35)'
                }
                : null   
            }
        >
            {region ? <p>{region}</p> : <p>&#x27F1; Filter by region...</p>}
            
            <div 
                style = { open ? 
                {
                    display: 'flex'
                } : {
                    display: 'none'
                }}
            >
                <div 
                    className ={styles.menu} 
                    style = { theme === 'dark' ? 
                    {
                        boxShadow: '0 5px 5px rgb(35, 35, 35)',
                        backgroundColor: '#333',
                        color: '#FFF'
                    }
                    : null   
                }>
                <div onClick={e => onChangeHandler(e)}>All</div>
                <div onClick={e => onChangeHandler(e)}>Africa</div>
                <div onClick={e => onChangeHandler(e)}>America</div>
                <div onClick={e => onChangeHandler(e)}>Asia</div>
                <div onClick={e => onChangeHandler(e)}>Europe</div>
                <div onClick={e => onChangeHandler(e)}>Oceania</div>
                </div>
            </div>
        </div>
    )
}

export default SelectField;