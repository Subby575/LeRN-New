"use client"
import React, { useEffect, useState } from 'react'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/utils/db'
import Questions from './_components/Questions'
import RecordAnswer from './_components/RecordAnswer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function page({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockinterviewQuestions, setMockInterviewQuestions] = useState();
  const [activeQuestion, setActiveQuestion] = useState(0);
  useEffect(() => {
    getInterview();
  }, [])

  const getInterview = async () => {
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
    // console.log(result)
    if (result) {

      const jsonMockResp = JSON.parse(result[0].jsonMockResp)
      setMockInterviewQuestions(jsonMockResp);
      setInterviewData(result[0]);
    }
  }
  return (
    <>
 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* Questions */}
      <Questions mockinterviewQuestions={mockinterviewQuestions}
        activeQuestion={activeQuestion}
      />

      {/* Video Audio Recording */}
      <RecordAnswer mockinterviewQuestions={mockinterviewQuestions}
        activeQuestion={activeQuestion}
        interviewData={interviewData}
        />


    </div>

    <div className='flex justify-end gap-6'>
      {
        activeQuestion>0?
        <Button onClick={()=>(setActiveQuestion(activeQuestion-1))}>Previous Question</Button>:null
      }
  {
        activeQuestion!=mockinterviewQuestions?.length-1?
        <Button onClick={()=>(setActiveQuestion(activeQuestion+1))}>Next Question</Button>:null
      }
  
  {
        activeQuestion==mockinterviewQuestions?.length-1?<>
        <Link href={'/Dashboard/Interview/'+interviewData?.mockId+"/feedback"}>
        <Button>End Pitch</Button>
        </Link>
        </>
        :null
      }
  
    </div>
    </>
  )
}

export default page