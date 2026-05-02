import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams() // useParams is a hook which is used to get the params from the url and it returns an object with key as the param name and value as the param value 

    return (
        <div>
            <h1>{params.courseId} Course Detail</h1>
        </div>
    )
}

export default CourseDetail