import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const mapStyles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
}

function MapContainer({google}){
    return (
        <Map 
            google={google}
            zoom={17}
            style={mapStyles}
            initialCenter={{lat: 30.013677, lng: 31.199575}}
        >
            
            <Marker position={{lat: 30.013677, lng: 31.199575}} />
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCnbWuXPyPuSehqGiMTVFdXNMtITZdmCw4"
})(MapContainer)