import { useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import styles from './Notification.module.css';

const Notification = () => {
    const { message } = useContext(FeedbackContext);

    return (
        <p className={styles.notification}>{message}</p>
    );
};

export default Notification;