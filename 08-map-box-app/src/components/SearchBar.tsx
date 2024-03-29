import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context"
import { SearchResults } from "."

export const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext)
  const debounceRef = useRef<NodeJS.Timeout>()

  const onQueryChanged = ( event: ChangeEvent<HTMLInputElement>  ) => {
    if( debounceRef.current )
      clearTimeout( debounceRef.current );
    
    debounceRef.current = setTimeout(() => {
      console.log('debounded value:', event.target.value);
      searchPlacesByQuery(event.target.value)
    }, 1000)
  }

  return (
    <div className="search-container">
      <input 
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={ onQueryChanged }
      />
      <SearchResults />
    </div>
  )
}
