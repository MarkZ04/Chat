import styles from './messages.module.css';
import { Message } from './message';

export const Messages = () => {
  return (
    <div className={styles.messages}>
      <Message />
    </div>
  )
}