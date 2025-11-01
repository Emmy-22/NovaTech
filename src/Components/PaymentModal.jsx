import React from 'react'
import { Link } from 'react-router-dom'

const PaymentModal = () => {
  return (
    <div>
       <div
          className="fixed inset-0 bg-black/1sss backdrop-blur-sm flex items-center justify-center z-50 p-5"
          role="dialog"
          aria-labelledby="payment-success-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl shadow-lg text-center px-8 py-10 max-w-sm w-full">
            <div className="mx-auto bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 011.414-1.414L9 12.293l6.293-6.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h2 id="payment-success-title" className="text-2xl font-semibold text-black">
              Payment Successful 🎉
            </h2>
            <p className="text-gray-600 mt-2 mb-6">
              Your payment has been successfully processed. You can now go to the homepage and discover new products.
            </p>

            <Link
              to="/home"
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
    </div>
  )
}

export default PaymentModal
