import { useContext } from 'react';
import { MapContext } from '../context/map/MapContext';
import { PlacesContext } from '../context';
export const BtnMyLocation = () => {

  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if( !isMapReady ) return;
    if( !userLocation ) return;

    map?.flyTo({
      center: userLocation,
      zoom: 16
    })
  }

  return (
    <button
      onClick={ onClick }
      className='btn btn-primary'
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1
      }}
    >
      My location
    </button>
  )
}
