import Header from './Header'
import Rating from './Rating'

const Bar = (props) => {
    return (
      <div>
        <Header bar1={props.bar1} />
        <Rating bar1={props.bar1} />
      </div>
    )
  }

export default Bar