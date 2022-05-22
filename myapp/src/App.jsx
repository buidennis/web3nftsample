import { useState } from 'react'
import './App.css'
import Install from './components/Install';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  if (window.ethereum) {
    return <Home />;
  } else {
    return <Install />
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
