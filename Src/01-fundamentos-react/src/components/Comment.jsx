import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
    <Avatar hasBorder={false}
      src="https://github.com/diego3g.png"
    />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Diego Fernandes</strong>
            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
          </div>

          <button title="Deletar comentário">

          </button>
        </header>

        <p>{content}</p>
      </div>

      <footer>
        <button>
          Aplaudir  <span>28</span>
        </button>
      </footer>
    </div>
  </div>
  )
}