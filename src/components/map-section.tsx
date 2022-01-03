import { ShareSection } from "./share-section";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export const MapSection:React.FC = () => {
    return (
        <section className="page-section">
            <article style={{overflow:"hidden", borderRadius:20}}>
                <MapContainer
                    className="map" 
                    center={[0.7893, 113.9213]} 
                    zoom={5}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </article>
            <ShareSection/>
        </section>
    )
}