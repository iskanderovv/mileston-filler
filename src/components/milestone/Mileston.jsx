import React, { useState } from 'react';
import './Mileston.scss';

const Mileston = () => {
    const steps = ['One', 'Two', 'Three', 'Four', 'Complete'];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    console.log(currentStep);

    const handleNext = () => {
        currentStep === steps.length ? setComplete(true) : setCurrentStep(prevStep => prevStep + 1);
    }

    const handleBack = () => {
        currentStep === steps.indexOf('Two') ? setComplete(true) : setCurrentStep(prevStep => prevStep - 1);
    }

    return (
        <div className='bg-[#000] h-[100vh] w-full flex justify-center items-center'>
            <div className='bg-white max-w-[1200px] w-full'>
                <div className='bg-white max-w-[1200px] flex justify-between text-center py-12 mx-auto w-full'>
                    {steps?.map((step, index) => (
                        <div
                            key={index}
                            className={`mileston-item 
                            ${currentStep === index + 1 && 'active'} 
                            ${index + 1 < currentStep && 'complete'}
                            ${index + 1 > currentStep && 'completeStep'}`}>
                            <div className='
                             rounded-full text-xl w-[40px] h-[40px] flex 
                            items-center justify-center relative z-20 bg-slate-50 
                            select-none cursor-pointer mileston-step'>
                                {currentStep > index ? <i className="bi bi-check text-4xl text-white"></i> : <div></div>}
                            </div>
                            <p className='text-[#0e0e0e] text-xl font-semibold mileston-step-name'>{step}</p>
                        </div>
                    ))}

                </div>
                <div className='max-w-[1000px] mx-auto flex items-center gap-4 pb-10'>
                    <button className='border border-slate-300 px-2 rounded text-xl' onClick={handleBack}>Back</button>
                    <button className='border border-slate-300 px-2 rounded text-xl' onClick={handleNext}>Next</button>
                    <p className='text-xl'>Step: {steps[currentStep - 1]}</p>
                </div>
            </div>

        </div>
    )
}

export default Mileston
