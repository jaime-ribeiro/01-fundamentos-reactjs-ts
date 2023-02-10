import { Header } from "./components/Header";
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jaime-ribeiro.png',
      name: 'Jaime Ribeiro',
      role: 'JS Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉& nbsp;& nbsp; jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/AmadorZcv.png',
      name: 'Lucas Amador',
      role: 'Elixir Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉& nbsp;& nbsp; jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-04 23:11:40'),
  }
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
