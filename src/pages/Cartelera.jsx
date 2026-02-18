import MovieCard from "../components/MovieCard"

function Cartelera({ cambiarVista, seleccionarPelicula }) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
        gap: "16px",
        padding: "16px"
      }}
    >
      <MovieCard
        title="Shingeki No Kyojin: The Final Season"
        image="https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Shingeki No Kyojin: The Final Season",
            image: "https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg",
            sinopsis: "La humanidad vive encerrada dentro de tres enormes murallas debido a los Titanes, gigantescas criaturas humanoides que devoran personas. En esta temporada final, Eren Jaeger desata un plan radical que pondrá en peligro tanto a enemigos como aliados."
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="El Menú"
        image="https://m.media-amazon.com/images/S/pv-target-images/5c1cd8ffc76417c344acaafe878a45950e2fb4ca2bb72bc2d4e09df58c46c5d9.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "El Menú",
            image: "https://m.media-amazon.com/images/S/pv-target-images/5c1cd8ffc76417c344acaafe878a45950e2fb4ca2bb72bc2d4e09df58c46c5d9.jpg",
            sinopsis: "Una joven pareja viaja a una isla remota para cenar en un exclusivo restaurante dirigido por un famoso chef. Pero el lujoso menú esconde oscuros y sorprendentes secretos que convertirán la velada en una experiencia aterradora."
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="Interstellar"
        image="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Interstellar",
            image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            sinopsis: "En un futuro donde la Tierra se vuelve inhabitable, un grupo de astronautas cruza un agujero de gusano para encontrar un nuevo hogar para la humanidad."
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="Coco"
        image="https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Coco",
            image: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
            sinopsis: "Miguel, un nino que suena con ser musico, viaja accidentalmente a la Tierra de los Muertos y descubre la historia de su familia."
          })
          cambiarVista("detalle")
        }}
      />
    </main >
  )
}

export default Cartelera

