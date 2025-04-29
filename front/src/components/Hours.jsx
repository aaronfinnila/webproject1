const Hours = (props) => {
    console.log(props.hours)
    return (
        <div className="menu-container-hours">
            <div>{`Maanantai: ${props.hours[0]}`}</div>
            <div>{`Tiistai: ${props.hours[1]}`}</div>
            <div>{`Keskiviikko: ${props.hours[2]}`}</div>
            <div>{`Torstai: ${props.hours[3]}`}</div>
            <div>{`Perjantai: ${props.hours[4]}`}</div>
            <div>{`Lauantai: ${props.hours[5]}`}</div>
            <div>{`Sunnuntai: ${props.hours[6]}`}</div>
        </div>
    )
}

export default Hours