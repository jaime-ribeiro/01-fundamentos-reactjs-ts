import { Header } from "./components/Header";
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Jaime Ribeiro"
            content="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem voluptate qui nesciunt, quaerat hic ipsum, similique delectus doloribus, omnis officia architecto? Est dolorum temporibus veritatis praesentium iure natus eos."/>
          <Post
            author="Lucas Amador"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
