import { MovieCard } from './js/components/movieCard.jsx'
import Header from './js/components/Header.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main style={{display: "flex"}}>
        <MovieCard title="Duna: Parte Dos" />
        <MovieCard title="Kung Fu Panda 4" />
        <MovieCard title="Intensamente 2" />
        <MovieCard title="Furiosa: A Mad Max Saga" />
        <MovieCard title="Deadpool & Wolverine" />
      </main>
    </>
  )
}

export default App
