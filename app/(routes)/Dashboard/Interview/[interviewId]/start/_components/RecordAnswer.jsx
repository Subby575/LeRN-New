"use client"
import { Button } from '@/components/ui/button'
import { Mic, StopCircle, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAiModel'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import moment from 'moment'
import { useUser } from '@clerk/nextjs'
export default function RecordAnswer({ mockinterviewQuestions, activeQuestion, interviewData }) {


    const { user } = useUser();
    const [userAnswer, setUserAnswer] = useState('')
    const [loading, setLoading] = useState(false)

    const {
        error,
        interimResult,
        isRecording,
        results,
        setResults,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results.map((result) => (
            setUserAnswer(prevAns => prevAns + result?.transcript)
        ))
    }, [results])



    const SaveUserAnswer = async () => {
        if (isRecording) {
            setLoading(true)
            stopSpeechToText();
            // if (userAnswer?.length < 10) {
            //     toast("Error while saving your answer, Please record again")
            //     return;
            // }


            const feedbackPrompt = "Question:" + mockinterviewQuestions[activeQuestion]?.question + ", User answer : " + userAnswer + "Depends on user answer for given interview question" + "plase give us rating for answer and feedback for area of improvement if any " + "in just 3 to 5 lines to improve it in JSON format with rating filed and feedback field"

            console.log("yeah working")
            const result = await chatSession.sendMessage(feedbackPrompt)

            const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '')
            console.log(mockJsonResp)


            const jsonFeedbackResp = JSON.parse(mockJsonResp);

            const resp = await db.insert(UserAnswer).values({
                mockIdRef: interviewData?.mockId,
                question: mockinterviewQuestions[activeQuestion]?.question,
                correctAns: mockinterviewQuestions[activeQuestion]?.answer,
                userAns: userAnswer,
                feedback: jsonFeedbackResp?.feedback,
                rating: jsonFeedbackResp?.rating,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format('DD-MM-YYYY')
            })
            if (resp) {
                toast('User Answer Recorder Successfully')
                setResults([])
            }
            setLoading(false)
            setUserAnswer('')
            setResults([])
        }
        else {
            startSpeechToText();
            
        }
    }



    return (<>

        <div className='flex flex-col justify-center items-center rounded-lg mt-20 p-5'>
            <WebcamIcon className='absolute w-40 h-40' />
            <Webcam
                mirrored={true}
                style={{
                    height: 300,
                    width: '100%',
                    zIndex: 10,
                }}
            />

            <Button
                disabled={loading}
                onClick={SaveUserAnswer} variant='outline' className='my-10'>{isRecording ?
                    <h2 className='text-red-500 flex gap-2 ' >
                        <StopCircle />Stop Recording
                    </h2>
                    : 'Record Answer'}</Button>
        </div>


    </>
    )
}
