import React from 'react'
import diabloimg from '../assets/diabloimg.jpeg'

const Post = () => {
  return (
    <div className='post'>
      <div className="image">
        <img src={diabloimg} alt='' />
      </div>
      <div className="texts">
          <h2>Tres juegos muy queridos de Blizzard aparecen de forma inesperada en Battle.net</h2>
          <p className="info">
            <a className="author">RLCH</a>
            <time>2024-02-01 12:09</time>
          </p>
          <p className='summary'>Aunque la popularidad de ambas sagas ha crecido con el paso de los años, 
            son muchos los que todavía suspiran pensando en los buenos momentos que han pasado 
            con las primeras entregas de Diablo o Warcraft.</p>
      </div>
    </div>
  )
}

export default Post
