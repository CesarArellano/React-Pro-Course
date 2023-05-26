import { useReducer, useEffect } from 'react';
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from '../../helpers';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [ number, number ],
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

  useEffect(() => {
    getUserLocation()
      .then((lgnLat) => dispatch({ type: 'setUserLocation', payload: lgnLat }))
  }, [])
  

  return (
    <PlacesContext.Provider value={{
      ...state
    }} >
      { children }
    </PlacesContext.Provider>
  )
}
