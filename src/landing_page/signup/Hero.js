import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='row text-center mt-5 g-4 p-5'>
        <p className='text-muted' style={{ fontSize: "45px", fontWeight: "bold" }}>Open a free demat and trading account online</p>
        <p className='text-muted fs-5'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
      </div>
      <div className='row mt-5 p-2 justify-content-center align-content-center m-auto'>
        <div className='col-6 p-5'>
          <img src='media/images/account_open.svg' alt='account_open.svg' style={{ width: "100%" }} />
        </div>
        <div className='col-6 p-5'>
          <h1>Signup now</h1>
          <p className='text-muted'>Or track your existing application</p>

          <form className='row gap-4 p-4 col-12 border' style={{
            borderRadius: "10px",
            borderColor: "#e0e0e0",
            background: "linear-gradient(60deg, #ffffff 60%,#a9c9ff)"
          }}>
            <div>
              <label className='col-4 text-primary fs-5' htmlFor="name">Name</label>
              <input className='col-8' style={{ borderRadius: "10px", border: "1px solid #a9c9ff" }} id="name" name="name" type="text" placeholder='Enter Name' />
            </div>

            <div>
              <label className='col-4 text-primary fs-5' htmlFor="email">Email</label>
              <input className='col-8' style={{ borderRadius: "10px", border: "1px solid #a9c9ff" }} id="email" name="email" type="email" placeholder='Enter Email' />
            </div>

            <div>
              <label className='col-4 text-primary fs-5' htmlFor="password">Password</label>
              <input className='col-8' style={{ borderRadius: "10px", border: "1px solid #a9c9ff" }} id="password" name="password" type="password" placeholder='Enter Password' />
            </div>
            <div className='col-12'>
              <button className='bg-primary text-white col-6' style={{ padding: "15px 20px 15px 20px", border: "none", borderRadius: "10px" }} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero
