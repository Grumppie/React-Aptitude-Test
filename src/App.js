import './App.css';
import StartPage from "./MyComponents/startPage";
import { ExamPage } from "./MyComponents/ExamPage";
import { ResultPage } from "./MyComponents/ResultPage";
import { AnalysisPage } from "./MyComponents/AnalysisPage";

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import jsonData from './csv_db_10.json';

function App() {

  const [aptitudeData, setAptitudeData] = useState([]);
  // const [technicalData, setTechnicalData] = useState([]);
  const [submissions_aptiData, setSubmissions_aptiData] = useState([]);
  // const [submissions_techData, setSubmissions_techData] = useState([]);

  let [marks, setMarks] = useState(0);


  useEffect(() => {
    // Check if jsonData contains the expected structure
    if (jsonData && Array.isArray(jsonData) && jsonData.length > 0) {
      // Iterate through jsonData to find the aptitude and technical tables
      jsonData.forEach(item => {
        if (item.name === 'aptitude' && item.data) {
          setAptitudeData(item.data);
        }

        // else if (item.name === 'technical' && item.data) {
        //   setTechnicalData(item.data);
        // }

        else if (item.name === 'submissions_apti' && item.data) {
          setSubmissions_aptiData(item.data);
        }

        // else if (item.name === 'submissions_tech' && item.data) {
        //   setSubmissions_techData(item.data);
        // }
      });
    }
    
  }, []);

  
  const onNextClick = (sno, selectedOption) => {
    let currentQuestion = aptitudeData.find(item => item.sno === sno);
    if (currentQuestion && currentQuestion.answer === selectedOption) {
      console.log("Correct Answer") ;
      setMarks(marks + 1);
    }
    else {
      console.log("wrong")
    }

    alert(`Marks: ${marks}, ${sno}`);

  }



  let percent = (marks / aptitudeData.length) * 100;


  return (

    // <div>
    //   <h2>Aptitude Questions</h2>
    //   <ul>
    //     {aptitudeData.map(item => (
    //       <li key={item.sno}>
    //         <div>{item.question}</div>
    //         <div>Options: {item.a}, {item.b}, {item.c}, {item.d}</div>
    //         <div>Answer: {item.answer}</div>
    //       </li>
    //     ))}
    //   </ul>

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />

          <Route path="/exam1/:sno" element={<ExamPage aptitudeData={aptitudeData} onNextClick={onNextClick} />} />

          <Route exact path="/result" element={<ResultPage marks={marks} percent={percent} />} />

          <Route exact path="/analyse" element={<AnalysisPage aptitudeData={aptitudeData} allDates={submissions_aptiData.map(entry => entry.date)} allMarks={submissions_aptiData.map(entry => entry.score)} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;