import { Feature } from "../interfaces/places"

interface Props {
  place: Feature
}

export const SearchResultItem = ({ place }: Props) => {
  return (
    <li className="list-group-item list-group-item-action">
      <h6>{ place.text_es }</h6>
      <p 
        className="text-muted"
        style={{
          fontSize: '12px'
        }}
      >
        { place.place_name }
      </p>
      <button className="btn btn-outline-primary btn-sm">
        Direcciones
      </button>
    </li>
  )
}
