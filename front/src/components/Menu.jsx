import starImage from '/assets/star.png'
import Review from './Review'
import Drink from './Drink'
import Hours from './Hours'

const Menu = (props) => {
    let currentBar = {
        name: '',
        hours: [],
        reviews: [],
        drinks: []
    }

    if (props.barstate !== '') {        
        currentBar = props.bars.find(bar => bar.name === props.barstate)
    }

    const getKeyValue = () => {
        return (Math.random()*10)
    }

    return (
        <div>
            <div className="menu-container-header">
                <p>{currentBar.name}</p>
                <p className="menu-container-rating">{currentBar.reviews.length > 0
                ? (currentBar.reviews.map(review => review.rating).reduce((acc, curr) => acc + curr, 0)/currentBar.reviews.length).toFixed(1)
                : ""
                }
                </p>
                <p>
                    {currentBar.reviews.length > 0
                    ? <img src={starImage} id="starImage"/>
                    : ""
                    }
                </p>
            </div>
            <div className="menu-container-hours">
                {currentBar.hours.length > 0
                ? <Hours hours={currentBar.hours} />
                : ''
                }
            </div>
            <div className="menu-container-drinks">
                {currentBar.drinks.map(drink => <Drink dri={drink} key={getKeyValue()} />)}
            </div>
            <div className="menu-container-reviews">
                {currentBar.reviews.map(review => <Review rev={review} key={getKeyValue()} />)}
            </div>
        </div>
    )
}

export default Menu