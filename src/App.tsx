import { ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/structure/Layout'

/* Pages */
import NotesPage from './pages/NotesPage'

function App(): ReactNode {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index path="notes" element={<NotesPage />} />
      </Route>
    </Routes>
  )
}

export default App
