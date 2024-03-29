import React, { useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom';

export const ExamPage = (props) => {
    let { sno } = useParams();

    let currentSno = sno;

    const currentQuestion = props.aptitudeData.find(item => item.sno === currentSno);

    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNextClick = () => {
        currentSno = parseInt(sno);
        const nextSno = currentSno + 1;

        currentSno = String(currentSno);

        props.onNextClick(currentSno, selectedOption);

        navigate(`/exam1/${nextSno}`);
    };
    
    const handleSubmitClick = () => {
        navigate(`/result`);
    };

    if (!currentQuestion) {
      return <div>Loading question...</div>; 
    }


    return (
    <div>
    <section className="vh-100 section-bg" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-10 order-2 order-lg-1">
      
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Test</p>
      
                    <form className="mx-1 mx-md-4" method="" action="" id="questionForm">

                      <div>
                        <p>{currentQuestion.sno}. {currentQuestion.question}</p>
                      </div>
                      <input type="radio" id="a" name="options" value={currentQuestion.a} onChange={handleOptionChange}/>
                      <label htmlFor="a">{currentQuestion.a}</label><br />
                      <input type="radio" id="b" name="options" value={currentQuestion.b} onChange={handleOptionChange}/>
                      <label htmlFor="b">{currentQuestion.b}</label><br />
                      <input type="radio" id="c" name="options" value={currentQuestion.c} onChange={handleOptionChange}/>
                      <label htmlFor="c">{currentQuestion.c}</label><br />
                      <input type="radio" id="d" name="options" value={currentQuestion.d} onChange={handleOptionChange}/>
                      <label htmlFor="d">{currentQuestion.d}</label><br /><br />
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg" id="nextButton" name="form_button" onClick={handleNextClick}>Next</button>
                      </div>
                        
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <a href="/result"><button type="submit" className="btn btn-danger btn-lg" name="submit_button" onClick={handleSubmitClick}>Submit</button></a>
          </div>
        </div>
      </div>
    </section>
</div>
    )
}
