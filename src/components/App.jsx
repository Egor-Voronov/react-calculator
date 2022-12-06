import { useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
  const style = {
    app: {
      backgroundColor: 'black',
      width: '500px',
      height: '700px',
      display: 'flex',
      margin: '0 auto',
      marginTop: '50px'
    }
  }

  return (
    <div className="App" style={style.app}>
      <div className="container"></div>
    </div>
  )
}

export default App
