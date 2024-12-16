import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VideoUpload from './components/VideoUpload'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex justify-center py-9">
      <h1 className='text-5xl font-extrabold text-gray-700 dark:text-gray-100' >
        Welcome to video STREAMING App
      </h1>

    </div>

        <VideoUpload />
    </>
  )
}

export default App
