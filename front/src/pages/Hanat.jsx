import Header from '/src/components/Header'
import Menu from '/src/components/Menu'
import { useState, useEffect } from 'react'

const Hanat = (props) => {

    const [barstate, setBarstate] = useState('')

    const changeValue = (name) => {
        console.log(name);
        setBarstate(name)
    }

    return (
      <div>
        <div className="bar-hanat-container">
          {props.bars.map(bar => (<button key={bar.name} onClick={() => changeValue(bar.name)}>
            <Header bar1={bar} />
          </button>
        ))}
        </div>
        <Menu bars={props.bars} barstate={barstate} />
      </div>
    )
}

export default Hanat