import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import CreateTask from "./components/CreateTask"
import TaskDetails from "./components/TaskDetails"
import UpdateTask from "./components/UpdateTask"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/tasks/update/:id" element={<UpdateTask />} />
      </Routes>
    </>
  )
}

export default App
