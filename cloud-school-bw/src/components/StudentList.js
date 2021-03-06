import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components'

const StudentTable= styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Lato', sans-serif;
    
    #student-list{
        display: none;
        width: 99%;
        flex-direction: column;
        flex-wrap: wrap; 
        margin: .3rem;
        height: 100vh;
    }

    h2{
        color: #2A7DE1;
        align-self: center;
        border: none;
        margin-top: 3%;
    }
    .table{
        border-collapse: collapse;
        flex-direction: column;
        font-size: 1rem;
        border: none;
    }

    thead{
        justify-content: center;
    }

    tr.border-bottom td{
        border-bottom: 3px solid #F4F6F7;
        border-top: none;
    }

    tr.border-bottom th{
        border-bottom: 3px solid #F4F6F7;
        border-top: none;
    }
    button{
        border: none;
        box-shadow: -.1em 0 .2em rgba(0, 0, 0, 0.2);
    }

    @media (min-width: 768px){
        position: absolute;
        margin-top: 9.5rem;
        margin-left: 16rem; 
        width: 65%;
        max-height: 668px;
        #student-list{
            display: none;
            flex-direction: row;
            flex-wrap: wrap;
            height:80vh;
        }

        h2{
            width: 100%;
            text-align: center;
            font-size: 1.8rem;
        }
  }
   @media (min-width: 1024px){
        margin-top: 11rem;
        
        #student-list{
            display: none;
            flex-direction: column;
            flex-wrap: wrap;
            height:80vh;
        } 
        thead{
        justify-content: flex-start;
        align-content: flex-start;
        }
   }
`
const Error= styled.div`
         @media (min-width: 768px){
        position: absolute;
        margin-top: 12rem;
        margin-left: 16rem; 
  }
`
const StudentList = (props) => { 
    const [students, setStudents] = useState();
    
    useEffect(() => {
        axiosWithAuth().get('/users/students') 
        .then(res => {
          console.log(res);
          setStudents(res.data.data.students)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    if (!students) {
        return <Error className="error">Loading User information...</Error>;
      }

    //   future feature for deleting, needs fix

    //   const removeData =(id) => {
    //     axios.delete(`${URL}/${id}`).then(res => {
    //         const del = volunteers.filter(volunteer => id !== volunteer.id)
    //         setVolunteers(del)
    //     })



    return (
        <StudentTable>
        <div id="student-list">
            <h2>Students</h2>
            <div className="table-responsive text-nowrap">
            <table className="table table-hover">
                <thead>
                    <tr className="border-bottom">
                        <th scope='col' className="one">Name</th>
                        <th scope='col' className="two">Email</th>
                        <th scope='col' className="three">Phone</th>
                        <th scope='col' className="four">Country</th>
                        <th scope='col' className="five"></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr className="border-bottom" key={student.id}>

                            <td>{student.name}</td>
                            <td>
                                <button>Email</button>
                                {/* <a className="mailto" href={`mailto:${vol.email}`}>eMail</a> */}
                            </td>
                            <td>{student.phone}</td>
                            <td>USA</td>
                            <td className="delete">
                                <button>X</button>
                                {/* <button onClick={() => removeData(vol.cell)}>Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    </StudentTable>
    )
}
export default StudentList
