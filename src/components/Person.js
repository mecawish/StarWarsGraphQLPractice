import React from 'react'

function Person({ url, gender, name, homeworld, height, mass, eye_color, hair_color, skin_color }) {
  return (
    <div style={{ flex: '1 0 300px' }}>
      <div style={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
        padding: '24px'
      }}>
        <h1 style={{
          fontSize: '14px',
          margin: '8px 0'
        }}>{name} -  {gender}</h1>
        <p>
          Height: {height}, Mass: {mass}, Skin: {skin_color}
        </p>
        <p>
          Eye Color: {eye_color}, Hair: {hair_color}
        </p>
        <p>
          <a href={homeworld}>View Homeworld</a>
        </p>
        <p>
          <a href={url}>View More</a>
        </p>
      </div>
    </div>
  )
}

export default Person