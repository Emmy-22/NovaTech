import React from 'react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const faq = [
  {
    question: "How long does delivery take?",
    ans: "We process and ship orders within 24 hours. Delivery usually takes 2–5 business days, depending on your location. You’ll also receive tracking details once your order is shipped.",
  },
   {
    question: " Are all your gadgets original and brand new?",
    ans: "Yes! Every product on NovaTech is 100% authentic and comes sealed directly from the manufacturer. We do not sell refurbished or used gadgets.",
  },
   {
      question: "Do you offer a warranty on your products?",
      ans: "Absolutely. All gadgets come with a 1-year manufacturer’s warranty, and we also offer an optional extended warranty plan for extra peace of mind.",
  },
   {
    question: "Can I return or exchange a product?",
    ans: "Yes, you can return or exchange your order within 7 days of delivery as long as it’s unused and in its original packaging. Just reach out to our support team to start the process.",
  }, 
   {
    question: "What payment methods do you accept?",
    ans: "We accept credit/debit cards, PayPal, Apple Pay, and bank transfers. All payments are securely processed with full encryption for your safety.",
  },
]
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (
    <div id="FAQ" className='bg-[#2a2a2a] min-h-screen py-20 px-3 md:px-15'>
      <h4 className='text-white text-center text-4xl font-semibold'>Question? <span className='text-[#D79B63]'>Look here.</span></h4>

    <div className='mt-10 max-w-3xl mx-auto space-y-5'>
      {
      faq.map((item, i) => (
      <div 
      key={i}
      className='bg-[#1e1e1e] text-white rounded-lg p-5 cursor-pointer transition-all duration-300'
      onClick={() => toggleFaq(i)}
      >
        <div className='flex justify-between items-center'>
              <p className='font-semibold text-lg'>{item.question}</p>
              {openIndex === i ? (
                <FaChevronUp className='text-white transition-transform duration-300' />
              ) : (
                <FaChevronDown className='text-white transition-transform duration-300'/>
              )}
            </div>

            {openIndex === i && (
              <p className='mt-3 text-gray-300 leading-relaxed text-[15px]'>
                {item.ans}
              </p>
            )}
      </div>
     ))}
     </div>
    </div>
  )
}

export default FAQ
