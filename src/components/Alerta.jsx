import React from 'react'

const Alert = ({error}) => {
  const aux_color='text-'+error.color+'-emphasis bg-'+error.color+'-subtle'
  return (
    <>
        {error ? (<div className={aux_color}>{error.msg}</div>): null}
    </>
  )
}

export default Alert