import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './wrong-page.module.scss';

const WrongPage = () => {
    const [timer, setTimer] = useState(3000)
    const navigate = useNavigate();

    useEffect(() => {
        setInterval(() => {
            setTimer(timer - 1000);
        }, 1000);

        setTimeout(() => {
            navigate('/');
        }, 3000)
    })
    return(
        <div className= {styles.div}>
            There is no such country! We will redirect you to main page after {timer/1000} seconds!
        </div>
    )
}

export default WrongPage;