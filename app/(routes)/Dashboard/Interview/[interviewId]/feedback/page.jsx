"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Feedback({ params }) {

    const [feedbackList, setFeedbackList] = useState([])


    useEffect(() => {
        GetFeedback();
    }, [])
    const GetFeedback = async () => {
        const result = await db.select()
            .from(UserAnswer)
            .where(eq(UserAnswer.mockIdRef, params.interviewId))
            .orderBy(UserAnswer.id)
        console.log(result)
        setFeedbackList(result)
    }
    return (
        <>

            <div className='p-10'>
                <h2 className="text-3xl font-bold text-green-500">
                    Congratulations !
                </h2>
                <h2 className='font-bold text-2xl'> Here is your Pitch Feedback </h2>

                {
                    feedbackList?.length==0?
                    <>
                    <h2 className='font-bold text-xl text-gray-500'>No Details Found!</h2>
                    </>
                    :
                
            <>
                <h2 className='text-lg text-blue-600'>Your Overall Rating <span className='text-2xl'>7</span> / 10</h2>
                <h2>Find below Pitch Questions with correct answer , Your answer and Feedback for Improvement  </h2>

                {feedbackList && feedbackList.map((item, index) => (
                    <>
                        <Collapsible key={index}>
                            <CollapsibleTrigger className='p-2 bg-gray-100 rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
                            {item.question} <ChevronsUpDown className='h-5 w-5'/>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                               <div className='flex flex-col gap-2'>
                               <h2 className='bg-red-500 p-2 border rounded-lg'><strong>Rating : </strong>{item.rating}</h2>
                                <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer : </strong>{item.userAns}</h2>
                                <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Ideal Answer : </strong>{item.correctAns}</h2>
                                <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-blue-900'><strong>Feedback : </strong>{item.feedback}</h2>
                               </div>
                            </CollapsibleContent>
                        </Collapsible>


                    </>
                ))}
                </>}
            </div>
            <Link href={'/Dashboard'}>
           
            <Button>Go Home</Button>
            </Link>

        </>
    )
}

export default Feedback