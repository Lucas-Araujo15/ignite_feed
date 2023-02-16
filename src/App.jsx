import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App () {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Lucas Araujo'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam sint laborum mollitia voluptas eum, voluptate rerum id dolor cupiditate deserunt, iusto possimus ipsam! Quisquam consequatur odio a tempore sunt.'
          />
          <Post author='Antonio Araujo' content='Um novo post muito legal' />
        </main>
      </div>
    </div>
  )
}
