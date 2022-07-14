
import './App.css';
import axiosClient from './axios/axios';
function App() {
  async function test(){
  let prueba = await axiosClient.get()
  console.log('a', prueba.data)
}
  return (
    <div className="App">
     <h1>budget api </h1>
      <p>hola</p>
      <button onClick= {test}>prueba</button>
    </div>
  );
}

export default App;
