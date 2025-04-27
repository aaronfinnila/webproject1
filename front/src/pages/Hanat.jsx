import Bar from '/src/components/Bar'
import Header from '/src/components/Header'
import { useState, useEffect } from 'react'

const Hanat = (props) => {

    const [jolene, setJolene] = useState(false)

    const changeJolene = () => {
        console.log(jolene);
        jolene ? setJolene(false) : setJolene(true)
    }

    // fix bars map and make so it changes state only for said bar on click
    return (
        <div>
        <div className="bar-hanat-container">
          {props.bars.map(bar => (<button key={bar.name} onClick={changeJolene}>
            <Header bar1={bar} />
          </button>
        ))}
        </div>

      </div>
    )
}

export default Hanat