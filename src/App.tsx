import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './index.css'

export function App() {
  return (
    <div>
      <Header />
      <div className="max-w-[1440px] ml-40 mt-8 p-4 gap-8 grid grid-cols-sidebar items-start">
        <Sidebar />
        <main>
          <Post author={'awdawdwad'} content={'waddwad'} />
          <Post author={'awdawdwad'} content={'waddwad'} />
        </main>
      </div>
    </div>
  )
}

export default App
