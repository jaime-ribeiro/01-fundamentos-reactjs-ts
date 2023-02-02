import { Header } from "./components/Header";
import { Post } from "./Post"
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post author="Jaime Ribeiro"
        content="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem voluptate qui nesciunt, quaerat hic ipsum, similique delectus doloribus, omnis officia architecto? Est dolorum temporibus veritatis praesentium iure natus eos."/>
      <Post
        author="Lucas Amador"
        content="Um novo post muito legal"
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
