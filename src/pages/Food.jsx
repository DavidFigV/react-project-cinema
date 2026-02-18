// Importamos la tarjeta reutilizable
import MovieCard from "../components/MovieCard"

function Food({ cambiarVista, seleccionarPelicula }) {
  const categorias = [
    {
      nombre: "Bebidas",
      items: [
        {
          title: "Refresco",
          image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
          detalle: {
            title: "Coca-Cola",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg",
            sinopsis: "Bebida gaseosa fria, ideal para acompanar la funcion."
          }
        },
        {
          title: "Cafe",
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
          detalle: {
            title: "Cafe americano",
            image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
            sinopsis: "Cafe caliente para funciones tempranas o clima frio."
          }
        }
      ]
    },
    {
      nombre: "Comestibles",
      items: [
        {
          title: "Palomitas",
          image: "https://www.gastronosfera.com/sites/default/files/styles/wide/public/trending/2023/palomitas.jpg.webp",
          detalle: {
            title: "Palomitas acarameladas",
            image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/93135B2C-F156-4D48-B07A-6D51D73545A3/Derivates/c229f6d2-ffef-47a1-82e7-f5d48bea13f1.jpg",
            sinopsis: "Clasico para el cine, crujiente y dulce."
          }
        },
        {
          title: "Nachos",
          image: "https://tofuu.getjusto.com/orioneat-local/resized2/F86QHm58mQPvPzSZh-1890-x.webp",
          detalle: {
            title: "Nachos con queso",
            image: "https://tb-static.uber.com/prod/image-proc/processed_images/eb9f220871e7677fb407b92bade03a77/a19bb09692310dfd41e49a96c424b3a6.jpeg",
            sinopsis: "Totopos crujientes con salsa de queso caliente."
          }
        }
      ]
    },
    {
      nombre: "Snacks o dulces",
      items: [
        {
          title: "Dulces",
          image: "https://preview.redd.it/whats-your-go-to-candy-to-bring-to-buy-at-a-movie-theater-v0-bnja1b8vjgde1.jpeg?auto=webp&s=0a8b56987039cc5ff965e960271e92f375b5c68a",
          detalle: {
            title: "Crunch",
            image: "https://www.laranitadelapaz.com.mx/images/thumbs/0008565_chocolate-crunch-6-barras-de-40-g-ieps-inc_625.jpeg",
            sinopsis: "Chocolate con arroz inflado para un snack rapido."
          }
        },
        {
          title: "Gomitas",
          image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=900&q=80",
          detalle: {
            title: "Gomitas surtidas",
            image: "https://cdn.pixabay.com/photo/2013/08/10/18/13/candies-171342_640.jpg",
            sinopsis: "Mezcla de gomitas dulces y aciditas."
          }
        }
      ]
    }
  ]

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
      {categorias.map((categoria) => (
        <section key={categoria.nombre} style={{ marginBottom: "24px" }}>
          <h2 style={{ marginBottom: "12px", textAlign: "left" }}>{categoria.nombre}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px"
            }}
          >
            {categoria.items.map((item) => (
              <MovieCard
                key={item.title}
                title={item.title}
                image={item.image}
                onVerDetalle={() => {
                  seleccionarPelicula(item.detalle)
                  cambiarVista("detalle")
                }}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

// Exportamos la vista
export default Food
