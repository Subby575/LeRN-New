import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react'
const ques = [
  {
    question: "What is your unique selling proposition (USP) that differentiates you from other grocery stores in the market?",
    answer: "We offer a curated selection of high-quality, locally sourced products, focusing on fresh produce and organic options. Our online platform provides convenient delivery and personalized recommendations, catering to a specific niche of health-conscious consumers."
  },
  {
    question: "How do you plan to leverage your online presence to expand your customer base and drive sales?",
    answer: "We will utilize targeted online advertising, social media marketing, and collaborations with local influencers to reach a wider audience. Our website offers online ordering, loyalty programs, and exclusive deals to incentivize customer engagement and repeat purchases."
  },
  {
    question: "What are your projected revenue and growth plans for the next 2-3 years?",
    answer: "We project a 20% annual revenue growth based on expanding our customer base through online marketing and building a strong brand reputation. Our focus will be on increasing online sales, opening a third store in a new location, and exploring partnerships with local businesses."
  },
  {
    question: "How do you plan to manage the logistics and delivery operations for your online orders, ensuring customer satisfaction?",
    answer: "We have established a dedicated delivery team and partnered with a reputable logistics provider to guarantee timely and efficient delivery. We offer a variety of delivery slots, real-time order tracking, and customer support to ensure a seamless online shopping experience."
  },
  {
    question: "What are the key financial metrics you will track to measure the success of your business and what are your exit strategies?",
    answer: "We will monitor key metrics like customer acquisition cost, conversion rate, average order value, and customer lifetime value to assess our performance. Our exit strategy includes potential acquisition by a larger grocery chain, an IPO, or a strategic partnership to expand our reach and market share."
  }
];


function Questions({mockinterviewQuestions,activeQuestion}) {



  const textToSpeech=(text)=>{
    if('speechSynthesis' in window){
      const speech=new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert("sorry! your browser doesnot support text to speech")
    }
  }

  console.log(mockinterviewQuestions)
  return (
    <>
    <div className='p-5 border rounded-lg my-10' >

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {mockinterviewQuestions&&mockinterviewQuestions.map((question,index)=>(
            <h2 className={`p-2 bg-secondary rounded-full text-sm md:text-sm text-center cursor-pointer ${activeQuestion==index&&'bg-emerald-300  text-white'}`}>Question #{index+1}</h2>
        ))
        }
       
        </div>
        <h2 className='my-5 text-md md:text-lg'>{mockinterviewQuestions&&mockinterviewQuestions[activeQuestion]?.question}</h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockinterviewQuestions[activeQuestion]?.question)}/>

        <div className='border rounded-lg p-5 bg-blue-100  mt-20' >
          <h2 className='flex gap-2 items-center text-blue-700'>
            <Lightbulb/>
            <strong>Note:</strong>
          </h2>
          <h2 className='text-sm text-blue-600 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
        </div>
    </div>
    </>
  )
}

export default Questions