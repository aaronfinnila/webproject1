import { useState } from 'react'
import bananaImage from '/assets/bananas.png'
import starImage from '/assets/star.png'

const App = () => {

  const bars = [
     {
      name: 'Jolene',
      drinks: [
        {
          name: 'Ananaslonkero',
          price: '5e'
        },
        {
          name: 'Karhu',
          price: '3e'
        }
      ],
      reviews: [
        {
          name: 'Aaron',
          rating: 3
        },
        {
          name: 'Kasper',
          rating: 4
        }
      ]
    },
    {
      name: 'Calle',
      drinks: [
        {
          name: 'Ananaslonkero',
          price: '5e'
        },
        {
          name: 'Valkovenalainen',
          price: '9e'
        }
      ],
      reviews: [
        {
          name: 'Aaron',
          rating: 5
        },
        {
          name: 'Kasper',
          rating: 4
        },
        {
          name: 'Ville',
          rating: 1
        }
      ]
    }
  ]

  return (
    <div>
      <h1 id="header1">Banana</h1>
      <img src={bananaImage} alt="banana" width="300" id="bananaimg"/>
      <div className="bar-container">
        {bars.map(bar => <Bar bar1={bar} key={bar.name}/>)}
      </div>
    </div>
  )
}

const Bar = (props) => {
  return (
    <div>
      <Header bar1={props.bar1} />
      <Rating bar1={props.bar1} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h2>{props.bar1.name}</h2>
    </div>
  )
}

const Rating = (props) => {
  return (
    <div className="Rating">
      <p className="rating-text">{props.bar1.reviews.map(review => review.rating).reduce((total, current) => total + current)/props.bar1.reviews.length}</p>
      <img src={starImage} alt="star" className="rating-img"/>
    </div>
  )
}

export default App