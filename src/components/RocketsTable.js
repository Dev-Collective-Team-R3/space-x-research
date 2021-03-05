import React from 'react';
import { Link } from 'react-router-dom';

const RocketsTable = ({ rockets }) => {

    const rocketDataItems =[
        {parameter: 'height', name: 'Height (meters)', accessor: 'height.meters'},
        {parameter: 'diameter', name: 'Diameter (meters)', accessor: 'diameter.meters'},
        {parameter: 'mass', name: 'Mass (lbs)', accessor: 'mass.lb'},
        {parameter: 'fuel_amount', name: 'Fuel Amount (tons)', accessor: 'first_stage.fuel_amount_tons'},
        {parameter: 'no_of_engines', name: 'Number of Engines', accessor: 'engines.number'},
        {parameter: 'engine_type', name: 'Engine Type', accessor: 'engines.type'},
        {parameter: 'primary_engine_prop', name: 'Primary Engine Propellant', accessor: 'engines.propellant_1'},
        {parameter: 'landing_legs', name: 'Number of Landing Legs', accessor: 'landing_legs.number'},
        {parameter: 'cost_launch', name: 'Cost per Launch (USD Millions)', accessor: 'cost_per_launch'},
        {parameter: 'success_rate', name: 'Success Rate (%)', accessor: 'success_rate_pct'},
        {parameter: 'first_flight', name: 'First Flight', accessor: 'first_flight'}
    ]

    const dataGetter = (rocket, accessor) => {
        const keys = accessor.split('.');
        let data = rocket
        for (let key of keys){
            data = data[key]
            if (key == "cost_per_launch") {
                data = `$ ${data/1000000}`;
            }
        }
        return data
    }

    const odd_table_row = 'bg-pink-200 py-1'
    const data_col_format = "text-left py-1"
    const header_format = "text-left bg-pink-500 text-white"

    return (
        <table className="w-full border-b-2 border-pink-500">
            <thead>
                <tr>
                    <th className={header_format}></th>
                    {rockets ? rockets.map(rocket=>(
                        <>
                            <th className={header_format}><Link to={`/rockets/${rocket.id}`} >{rocket.name}</Link></th>
                            
                        </>
                    )) : null}
                </tr>
            </thead>
            <tbody>
                {
                    rocketDataItems.map((item, index)=>(
                        <tr className={index % 2 ? odd_table_row : ""}>
                            <td>{item.name}</td>
                            {rockets.map(rocket=>
                                <td className={data_col_format}>
                                    <Link to={`/rockets/${rocket.id}`}>
                                        {dataGetter(rocket, item.accessor)}
                                    </Link>
                                </td>
                            )}
                        </tr>
                    ))
                }
            </tbody>
            
        </table>
    )
}

export default RocketsTable
