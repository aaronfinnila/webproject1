const Drink = (props) => {
    return (
        <div className="drink-header">
            <div className="drink-name">
                {props.dri.name}
            </div>
            <div className="drink-price">
                {props.dri.price}
            </div>
        </div>
    )
}

export default Drink