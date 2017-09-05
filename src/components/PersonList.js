import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Person from './Person'

const query = gql`
  {
    people {
      url
      homeworld
      height
      skin_color
      birth_year
      eye_color
      hair_color
      gender
      name
      mass
    }
   }
`

const PeopleContainer = graphql(query)

let PeopleList = function PeopleList({ data }) {
  return (
    <div
      style={{
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          flexWrap: 'wrap',
          display: 'flex',
        }}
      >
        {
          data.loading ? (
            <p>People will be here soon</p>

          ) : (
            data.people.map((person, index) => {
              return <Person key={index} {...person} />
            })
          )
        }
      </div>
    </div>
  );
};

PeopleList = PeopleContainer(PeopleList)

export default PeopleList