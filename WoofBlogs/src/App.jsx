<<<<<<< Updated upstream
=======
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> Stashed changes

function App() {
  let data = {
    
    dog1:{
      name:"dollar",
      img: "https://images.pexels.com/photos/8473445/pexels-photo-8473445.jpeg?auto=compress&cs=tinysrgb&w=800",
      age: 4,
      des:"This dog is the pet of ujjwal shrivastava"
    },

  }

  return (
    <>
<<<<<<< Updated upstream
      <h1>hello</h1>
=======
      <Home  data={data}/>
>>>>>>> Stashed changes
    </>
  )
}

export default App
