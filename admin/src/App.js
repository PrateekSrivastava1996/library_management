import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import BooksList from './components/BooksList'
import Rented_BooksList from './components/Rented_BooksList'
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
            path='/dashboard'
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path='/dashboard/BooksList'
            element={
              <PrivateRoute>
                <BooksList />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path='/dashboard/rented_booksList'
            element={<Rented_BooksList />}
            exact
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
