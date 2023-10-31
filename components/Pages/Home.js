import React from 'react'
import classes from"./Home.module.css" 
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
const Home = () => {
    const router=useRouter()
    const addTaskHandler=(e)=>{
        e.preventDefault()
        router.push('/addtask')
    }


  return (
    <>
        <div className={classes.home}>
        <h1>You Plan Your Day</h1>
        <h1>We Follow Your Play</h1>
        </div>
        <div className={classes.but}>
        <Button variant='success' onClick={addTaskHandler}>Tasks</Button>
 
        </div>
            </>
  )
}

export default Home
