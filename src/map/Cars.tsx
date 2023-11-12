type CarsType= {
    manufacturer: string
    model: string
}
type topCarsType = {
    topCars:CarsType[]
}
export const Cars = (props: topCarsType) => {
    return (
        <table>
            {props.topCars.map((el, index)=> {
                return (
                    <tr key={index}>
                        <th>{el.manufacturer}</th>
                        <th>model: {el.model}</th>
                    </tr>
                )
            })}
        </table>
    )
}