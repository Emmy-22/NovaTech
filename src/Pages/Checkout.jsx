import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaymentModal from "../Components/PaymentModal";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const validateForm = () => {
  let newErrors = {};

  if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
  if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
  if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number";
  if (!formData.address.trim()) newErrors.address = "Address is required";

  if (!formData.cardName.trim()) newErrors.cardName = "Name on card is required";
  if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) newErrors.cardNumber = "Invalid card number";
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) newErrors.expiry = "Use MM/YY format";
  if (!/^\d{3}$/.test(formData.cvv)) newErrors.cvv = "Invalid CVV";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handlePayment = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setTimeout(() => {
      setIsPaymentSuccess(true);
    }, 1000);
  };

  const handleChange = (e) => {
    const {  id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value}));
  }

  const handleCardNumberChange = (e) => {
  let value = e.target.value.replace(/\D/g, ""); // remove non-numbers
  value = value.slice(0, 16); // limit to 16 digits
  value = value.replace(/(.{4})/g, "$1 ").trim(); // add space every 4 digits
  setFormData((prev) => ({ ...prev, cardNumber: value }));
};

const handleExpiryChange = (e) => {
  let value = e.target.value.replace(/\D/g, ""); // remove non-numbers
  if (value.length >= 3) {
    value = value.slice(0, 4); // limit to 4 digits total (MMYY)
    value = value.replace(/^(\d{2})(\d{0,2})$/, "$1/$2"); // add slash after MM
  }
  setFormData((prev) => ({ ...prev, expiry: value }));
};



  const location = useLocation();
  const total = location.state?.total || 0;

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-28 pb-10 px-4 md:px-16 relative">
      {/* Header */}
      <header className="bg-[#191f28] fixed inset-x-0 top-0 z-30 h-20 flex items-center justify-between px-4 md:px-16 shadow-md">
        <Link
          to="/home"
          className="text-white font-bold text-3xl"
        >
          NovaTech
        </Link>
      </header>

      <main className="flex flex-col lg:flex-row justify-between gap-10 mt-6">
        {/* Address Info */}
        <section className="lg:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold mb-1">Address Information</h2>
          <p className="text-gray-400 mb-4">
            Fill in your address information carefully.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="firstname" className="block mb-1 text-gray-300">
                First Name
              </label>
              <input
                id="firstname"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full h-11 px-4 border border-gray-700 rounded-lg bg-[#1E1E1E] focus:ring-2 focus:ring-[#C9A36A] outline-none text-white"
              />
              {errors.firstname && <p className="text-red-400 text-sm">{errors.firstname}</p>}
            </div>
            <div>
              <label htmlFor="lastname" className="block mb-1 text-gray-300">
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                 value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full h-11 px-4 border border-gray-700 rounded-lg bg-[#1E1E1E] focus:ring-2 focus:ring-[#C9A36A] outline-none text-white"
              />
              {errors.lastname && <p className="text-red-400 text-sm">{errors.lastname}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 text-gray-300">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                 value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full h-11 px-4 border border-gray-700 rounded-lg bg-[#1E1E1E] focus:ring-2 focus:ring-[#C9A36A] outline-none text-white"
              />
              {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="address" className="block mb-1 text-gray-300">
                Home Address
              </label>
              <input
                id="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your home address"
                className="w-full h-11 px-4 border border-gray-700 rounded-lg bg-[#1E1E1E] focus:ring-2 focus:ring-[#C9A36A] outline-none text-white"
              />
              {errors.address && <p className="text-red-400 text-sm">{errors.address}</p>}
            </div>
          </form>
        </section>

        {/* Payment Section */}
        <section className="lg:w-1/2 bg-[#1E1E1E] rounded-lg p-6 space-y-5 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Payment Details</h2>

          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block mb-1 text-gray-300">
                Name on Card
              </label>
              <input
                id="cardName"
                type="text"
                 value={formData.cardName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full h-11 px-4 border border-gray-700 rounded-lg bg-[#121212] focus:ring-2 focus:ring-[#C9A36A] outline-none text-white"
                required
              />
              {errors.cardName && <p className="text-red-400 text-sm">{errors.cardName}</p>}
            </div>

            <div>
              <label htmlFor="cardNumber" className="block mb-1 text-gray-300">
                Credit Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
               className="w-full h-11 px-4 border border-gray-700 rounded-lg bg-[#121212] focus:ring-2 focus:ring-[#C9A36A] outline-none text-white"
                  required
              />
              {errors.cardNumber && <p className="text-red-400 text-sm">{errors.cardNumber}</p>}
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="expiry" className="block mb-1 text-gray-300">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  value={formData.expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className="w-full h-11 px-4 border border-gray-700 rounded-lg bg-[#121212] focus:ring-2 focus:ring-[#C9A36A] outline-none text-white"
                  required
                />
                {errors.expiry && <p className="text-red-400 text-sm">{errors.expiry}</p>}
              </div>
              <div className="flex-1">
                <label htmlFor="cvv" className="block mb-1 text-gray-300">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="password"
                  placeholder="XXX"
                  maxLength="3"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-700 rounded-lg bg-[#121212] focus:ring-2 focus:ring-[#C9A36A] outline-none text-white"
                  required
                />
                {errors.cvv && <p className="text-red-400 text-sm">{errors.cvv}</p>}
              </div>
            </div>

           
              <div className="flex justify-between font-bold text-lg">
                <p>Total Amount</p>
                <p>${total.toFixed(2)}</p>
              </div>
            

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-lg font-semibold bg-[#D79B63] text-black hover:bg-[#e0a974] focus:ring-4 focus:ring-[#C9A36A] transition"
            >
              Confirm Payment
            </button>
          </form>
        </section>
      </main>

      {/* Payment Success Modal */}
      {isPaymentSuccess && (
       <PaymentModal />
      )}
    </div>
  );
};

export default Checkout;