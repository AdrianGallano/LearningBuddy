import { ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/structure/Layout'
import { Navigate } from 'react-router-dom'

/* Pages */
import NotesPage from './pages/NotesPage'

function App(): ReactNode {
  return (
    <Routes>
      <Route path="/" element={<Layout />}  >
        <Route index path="" element={<Navigate to="notes" />} />
        <Route path="notes" element={<NotesPage />} />
      </Route>
    </Routes>
  )
}

export default App
