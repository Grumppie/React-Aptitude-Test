import React from 'react'

export default function startPage() {
  return (
    <startPage>
    <section className="vh-100 section-bg">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{
                    borderRadius: '15px',
                    /* boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', */
                    position: 'relative',
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(55px)',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    borderRadius: '20px'}}>

              <div className="card-body p-md-5" style={{padding: '50px', color: 'white'}}>
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-10 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Test</p>

                    <div className="d-flex justify-content-center">
                      <h3>Aptitude: &emsp;</h3>
                      <a href="/exam1/1"><button className="btn btn-primary btn-lg">Start</button></a>
                    </div>
                    <br />
                    <br />
                    {/* <div className="d-flex justify-content-center">
                      <h3>Technical: &emsp;</h3>
                      <a href="/exam2/1"><button className="btn btn-primary btn-lg">Start</button></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </startPage>
  )
}
