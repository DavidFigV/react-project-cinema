function Header({ cambiarVista }) {
  return (
    <header
      style={{
        width: "100%",          // Ocupa TODO el ancho de la pantalla
        boxSizing: "border-box",
        backgroundColor: "#e15615",
      }}
    >
      {/* Contenedor interno para ordenar contenido */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}
      >

        <h1 style={{ margin: 0 }}>CinePrueba</h1>

        <nav
          style={{
            display: "flex",
            gap: "24px"
          }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() => cambiarVista("home")}
          >
            Inicio
          </span>

          <span
            style={{ cursor: "pointer" }}
            onClick={() => cambiarVista("cartelera")}
          >
            Cartelera
          </span>

          <span
            style={{ cursor: "pointer" }}
            onClick={() => cambiarVista("comida")}
          >
            Comida
          </span>

          <span
            style={{ cursor: "pointer" }}
            onClick={() => cambiarVista("otro")}
          >
            Otros
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Header