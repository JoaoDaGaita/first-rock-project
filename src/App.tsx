import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./index.css"

const posts = [
  {
    id: "1",
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "João Vicente",
      role: "Web Developer",
    },
    content: [{ type: "paragraph", content: "Fala Galera" }],
    publishedAt: new Date("2023-10-04 20:00:00"),
  },
  {
    id: "2",
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Senior Full Stack Developer",
    },
    content: [{ type: "link", content: "Fala Galera 2" }],
    publishedAt: new Date("2023-10-04 21:00:00"),
  },
]

export function App() {
  return (
    <div className="">
      <Header />
      <div
        className="max-w-70 md2:grid-cols-min640max767 mx-auto my-8 
                    px-8 gap-8 grid grid-cols-sidebar items-start"
      >
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
