import Header from '/src/components/Header'

const Home = (props) => {
    return (
        <div>
        <div className="bar-home-container">
          {props.bars.map(bar => <Header bar1={bar} key={bar.name}/>)}
        </div>
      </div>
    )
}

export default Home