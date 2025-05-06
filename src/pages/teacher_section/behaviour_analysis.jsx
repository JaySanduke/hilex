import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

export default function BehaviourAnalysis() {

    useEffect(() => {
        window.open("https://huggingface.co/spaces/themanas021/Image-alanysis", "_blank");
    }, [])

    return <Navigate to="/teacher/dashboard" />;
}
