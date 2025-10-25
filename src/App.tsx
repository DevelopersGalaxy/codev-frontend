import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="flex gap-4 items-center mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-12" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-12" alt="React logo" />
        </a>
        <h1 className="text-2xl font-semibold">Vite + React + Tailwind</h1>
      </div>

      <div className="card p-6 bg-gray-100 dark:bg-slate-800 rounded-lg shadow-md">
        <button
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
