import React from 'react'

const FallbackUi = () => {
  return (
    <>
        <div style={{width:"100%",heigh:"100%",textAlign:"center"}}>
            <h2>Loading...</h2>
            <span style={{width:"200px", border:"3px solid yellow"}}></span>
            <h2>Please wait..</h2>
        </div>
    </>
  )
}

export default FallbackUi