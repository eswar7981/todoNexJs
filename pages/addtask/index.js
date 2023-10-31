

import React from 'react'
import Task from '@/components/Pages/Task'
function addtask(){
 

    async function addData(data){
        const response=await fetch('addtask/api/addTask',
        {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }   
        })

        const dat=await response.json()

        console.log(dat)


    }

  return (
    <div>
        <Task  getData={addData}></Task>
    </div>
  )
}

export default addtask
