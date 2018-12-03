import React from 'react';
import Film from './Film'

class FilmList extends React.Component {

  render(){
    const filmNodes = this.props.data.map(film =>{
      return (
        <Film
        key={film.id}>
        <a href={film.url}>{film.name}</a>
        </Film>
      )
    })

// <a [href]="{{item.wish}}">somelink</a>
// `string text ${expression} string text`

    return (
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }
}

export default FilmList;
