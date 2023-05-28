import { useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResultItem } from './SearchResultItem';
import { LoadingPlaces } from '.';

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);

  if( isLoadingPlaces) {
    return <LoadingPlaces />
  }

  if( places.length === 0 ) {
    return <></>
  }

  return (
    <ul className="list-group mt-3">
      {
        places.map((place) => <SearchResultItem key={ place.id } place={ place }/>)
      }
      
    </ul>
  )
}
