import { React, useState, useEffect, createContext } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

export const ResumeContext = createContext({});

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({});

  const getResumeData = async () => {
    const data = await fetch('./personal-website/resumeData.json');
    const resumeData = await data.json();
    console.log("ResumeData", resumeData)
    setResumeData(resumeData);
  }

  useEffect(() => {
    getResumeData();
  }, []);

  return (
    <div>
      <ResumeContext.Provider value={resumeData}>
        <Header />
        <Footer />
      </ResumeContext.Provider>
    </div>
  );
}

export default ResumeBuilder
