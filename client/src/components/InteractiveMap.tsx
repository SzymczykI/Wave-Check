import { useEffect, useState } from "react";
import { fetchData } from "../utils/dataFetcher";
import Map, { Marker, NavigationControl } from "react-map-gl";

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
  const [maxWaveHeight, setMaxWaveHeight] = useState<number | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (coordinates) {
      fetchData(coordinates.lat, coordinates.lon)
        .then((res) =>
          res ? setMaxWaveHeight(res.toFixed(2)) : setMaxWaveHeight(null)
        )
        .catch((err) => console.log(err));
    }
  }, [coordinates]);

  const clickOnMapHandler = (event: any) => {
    setCoordinates({
      lon: event.lngLat.lng,
      lat: event.lngLat.lat,
    });
  };

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
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      onClick={clickOnMapHandler}
    >
      <NavigationControl />
      {coordinates && maxWaveHeight && (
        <>
          <Marker latitude={coordinates.lat} longitude={coordinates.lon}>
            <div className="px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700">
              <p>{maxWaveHeight}m</p>
            </div>
          </Marker>
        </>
      )}
    </Map>
  );
};

export default InteractiveMap;
