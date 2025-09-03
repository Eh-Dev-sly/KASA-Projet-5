import data from '../data/logements.json'
import '../Components/Gallery.scss'

function Gallery() {
  return (
    <div className="kasa-gallery">
        {data.map((accomodation) => (
            <div key={accomodation.id} className="kasa-gallery-card">
                <img src={accomodation.cover} alt={accomodation.title} className="card-image" />
                <div className="card-title">{accomodation.title}</div>
            </div>
        ))}
    </div>
  )
}

export default Gallery