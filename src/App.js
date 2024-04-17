import './App.css';

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, json } from 'react-router-dom';
import { StartPage } from "./MyComponents/StartPage";
import { ExamPage } from "./MyComponents/ExamPage";
import { ResultPage } from "./MyComponents/ResultPage";
import { AnalysisPage } from "./MyComponents/AnalysisPage";

function App() {

  const [aptitudeData, setAptitudeData] = useState([]);
  // const [technicalData, setTechnicalData] = useState([]);
  const [submissions_aptiData, setSubmissions_aptiData] = useState([]);
  // const [submissions_techData, setSubmissions_techData] = useState([]);
   const [jsonData, setJsonData] = useState([]);
   const [responses, setResponses] = useState([]);
   const [time, setTime] = useState(0);

  let [marks, setMarks] = useState(0);

  // const fetchData = async () => {
  //   const response = await fetch('http://localhost:5000/fetchQuestions');
  //   const data = await response.json();
  //   console.log(data);
  //   setJsonData(data);
  // }

  useEffect( () => {
    // Check if jsonData contains the expected structure
    // await fetchData();

    const fetchData = async () => {
    const response = await fetch('http://localhost:5000/fetchQuestions?userAbility=40',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({topics:['DBMS']})
    });
    const data = await response.json();
    console.log(data);
    setAptitudeData(data);
  }
    fetchData();
    
  }, []);

  
  const onNextClick = (id, selectedOption) => {
    let currentQuestion = aptitudeData.find(item => item.id === id);
    const correctOption = currentQuestion.metadata.answer;
    const formatedOption = selectedOption.split('.')[0];

    const timeTaken = Math.floor((Date.now() - time) / 1000);
    setTime(Date.now());

    if (currentQuestion && correctOption === formatedOption) {
      console.log("Correct Answer") ;
      setMarks(marks + 1);
      setResponses([...responses, {id: id, response: 1, timeTaken}]);
    }
    else {
      console.log("wrong")
      setResponses([...responses, {id: id, response: 0, timeTaken}]);
    }
  }



  let percent = (marks / aptitudeData.length) * 100;


  return (

    // <div>
    //   <h2>Aptitude Questions</h2>
    //   <ul>
    //     {aptitudeData.map(item => (
    //       <li key={item.id}>
    //         <div>{item.question}</div>
    //         <div>Options: {item.a}, {item.b}, {item.c}, {item.d}</div>
    //         <div>Answer: {item.answer}</div>
    //       </li>
    //     ))}
    //   </ul>

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage aptitudeData={aptitudeData} setTime={setTime} />} />

          <Route path="/exam1/:id" element={<ExamPage aptitudeData={aptitudeData} onNextClick={onNextClick} setAptitudeData={setAptitudeData} responses={responses}/>} />

          <Route exact path="/result" element={<ResultPage marks={marks} percent={percent} />} />

          {/* <Route exact path="/analyse" element={<AnalysisPage aptitudeData={aptitudeData} allDates={submissions_aptiData.map(entry => entry.date)} allMarks={submissions_aptiData.map(entry => entry.score)} />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;