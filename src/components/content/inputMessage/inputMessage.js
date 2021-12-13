import styles from './inputMessage.module.css';

export const InputMessage = () => {
  return (
    <div className={styles.messageContainer}>
      <input placeholder='You message...' />
      <button>Send</button>
    </div>
  )
}