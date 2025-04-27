import starImage from '/assets/star.png'

const Rating = (props) => {
    return (
      <div className="Rating">
        <p className="rating-text">{props.bar1.reviews.map(review => review.rating).reduce((total, current) => total + current)/props.bar1.reviews.length}</p>
        <img src={starImage} alt="star" className="rating-img"/>
      </div>
    )
  }

export default Rating