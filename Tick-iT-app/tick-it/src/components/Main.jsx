import Home from './Home'
import {Route, Routes} from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <h1>This is Main Component</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}