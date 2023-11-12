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
                    <tr key={index}><span>{el.manufacturer}</span>
                                     <span> model: {el.model}</span>
                    </tr>
                )
            })}
        </table>
    )
}