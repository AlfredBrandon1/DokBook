import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar";
import { useParams } from 'react-router';
//import { useState } from 'react';
import Sheet from '../components/Sheet';

const PatientProfile = () => {
    const patients = useSelector ( state => state.allPatients)
    const  {id}  = useParams()
    const patient = patients.find( patient => patient.id === id )
   // const dispatch = useDispatch()

/*         //form 2: medical card info
        const [date, setDate] = useState(null)
        const [description, setDescription] = useState(null)
        const [diagnosis, setDiagnosis] = useState(null)
        const [prescription, setPrescription] = useState(null)
        const [notes, setNotes] = useState(null)

        const onDateChangeHandler = (event) => {
            setDate (event.target.value);
        }
        const onDescriptionChangeHandler = (event) => {
            setDescription (event.target.value);
        }
        const onDiagnosisChangeHandler = (event) => {
            setDiagnosis (event.target.value);
        }
        const onPrescriptionChangeHandler = (event) => {
            setPrescription (event.target.value);
        }
        const onNotesChangeHandler = (event) => {
            setNotes (event.target.value);
        }

        const onSubmitFormHandler = (event) => {
            event.preventDefault(); 
            dispatch({
                type: 'ADD_RECORD',
                payload:{
    
                    date:date,
                    description: description,
                    diagnosis:diagnosis,
                    prescription:prescription,
                    notes: notes,
                } })
            alert('Appointment added!')
        } */

    return (
        <>
        <Navbar/>
            <div className='patient-profile'>
                
                <ul>
                <h2> Patient Medical Card </h2>
                    <li> ID: {patient.id} </li>
                    <li> Name : { patient.firstName } { patient.lastName }</li>
                    <li> Age: {patient.age} year/s old</li>
                    <li> Gender: {patient.gender}</li>
                    <li> Contact number: {patient.contactNo}</li>
                    <li> Address: {patient.address} </li>
                    <li> Birthdate: {patient.birthdate} </li>
                    <li> Country: {patient.country} </li>
                </ul>
                <Sheet/>

{/*                 <form onSubmit={onSubmitFormHandler}>
                    <table className='solid-border'>
                        <tr>
                            <th> Date</th>
                            <th> Description </th>
                            <th> Diagnosis </th>
                            <th> Prescription </th>
                            <th> Notes </th>
                        </tr>
                        <tr>
                            <td> {patient.date}</td>
                            <td>{patient.description}</td>
                            <td>{patient.diagnosis}</td>
                            <td>{patient.prescription}</td>
                            <td>{patient.notes}</td>
                        </tr>

                        <tr>
                            <td> 
                                <textarea
                                    type= 'text'
                                    value={date}
                                    onChange ={onDateChangeHandler}
                                />
                            </td>
                            <td> 
                                <textarea
                                    type= 'text'
                                    value={description}
                                    onChange ={onDescriptionChangeHandler}
                                />
                            </td>
                            <td> 
                                <textarea
                                    type= 'text'
                                    value={diagnosis}
                                    onChange ={onDiagnosisChangeHandler}
                                />
                            </td>
                            <td> 
                                <textarea
                                    type= 'text'
                                    value={prescription}
                                    onChange ={onPrescriptionChangeHandler}
                                />
                            </td>
                            <td> 
                                <textarea
                                    type= 'text'
                                    value={notes}
                                    onChange ={onNotesChangeHandler}
                                />
                            </td>
                        </tr>

                        <br/>
                        <button className="submit-patient success" type="submit">
                            Submit
                        </button>
                    </table>
                </form> */}
            </div>

        </>
    );
    }

export default PatientProfile 