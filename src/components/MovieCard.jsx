// Importamos el botón reutilizable
import Button from "./Button"

// Tarjeta de pelicula reutilizable
function MovieCard({ title, image, onVerDetalle }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden", // Oculta lo que se salga del contenedor
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      {/* Imagen de la pelicula */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover" // Mantiene preporción sin deformar
        }}
      />

      {/* Contenido de la tarjeta */}
      <div style={{ padding: "12px", textAlign: "center" }}>
        <h3>{title}</h3>
        
        {/* Botón que permite ir a la vista de detalle */}
        <Button text="Ver detalle" onClick={onVerDetalle} />
      </div>
    </div>
  )
}

// Exportamos el componente
export default MovieCard