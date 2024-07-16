function Fruits(props) {
    return (
        <div>
            {props.fruits_prop.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits
