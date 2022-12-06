import { useState } from 'react'


function App() {
  const [result, setResult] = useState(0)
  const style = {
    app: {
      backgroundColor: 'black',
      width: '500px',
      height: '700px',
      display: 'flex',
      margin: '0 auto',
      marginTop: '50px',
      flexDirection: 'column',
      alignItems: 'center',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px'
      
    },
    output: {
      width: '450px',
      height: '70px',
      color: 'red',
      backgroundColor: 'white',
      textAlign: 'center',
      fontSize: '30px',
      display: 'flex',
      justifyContent: 'center',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
      width: '450px',
      // backgroundColor: 'blue'
    },
    button: {
      fontSize: '30px',
      color: 'red',
      width: '50px',
      height: '50px',
      backgroundColor: 'white',
      border: '1px solid red',
      cursor: 'pointer'
    }
  }

  return (
    <div className="App" style={style.app}>
      <div className="container" style={style.container}>
        <output type="text" style={style.output}>{result}</output>
      </div>
      <div className="buttons" style={style.buttons}>

        <button style={style.button}>1</button>

      </div>
    </div>
  )
}

export default App
