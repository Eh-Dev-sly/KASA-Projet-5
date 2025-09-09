import data from '../data/logements.json'
import '../Components/Gallery.scss'
import { Link } from "react-router-dom"

function Gallery() {
    return (
        <div className="kasa-gallery">
            {data.map((logement) => (
                <div key={logement.id} className="kasa-gallery-card">
                    <Link to={`/appartement/${logement.id}`}>
                        <img className="card-image" src={logement.cover} alt={logement.title} />
                        <h2 className="card-title">{logement.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}


export default Gallery