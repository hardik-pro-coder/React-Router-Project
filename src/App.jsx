import './App.css'
import Form from './components/form/Form';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Site/Dashboard';
import PrivateRoutes from './components/utils/ProtectedRoutes';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Form />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route path='*' element={<Navigate to="/" replace />} />

      </Routes>
    </>
  )
}

export default App;