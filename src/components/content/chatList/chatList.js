import styles from './chatList.module.css';
import { Chat } from './chat';

export const ChatList = () => {
  return (
    <div className={styles.chatList}>
      <Chat />
    </div>
  )
}