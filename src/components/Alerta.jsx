import React from 'react'

const Alert = ({error}) => {
 
  return (
    <>
        {error ? (<div>{error.msg}</div>): null}
    </>
  )
}

export default Alert