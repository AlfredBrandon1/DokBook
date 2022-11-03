import {Link } from 'react-router-dom'

const TableRow = ({id, lastName, firstName, age, gender, contactNo, address,/* country,birthdate */}) => {
    return(
        <tr>
            <td> {id} </td>
            <td> {lastName} </td>
            <td> {firstName} </td>
            <td> {age} </td>
            <td> {gender}</td>
            <td> +{contactNo}</td>
            <td> {address} </td>
{/*             <td> {country}</td>
            <td> {birthdate}</td> */}
            <td><button className='view-profile'> <Link to = {`/${id}`}> view profile </Link> </button></td>
        </tr>
    )
}

export default TableRow