import CenterPage from './Component/CenterPage'
import LeftPanel from './Component/LeftPanel'
import './index.css'


function App() {
  return (
    <>
    <div className="dashboard-page">
    <LeftPanel/>
    <CenterPage/>
    </div>
    </>
  )
}

export default App
