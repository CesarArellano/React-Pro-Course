import { PlacesContext } from "../context";
import { MapContext } from "../context/map/MapContext";
import { Feature } from "../interfaces/places"
import { useContext } from 'react';
interface Props {
  place: Feature,
  activeId: string,
  onPlacedCliked: ( place: Feature ) => void
}

export const SearchResultItem = ({ place, activeId, onPlacedCliked }: Props) => {
  
  const { userLocation } = useContext(PlacesContext)
  const { getRouteBetweenPoints } = useContext(MapContext)

  const getRoute = () => {
    if( !userLocation ) return;
    const [ lng, lat ] = place.center;
    getRouteBetweenPoints(userLocation!, [ lng, lat ])
  }

  return (
    <li 
      className={ `${ activeId === place.id && 'active' } list-group-item list-group-item-action pointer` }
      onClick={ () => onPlacedCliked(place) }
    >
      <h6>{ place.text_es }</h6>
      <p
        style={{
          fontSize: '12px'
        }}
      >
        { place.place_name }
      </p>
      <button 
        className={ `btn btn-sm ${ activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary' }` }
        onClick={ getRoute }
      >
        Direcciones
      </button>
    </li>
  )
}
