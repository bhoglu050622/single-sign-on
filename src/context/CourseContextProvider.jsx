import React, { createContext } from 'react'

export const CourseContext = createContext()


const CourseContextProvider = (props) => {

    const courses = [
        {
            domain: "A complete guide to Amazon web services (AWS)",
            mentors: "sathish p c",
            language: "tamil",
            category: "technology"
        },
        {
            domain: "A complete guide to Devops ",
            mentors: "ragu",
            language: "hindhi",
            category: "arts"
        },
        {
            domain: "A complete guide to Data science in Machine learning",
            mentors: "jeeva",
            language: "english",
            category: "civil"
        },
        {
            domain: "A complete guide to Azure",
            mentors: "anand",
            language: "telugu",
            category: "mechanical"
        },
        {
            domain: "A complete guide to Devops ",
            mentors: "gowtham",
            language: "kannada",
            category: "medical"
        },
        {
            domain: "A complete guide to Amazon web services (AWS) ",
            mentors: "prabu",
            language: "hindhi",
            category: "electrical"
        },
        {
            domain: "A complete guide to Data science in Machine learning ",
            mentors: "deva",
            language: "english",
            category: "technology"
        },
        {
            domain: "A complete guide to Azure ",
            mentors: "sathish",
            language: "tamil",
            category: "arts"
        },
        {
            domain: "A complete guide to Amazon web services (AWS)",
            mentors: "sathish p c",
            language: "tamil",
            category: "technology"
        },
        {
            domain: "A complete guide to Devops ",
            mentors: "ragu",
            language: "hindhi",
            category: "arts"
        },
        {
            domain: "A complete guide to Data science in Machine learning",
            mentors: "jeeva",
            language: "english",
            category: "civil"
        },
        {
            domain: "A complete guide to Azure",
            mentors: "anand",
            language: "telugu",
            category: "mechanical"
        },
        {
            domain: "A complete guide to Devops ",
            mentors: "gowtham",
            language: "kannada",
            category: "medical"
        },
        {
            domain: "A complete guide to Amazon web services (AWS) ",
            mentors: "prabu",
            language: "hindhi",
            category: "electrical"
        },
        {
            domain: "A complete guide to Data science in Machine learning ",
            mentors: "deva",
            language: "english",
            category: "technology"
        },
        {
            domain: "A complete guide to Azure ",
            mentors: "sathish",
            language: "tamil",
            category: "arts"
        },
        {
            domain: "A complete guide to Amazon web services (AWS)",
            mentors: "sathish p c",
            language: "tamil",
            category: "technology"
        },
        {
            domain: "A complete guide to Devops ",
            mentors: "ragu",
            language: "hindhi",
            category: "arts"
        },
        {
            domain: "A complete guide to Data science in Machine learning",
            mentors: "jeeva",
            language: "english",
            category: "civil"
        },
        {
            domain: "A complete guide to Azure",
            mentors: "anand",
            language: "telugu",
            category: "mechanical"
        },
        {
            domain: "A complete guide to Devops ",
            mentors: "gowtham",
            language: "kannada",
            category: "medical"
        },
        {
            domain: "A complete guide to Amazon web services (AWS) ",
            mentors: "prabu",
            language: "hindhi",
            category: "electrical"
        },
        {
            domain: "A complete guide to Data science in Machine learning ",
            mentors: "deva",
            language: "english",
            category: "technology"
        },
        {
            domain: "A complete guide to Azure ",
            mentors: "sathish",
            language: "tamil",
            category: "arts"
        },
        {
            domain: "A complete guide to Amazon web services (AWS)",
            mentors: "sathish p c",
            language: "tamil",
            category: "technology"
        },
        {
            domain: "A complete guide to Devops ",
            mentors: "ragu",
            language: "hindhi",
            category: "arts"
        },
        {
            domain: "A complete guide to Data science in Machine learning",
            mentors: "jeeva",
            language: "english",
            category: "civil"
        },
        {
            domain: "A complete guide to Azure",
            mentors: "anand",
            language: "telugu",
            category: "mechanical"
        },
        {
            domain: "A complete guide to Devops ",
            mentors: "gowtham",
            language: "kannada",
            category: "medical"
        },
        {
            domain: "A complete guide to Amazon web services (AWS) ",
            mentors: "prabu",
            language: "hindhi",
            category: "electrical"
        },
        {
            domain: "A complete guide to Data science in Machine learning ",
            mentors: "deva",
            language: "english",
            category: "technology"
        },
        {
            domain: "A complete guide to Azure ",
            mentors: "sathish",
            language: "tamil",
            category: "arts"
        },
    ]

    const value = {courses}
    return (
        <CourseContext.Provider value={value}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider