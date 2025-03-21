import { useRef, useEffect, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = () => {
  const { options, onLeaveFeedback } = useContext(FeedbackContext);

  const btnRefs = useRef([]);

  useEffect(() => {
    console.log('Buttons refs: ', btnRefs.current);
  })

  return (
    <div>
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          ref={elem => (btnRefs.current[index] = elem)}
          className={styles.button}
          onClick={() => {
            console.log('Button clicked:', option);
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;