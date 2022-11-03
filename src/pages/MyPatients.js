import { useSelector } from 'react-redux';

//components
import Navbar from '../components/Navbar';
import TableRow from '../components/TableRow';

const MyPatients = () => {
    const patients = useSelector ( state => state.allPatients)

    return(
        <> 
            <Navbar/>
            <div className='patient-list-container'>
                <h1> My Patients List </h1>
                <table className='patient-list-table'>
                    <tbody>
                        <tr>
                            <th> id </th>
                            <th> Last Name </th>
                            <th> First Name </th>
                            <th> Age </th>
                            <th> Gender </th>
                            <th> Contact #</th>
                            <th> Address </th>
{/*                             <th> Country </th>
                            <th> Birthdate </th> */}
                            <th> Action </th>
                        </tr>
                        {
                        patients.map( patient => {
                            return  <TableRow 
                                    key={patient.id}
                                    id = {patient.id}
                                    firstName={patient.firstName} 
                                    lastName={patient.lastName} 
                                    age={patient.age}
                                    gender = {patient.gender}
                                    contactNo = {patient.contactNo}
                                    address = {patient.address}
/*                                     country = {patient.country}
                                    birthdate = {patient.birthdate} */
                                    />  
                        })
                        }
                    </tbody>
                </table>
                
            </div>
        </>
    )
}

export default MyPatients 