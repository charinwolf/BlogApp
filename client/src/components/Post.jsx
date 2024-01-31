import React from 'react'
import diabloimg from '../assets/diabloimg.jpeg'

const Post = () => {
  return (
    <div className='post'>
        <img src={diabloimg} alt='' />
        <div className="content">
        <h2>Tres juegos muy queridos de Blizzard aparecen de forma inesperada en Battle.net</h2>
        <p>Aunque la popularidad de ambas sagas ha crecido con el paso de los años, 
          son muchos los que todavía suspiran pensando en los buenos momentos que han pasado 
          con las primeras entregas de Diablo o Warcraft.</p>
        </div>
      </div>
  )
}

export default Post
