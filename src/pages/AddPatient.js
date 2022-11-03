//components
import Navbar from "../components/Navbar";

//hooks
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch  } from 'react-redux';

//contact number module
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

// country list module
import countryList from 'react-select-country-list'
import React, { useMemo } from 'react'
import Select from 'react-select'

//date hook
import DatePicker from 'react-date-picker';

const AddPatient = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const options = useMemo(() => countryList().getData(), [])

    //form 1: basic info
    const [ lastName, setLastName ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ age, setAge] = useState('');
    const [ gender, setGender] = useState (null);
    const [ contactNo, setContactNo] = useState ('');
    const [ country, setCountry] = useState(null)
    const [ address, setAddress] =useState('')
    const [ birthdate, setBirthdate] = useState(new Date(null))

    const onLastNameChangeHandler = ( event ) => {
        setLastName( event.target.value );
    }
    const onFirstNameChangeHandler = ( event ) => {
        setFirstName( event.target.value );
    }
    const onAgeChangeHandler = (event) => {
        setAge(event.target.value);
    }
    const onGenderChangeHandler = (event) => {
        setGender(event.target.value);
    }
    const onAddressChangeHandler = (event) => {
        setAddress(event.target.value);
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault(); 
        dispatch({
            type: 'ADD_PATIENT',
            payload:{
                lastName: lastName , 
                firstName: firstName, 
                age: age,
                gender: gender, 
                contactNo: contactNo,
                address:address,
                country:country,
                birthdate:birthdate,
            } })
        alert('New Patient Added Successfully!')
        setFirstName('')
        setLastName('')
        setAge('')
        setAddress('')
        setGender('')
        setAddress('')
        setContactNo('')
        setCountry(null)
        setBirthdate(null)
        navigate('/my-patients')
    }

    return(
        <>
            
            <Navbar/>
            <div className="add-patient-container">
                <h1> ADD NEW PATIENT </h1>
                <form onSubmit={onSubmitFormHandler}>
                    <table className="add-patient-table">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="lastName"> Last Name </label>
                                </td>
                                <td>
                                    <input 
                                        className="input-text-box"
                                        type='text'
                                        name="lastName"
                                        value ={lastName}
                                        placeholder = 'last name'
                                        onChange={onLastNameChangeHandler}
                                        required
                                        
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="firstName"> First Name </label>
                                </td>
                                <td>
                                    <input
                                        className="input-text-box" 
                                        type='text'
                                        name="firstName"
                                        value ={firstName}
                                        placeholder = 'first name'
                                        onChange={onFirstNameChangeHandler}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label> Gender: </label>
                                </td>
                                <td>
                                    <label htmlFor ='male'> Male </label>
                                    <input
                                        className="gender"
                                        type='radio'
                                        value ='male'
                                        name= 'gender'
                                        onChange={onGenderChangeHandler}
                                        required
                                    />
                                    <label htmlFor ='female'> Female </label>
                                    <input
                                        className="gender"
                                        type='radio'
                                        value ='female'
                                        name = 'gender'
                                        onChange={onGenderChangeHandler}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='birthdate' > Birthdate</label>
                                </td>
                                <td>
                                <DatePicker 
                                    className="birthdate-picker" 
                                    name='birthdate' 
                                    value={birthdate} 
                                    onChange={setBirthdate}/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="age"> Age </label>
                                </td>
                                <td>
                                    <input
                                        className="input-text-box" 
                                        type ='number'
                                        value ={age}
                                        name = 'age'
                                        placeholder='age'
                                        onChange={onAgeChangeHandler}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td> Contact # </td>
                                <td>
                                    <PhoneInput
                                        type='text'
                                        value={contactNo}
                                        defaultCountry={"PH"}
                                        placeholder="Enter phone number"
                                        onChange={setContactNo}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor='country' > Country</label>
                                </td>
                                <td>
                                    <Select 
                                        type= 'text' 
                                        options={options} 
                                        value={country} 
                                        name='country' 
                                        placeholder ='select country' 
                                        onChange={setCountry} />
                                </td>
                            </tr>

                            <tr>
                                <td> 
                                    <label htmlFor ='address'> Address </label> 
                                </td>
                                <td> 
                                    <input
                                        className="input-text-box"
                                        type='text'
                                        value ={address}
                                        placeholder ='city/province'
                                        name = 'address'
                                        onChange={onAddressChangeHandler}
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <button className="submit-patient " type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>

        
    )
}

export default AddPatient 