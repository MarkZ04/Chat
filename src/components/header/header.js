import styles from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <div>Profile</div>
        <div>Conversations</div>
      </nav>

      <button>Exit</button>
    </header>
  )
}