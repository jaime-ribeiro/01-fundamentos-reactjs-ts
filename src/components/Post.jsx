import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/13546394?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Jaime Ribeiro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="03 de Fevereiro ás 08:13h" dateTime="2023-02-03 08:13:30">Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉&nbsp;&nbsp;<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}

                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                    placeholder='Deixe o seu comentário'
                />
                <footer>
                    <button type='Submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}