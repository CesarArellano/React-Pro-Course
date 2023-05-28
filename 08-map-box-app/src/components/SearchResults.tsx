import { useContext, useState } from 'react';
import { PlacesContext } from '../context';
import { SearchResultItem } from './SearchResultItem';
import { LoadingPlaces } from '.';
import { MapContext } from '../context/map/MapContext';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);

  const [activeId, setActiveId] = useState('');
  const { map } = useContext(MapContext);

  const onPlacedCliked = ( place: Feature ) => {
    const [ lng, lat ] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [ lng, lat ]
    })
    setActiveId(place.id)
  }


  if( isLoadingPlaces) {
    return <LoadingPlaces />
  }

  if( places.length === 0 ) {
    return <></>
  }

  return (
    <ul className="list-group mt-3">
      {
        places.map((place) => (
          <SearchResultItem 
            key={ place.id }
            place={ place }
            activeId={ activeId }
            onPlacedCliked={ onPlacedCliked }
          />
        ))
      }
      
    </ul>
  )
}
