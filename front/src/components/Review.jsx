import starImage from '/assets/star.png'

const Review = (props) => {
    return (
        <div>
            <div className="review-header">
                <div className="review-name">
                {props.rev.name}
                </div>
                <div className="review-rating">
                {props.rev.rating}
                <img src={starImage} className="review-rating-star" />
                </div>
            </div>
            <div className="review-text">
                {props.rev.text}
            </div>
        </div>
    )
}

export default Review