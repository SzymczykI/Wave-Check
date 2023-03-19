import { useEffect, useState } from "react";
import { fetchData } from "../utils/dataFetcher";
import Map, { NavigationControl } from "react-map-gl";

interface Coordinates {
  lon: number;
  lat: number;
}

const InteractiveMap = () => {
  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [viewport, setViewport] = useState({
    longitude: 10,
    latitude: 20,
    zoom: 2,
  });
  const [maxWaveHeight, setMaxWaveHeight] = useState(0);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (coordinates) {
      fetchData(coordinates.lat, coordinates.lon)
        .then((res) => setMaxWaveHeight(res))
        .catch((err) => console.log(err));
    }
  }, [coordinates]);

  const clickOnMapHandler = (event: any) => {
    setCoordinates({
      lon: event.lngLat.lng,
      lat: event.lngLat.lat,
    });
  };

  console.log(maxWaveHeight);

  return (
    <Map
      {...viewport}
      mapboxAccessToken={token}
      initialViewState={{
        longitude: 10,
        latitude: 20,
        zoom: 2,
      }}
      onMove={(next) => setViewport(next.viewState)}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onClick={clickOnMapHandler}
    >
      <NavigationControl />
    </Map>
  );
};

export default InteractiveMap;
