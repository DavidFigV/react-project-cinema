// Importamos la tarjeta reutilizable
import MovieCard from "../components/MovieCard"

function Otros({ cambiarVista }) {
  return (
    <main
      style={{
        maxWidth: "1200px", // Controla el ancho en pantallas grandes
        margin: "0 auto",   // Centra el contenido
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      <MovieCard
        title="Promociones"
        image="https://placehold.co/900x600?text=Promociones"
        onVerDetalle={() => cambiarVista("")}
      />

      <MovieCard
        title="Membresías"
        image="https://placehold.co/900x600?text=Membresias"
        onVerDetalle={() => cambiarVista("")}
      />

      <MovieCard
        title="Preventas"
        image="https://placehold.co/900x600?text=Preventas"
        onVerDetalle={() => cambiarVista("")}
      />
    </main>
  )
}

// Exportamos la vista
export default Otros
