// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// export const AnalysisPage = ({ allDates, allMarks, aptitudeData }) => {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   // useEffect(() => {
//   //   if (chartRef.current) {
//   //     const ctx = chartRef.current.getContext('2d');

//   //     // Ensure the existing chart instance is destroyed before creating a new one
//   //     // if (chartInstance.current) {
//   //     //   chartInstance.current.destroy();
//   //     // }

//   //     chartInstance.current = new Chart(ctx, {
//   //       type: "line",
//   //       data: {
//   //         labels: allDates,
//   //         datasets: [
//   //           {
//   //             label: "Performance",
//   //             data: allMarks,
//   //             fill: false,
//   //             borderColor: "rgb(75, 192, 192)",
//   //             lineTension: 0.1
//   //           }
//   //         ]
//   //       },
//   //       options: {
//   //         responsive: false
//   //       },
//   //     });
//   //   }
    
//   //   // Cleanup function to destroy the chart when the component unmounts or when the data changes
//   //   // return () => {
//   //   //   if (chartInstance.current) {
//   //   //     chartInstance.current.destroy();
//   //   //   }
//   //   // };
//   // }, [allDates, allMarks, aptitudeData]);

//   return (
//     <section className="vh-100" >
//       <div className="container h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-lg-12 col-xl-11">
//             <div className="card text-black" style={{ borderRadius: '25px' }}>
//               <div className="card-body p-md-5">
//                 <div className="row justify-content-center">
//                   {/* Start Graph */}
//                   <canvas ref={chartRef} width="900" height="400"></canvas>
//                   {/* End Graph */}
//                   <div className="col-md-10 col-lg-6 col-xl-10 order-2 order-lg-1" style={{ color: 'black' }}>
//                     <br />
//                     <br />
//                     <br />
//                     <br />
//                     <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >Answers</p>
//                     <form className="mx-1 mx-md-4" method="post" action="" id="questionForm">
//                       {aptitudeData.map(i => (
//                         <div key={i.sno} >
//                           <p>{i.sno}. {i.question}</p>
//                           <p>Answer : {i.answer}</p>
//                           <hr />
//                         </div>
//                       ))}
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
