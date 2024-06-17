import React, { useState } from 'react'

const EmployeeComponenet = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')

        function saveEmployee(e) {
            e.preventDefault();

            const employee = { firstName, lastName, email }
            console.log(employee)
        }


    }

    return (
        <div className='container'>
            <br /> <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label chlassName='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={(e) => setFirstName(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label chlassName='form-label'>last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={(e) => setLastname(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label chlassName='form-label'>Employee Email :</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )


export default EmployeeComponenet