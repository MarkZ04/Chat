import { ChatList } from "./chatList";
import { InputMessage } from "./inputMessage";
import { Messages } from "./messages";
import styles from './content.module.css';

export const Content = () => {
  return (
    <main>
      <ChatList />
      <div className={styles.chat}>
        <Messages />
        <InputMessage />
      </div>
    </main>
  )
}