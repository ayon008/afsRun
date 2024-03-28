/* eslint-disable react/jsx-key */
import { DirectionsService, GoogleMap, InfoWindow, Marker, MarkerClusterer, Polyline, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import dark from '../../Js/MapStyles';
import svg from '../../assets/20180616145918!Light_Blue_Circle.svg';
import clust from '../../assets/20180616145918!Light_Blue_Circle - Copy.svg';
import '../Map/Map.css';
import logo from '../../assets/Foil.svg'
import Ellipse from '../../assets/Ellipse 2.svg'
// import { convertDecimalToDMS, meterToKm } from '../js/utilities';
// import haversine from 'haversine-distance';
import circle from '../../assets/return.svg';
import { useLocation } from 'react-router-dom';
// import { gpx } from '@tmcw/togeojson'

const Map = () => {
    const location = useLocation();
    const pathName = location?.pathname;

    // Maps Style 
    const mapStyles = {
        height: `${pathName === '/discover' ? '80vh' : '100vh'}`,
        width: '100%',
        borderRadius: `${pathName === '/discover' ? '10px' : '0px'}`,
    };

    // Focused Pont In map
    const [defaultCenter, setDefaultCenter] = useState({
        lat: 48.8566,
        lng: 16.3830,
    });

    // MapLoader with api
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCLJx7EASIc2pOjiQApyAvo1FyeZcjtBLQ',
    })

    const [selected, setSelected] = useState(null);
    const [distance, setDistance] = useState(null);
    const [map, setMap] = useState(null);
    const [showPolyline, setShowPolyline] = useState(false);
    const [zoom, setZoom] = useState(5);
    const [carDistance, setCarDistance] = useState(null);

    const onLoad = (map) => {
        setMap(map);
    }

    const onZoomChanged = () => {
        const currentZoom = map.getZoom();
        // Set your desired zoom level
        const desiredZoomLevel = 10;
        setShowPolyline(currentZoom >= desiredZoomLevel);
    }

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchGpxData = async () => {
            try {
                const response = await fetch('http://localhost:5000/allRuns');
                const data = await response.json();
                setData(data)
            } catch (error) {
                console.error('Error loading GPX file:', error);
            }
        };
        fetchGpxData();
    }, [])

    console.log(data);

    useEffect(() => {
        if (map) {
            map.addListener('zoom_changed', onZoomChanged);
        }
    }, [map]);

    console.log(selected);

    // const [find, setFind] = useState(null)
    // const origin = find?.location[0];
    // const destination = find?.location[find?.location?.length - 1];

    // const onMarkerClicked = (marker) => {
    //     const find = allRuns.find(r => r.name.includes(marker.name) === true);
    //     const find2 = allRuns.find(r => r.name.includes(marker.name) === true);

    //     if (find) {
    //         setSelected(find)
    //         setDistance(meterToKm(haversine(find?.location[0], find.location[find?.location?.length - 1])))
    //         setFind(find)
    //     }
    //     else if (find2) {
    //         setSelected(find2)
    //         setDistance(meterToKm(haversine(find?.location[0], find.location[find?.location?.length - 1])))
    //         setFind(find2)
    //     }
    //     setDefaultCenter(marker?.location)
    //     setZoom(10);
    //     console.log(marker);
    // }

    // const directionsCallback = (result, status) => {
    //     if (status === 'OK') {
    //         const legs = result.routes[0].legs;
    //         const totalDistance = legs.reduce((acc, leg) => acc + leg.distance.value, 0);

    //         // Convert distance from meters to kilometers
    //         const distanceInKm = totalDistance / 1000;

    //         setCarDistance(distanceInKm.toFixed(2));
    //     } else {
    //         console.error(`Directions request failed due to ${status}`);
    //     }
    // };

    const close = () => {
        setSelected(null)
    }
    console.log(selected);
    return (
        <div>
            {
                isLoaded && (
                    <GoogleMap options={{
                        styles: dark,
                        mapTypeControl: false,
                        zoomControl: false,
                        streetViewControl: false,
                        fullscreenControl: false
                    }}
                        mapContainerStyle={mapStyles}
                        zoom={zoom}
                        center={defaultCenter}
                        onLoad={onLoad}
                    >

                        {/* <DirectionsService
                                options={{
                                    destination: destination,
                                    origin: origin,
                                    travelMode: 'DRIVING',
                                }}
                                callback={directionsCallback}
                            /> */}

                        {/* <MarkerClusterer
                                options={{
                                    imagePath: 'https://i.ibb.co/F6syggQ/Blue-Circle-Transparent.png',
                                    styles: [{
                                        textColor: 'white',
                                        url: clust, // Customize cluster icon
                                        height: 50,
                                        width: 50,
                                    }]
                                }}>
                                {
                                    (clusterer) => markers.map((p, i) => {
                                        return (
                                            <>
                                                <Marker key={i} options={{ icon: i < startPoints.length - 1 ? svg : circle }} clusterer={clusterer} position={p.location}
                                                    onClick={() => onMarkerClicked(p)}
                                                />
                                            </>
                                        )
                                    })
                                }
                            </MarkerClusterer> */}

                        {
                            selected &&
                            <InfoWindow className='relative' position={{
                                lat: selected.geometry.coordinates[0][1],
                                lng: selected.geometry.coordinates[0][0],
                            }}>
                                <div className='px-3'>
                                    <button className='absolute top-0 right-1 text-white' onClick={() => close()}>X</button>
                                    <div className='mt-2 flex justify-between items-center gap-20'>
                                        <h1 className='text-white lg:text-2xl text-base font-bold'></h1>
                                        <div className='bg-[#1D98FF] p-2 rounded-full'>
                                            <img src={logo} alt="" />
                                        </div>
                                    </div>
                                    <div className='text-white my-5'>
                                        <div className='flex items-start gap-3'>
                                            <img className='w-[10px] h-[10px] mt-1' src={svg} alt="" />
                                            <div>
                                                <p className='lg:text-xl text-sm font-semibold'>{selected.properties.name}</p>
                                                {/* <div className='flex items-center gap-3 text-[#999999]'>
                                                    <p>{`${convertDecimalToDMS(selected.location[0].lat)}N`}</p>
                                                    <p>{`${convertDecimalToDMS(selected.location[0].lng)}W`}</p>
                                                </div> */}
                                            </div>
                                        </div>
                                        <svg style={{ marginLeft: '2px' }} xmlns="http://www.w3.org/2000/svg" width="4" height="58" viewBox="0 0 4 58" fill="none">
                                            <path opacity="0.6" d="M2 0V58" stroke="#1D98FF" strokeWidth="3" strokeDasharray="6 6" />
                                        </svg>
                                        <div className='flex items-start gap-3 mt-2'>
                                            <img className='w-[10px] h-[10px] mt-1' src={Ellipse} alt="" />
                                            <div>
                                                {/* <p className='lg:text-xl text-sm font-semibold'>{selected.location[selected.location.length - 1].name}</p> */}
                                                {/* <div className='flex items-center gap-3 text-[#999999]'>
                                                    <p>{`${convertDecimalToDMS(selected.location[selected.location.length - 1].lat)}N`}</p>
                                                    <p>{`${convertDecimalToDMS(selected.location[selected.location.length - 1].lng)}W`}</p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex items-center justify-between mb-5'>
                                        <div className='mt-3'>
                                            <p className='text-[#999999] lg:text-lg text-base font-bold'>Distance</p>
                                            <h3><span className='lg:text-2xl text-sm text-white font-bold'>{distance}</span> <span className='text-[#999999] lg:text-lg text-sm font-semibold'>Km</span></h3>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='text-[#999999] lg:text-lg text-base font-bold'>Distance by car</p>
                                            <h3><span className='lg:text-2xl text-sm text-white font-bold'>{carDistance}</span> <span className='text-[#999999] lg:text-lg text-sm font-semibold'>Km</span></h3>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </InfoWindow>
                        }
                        
                        {
                            data.map(geoJSON => {
                                return (
                                    <div>
                                        <div>
                                            {geoJSON &&
                                                geoJSON.features.map((feature, index) => {
                                                    return (
                                                        <div>
                                                            <Polyline
                                                                key={index}
                                                                path={feature.geometry.coordinates.map(coord => ({
                                                                    lat: coord[1],
                                                                    lng: coord[0],
                                                                }))}
                                                                options={{
                                                                    strokeColor: '#1D98FF',
                                                                    strokeOpacity: 0,
                                                                    icons: [
                                                                        {
                                                                            icon: {
                                                                                path: 'M 0,-1 0,1',
                                                                                strokeOpacity: 1,
                                                                                scale: 4,
                                                                            },
                                                                            offset: '0',
                                                                            repeat: '20px',
                                                                        },
                                                                    ],
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                        <div>
                                            <MarkerClusterer
                                                options={{
                                                    imagePath: 'https://i.ibb.co/F6syggQ/Blue-Circle-Transparent.png',
                                                    styles: [{
                                                        textColor: 'white',
                                                        url: clust, // Customize cluster icon
                                                        height: 50,
                                                        width: 50,
                                                    }]
                                                }}>
                                                {
                                                    (clusterer) => geoJSON.features.map((feature, index) => {
                                                        return (
                                                            <div>
                                                                <Marker
                                                                    key={index}
                                                                    icon={svg}
                                                                    clusterer={clusterer}
                                                                    onClick={() => setSelected(feature)}
                                                                    position={{
                                                                        lat: feature.geometry.coordinates[0][1],
                                                                        lng: feature.geometry.coordinates[0][0],
                                                                    }}
                                                                />
                                                                <Marker
                                                                    key={index}
                                                                    icon={circle}
                                                                    clusterer={clusterer}
                                                                    onClick={() => setSelected(feature)}
                                                                    position={{
                                                                        lat: feature.geometry.coordinates[feature?.geometry?.coordinates.length - 1][1],
                                                                        lng: feature.geometry.coordinates[feature.geometry.coordinates.length - 1][0],
                                                                    }}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </MarkerClusterer>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <MarkerClusterer
                            options={{
                                imagePath: 'https://i.ibb.co/F6syggQ/Blue-Circle-Transparent.png',
                                styles: [{
                                    textColor: 'white',
                                    url: clust, // Customize cluster icon
                                    height: 50,
                                    width: 50,
                                }]
                            }}>
                            {
                                (clusterer) => geoJSON.features.map((feature, index) => {
                                    return (
                                        <>
                                            <Marker key={i} options={{ icon: i < startPoints.length - 1 ? svg : circle }} clusterer={clusterer} position={p.location}
                                                onClick={() => onMarkerClicked(p)}
                                            />
                                        </>
                                    )
                                })
                            }
                        </MarkerClusterer> */}


                    </GoogleMap>
                )
            }
        </div>
    )
}

export default Map;