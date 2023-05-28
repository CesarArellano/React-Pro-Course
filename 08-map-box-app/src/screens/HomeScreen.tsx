import { BtnMyLocation, MapView, ReactLogo } from "../components"
import { SearchBar } from '../components/SearchBar';

export const HomeScreen = () => {
  return (
    <>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </>
  )
}
