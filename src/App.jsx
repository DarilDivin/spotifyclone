import { Bibliotheque, Navbar } from './components'
import './index.css'

const App = () => {

  return (
    <div className="w-full h-full bg-black flex flex-col gap-2 p-2.5">
      <div className="w-full h-[89%] flex flex-row gap-2">
        <div className="h-full w-[28%] flex flex-col gap-2">
          <Navbar />
          <Bibliotheque />
        </div>
      </div>
    </div>
  )
}

export default App
