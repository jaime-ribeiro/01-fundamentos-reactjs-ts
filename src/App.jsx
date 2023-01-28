import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post author="Jaime Ribeiro" 
      content="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem voluptate qui nesciunt, quaerat hic ipsum, similique delectus doloribus, omnis officia architecto? Est dolorum temporibus veritatis praesentium iure natus eos."/>
      <Post
        author="Lucas Amador"
        content=""
      />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
