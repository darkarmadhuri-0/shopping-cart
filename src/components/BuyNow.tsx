import React from 'react'
import { Button, Stack } from 'react-bootstrap'

function BuyNow() {
  return (
    <div className='bg-slate-700 h-screen w-screen'>
              
      <div className='mw-100 h-25 
                      text-center
                     text-white
                      bg-slate-700
                      d-flex align-items-center 
                      justify-content-center
                      font-9xl
                      font-bold'> 
      <h1> Payment Mode</h1>
      </div>
      {/* <br/>
      <Stack  gap={4}>
      <div className='text-center'>
      <button className= " w-50 bg-primary text-center">internet banking</button>
     <br/>
     <button className="w-50 bg-primary text-center">coin</button>
     <br/>
     <button className="w-50 bg-primary text-center">UPI payments</button>
     <br/>
     </div>
     </Stack> */}
       <Stack gap={3} className="d-flex align-items-center justify-content-center">
      <Button variant="secondary">UPI</Button>
      <Button variant="secondary">Internet Banking</Button>
      <Button variant="secondary">Cash On Delivery</Button>
      <Button variant="secondary">Other</Button>
    </Stack>
     
     
      
    </div>
  )
}

export default BuyNow
