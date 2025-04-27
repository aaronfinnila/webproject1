import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Hanat from './pages/Hanat'
import Navbar from './components/Navbar'

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
    <Router>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home bars={bars} />} />
      <Route path="/hanat" element={<Hanat bars={bars}/>} />
    </Routes>
  </Router>
  )
}

export default App