import React from 'react';
import { Link } from 'react-router-dom';
import { rocketDataItems } from '../services/tableDataHeaders'

const RocketsTable = ({ rockets }) => {

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
    const header_format = "text-left bg-pink-500 text-white py-2"

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
