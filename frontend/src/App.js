import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Books from './components/Books'
import PrivateRoute from './Hoc/Privaterouter'
import ProtectedRoutes from './Hoc/protectedRouters'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoutes>
                <Login />
              </ProtectedRoutes>
            }
            exact
          />
          <Route
            path='/books'
            element={
              <PrivateRoute>
                <Books />
              </PrivateRoute>
            }
            exact
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
