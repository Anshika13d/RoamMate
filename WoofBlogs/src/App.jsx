
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  

  return (
    <>
    {data.map((e, ind) => {
      return (
        <Home key={ind} data={e} />
      )
    })}
    </>
  )
}

export default App
