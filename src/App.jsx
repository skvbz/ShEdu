import CenterPage from './Component/CenterPage'
import LeftPanel from './Component/LeftPanel'
import UserPanel from './Component/UserPanel'
import './index.css'


function App() {
  return (
    <>
    <div className="dashboard-page">
    <LeftPanel/>
    <CenterPage/>
    <UserPanel/>
    </div>
    </>
  )
}

export default App
