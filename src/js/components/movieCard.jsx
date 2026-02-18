import '../../css/components/movieCard.css'
import Button from './Button.jsx'

export function MovieCard({ title }){
    return (
        <div className="movie-card">
            <h3>{title}</h3>
            <Button text="Ver horarios" />
        </div>
    )
}
