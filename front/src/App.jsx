import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Hanat from './pages/Hanat'
import Navbar from './components/Navbar'

const App = () => {

  const bars = [
     {
      name: 'Jolene',
      hours: [
          '12-02',
          '12-02',
          '12-02',
          '12-02',
          '12-04',
          '12-04',
          '12-02',
      ],
      drinks: [
        {
          name: 'Ananaslonkero',
          price: '5€'
        },
        {
          name: 'Karhu',
          price: '3€'
        },
        {
          name: 'Kelkka',
          price: '5€'
        }
      ],
      reviews: [
        {
          name: 'Aaron',
          rating: 3,
          text: 'Its a pretty good bar, just kind of expensive'
        },
        {
          name: 'Kasper',
          rating: 4,
          text: 'Good place to get drunk.'
        }
      ]
    },
    {
      name: 'Calle',
      hours: [
        'suljettu',
        'suljettu',
        '22-04',
        'suljettu',
        '23-04',
        '23-04',
        'suljettu',
    ],
      drinks: [
        {
          name: 'Ananaslonkero',
          price: '5€'
        },
        {
          name: 'Valkovenalainen',
          price: '9€'
        }
      ],
      reviews: [
        {
          name: 'Aaron',
          rating: 5,
          text: 'Best place in Kokkola! 5/5'
        },
        {
          name: 'Kasper',
          rating: 4,
          text: 'Solid nightclub, bit expensive though.'
        },
        {
          name: 'Ville',
          rating: 1,
          text: 'Worst place on earth'
        },
        {
          name: 'Kasper',
          rating: 4,
          text: 'Solid nightclub, bit expensive though.'
        },        {
          name: 'Kasper',
          rating: 4,
          text: 'Solid nightclub, bit expensive though.'
        },        {
          name: 'Kasper',
          rating: 4,
          text: 'Solid nightclub, bit expensive though.'
        },        {
          name: 'Kasper',
          rating: 4,
          text: 'Solid nightclub, bit expensive though.'
        },        {
          name: 'Kasper',
          rating: 4,
          text: 'Solid nightclub, bit expensive though.'
        },        {
          name: 'Kasper',
          rating: 4,
          text: 'Solid nightclub, bit expensive though.'
        },
      ]
    }
  ]

  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home bars={bars} />} />
      <Route path="/hanat" element={<Hanat bars={bars}/>} />
    </Routes>
  </Router>
  )
}

export default App