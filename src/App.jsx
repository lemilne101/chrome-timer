
import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [remaining, setRemaining] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const startTime = useRef(null)
  const duration = useRef(10)

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const newRemaining = Math.max(0, duration.current  - Math.floor(elapsed / 1000));

      setRemaining(newRemaining)

      if (newRemaining === 0) setIsRunning(false)
    }, 100)

    return () => clearInterval(interval);
  }, [isRunning]);


  const startTimer = () => {
    setRemaining(duration.current)
    startTime.current = Date.now()
    setIsRunning(true)
  }

    return (
      <main> 
        <h1>Timer</h1>

        <label>
          {remaining}
        </label>

        <button onClick={startTimer}>
          Start
        </button>

      </main>
    )
}

export default App