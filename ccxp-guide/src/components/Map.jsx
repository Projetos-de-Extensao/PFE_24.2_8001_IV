<<<<<<< HEAD
import  { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 1d71936659ede52e34f0fd6c03046f59615bdec5
import Dropdown from './Dropdown';
import MapView from './MapView';

function Map() {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState('hospital');
    const [places, setPlaces] = useState([]);

    // Obter a localização do usuário
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation({
                        lat: -23.6460103,
                        lon: -46.6296564,
                    });
                },
                () => alert('Não foi possível obter a localização.')
            );
        }
    }, []);

    // Buscar locais próximos usando Overpass API
    useEffect(() => {
        if (userLocation) {
            const fetchPlaces = async () => {
                const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="${selectedPlace}"](around:3000,${userLocation.lat},${userLocation.lon});out;`;
                const response = await fetch(url);
                const data = await response.json();
                setPlaces(data.elements || []);
            };
            fetchPlaces();
        }
    }, [userLocation, selectedPlace]);

    return (
        <div>
            <h1>Encontre Locais Próximos</h1>
            <Dropdown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
            {userLocation && <MapView userLocation={userLocation} places={places} />}
        </div>
    );
}

export default Map;