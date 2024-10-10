import React from 'react'

function Rules({inclusion, exclusion}) {
  return (
    <div className="px-4 md:px-40 flex flex-col lg:flex-row bg-gray-100 justify-around pb-5">
        {[
            {
                id: "tb-modal",
                title: "Inclusion & Exclusion",
                content: (
                    <>
                        <h1 className="text-gray-600">Inclusions:</h1>
                        <ul className="text-gray-500 text-sm space-y-2">
                            {inclusion.map((item) => (
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <h1 className="text-gray-600 mt-4">Exclusions:</h1>
                        <ul className="text-gray-500 text-sm space-y-2">
                            {exclusion.map((item) => (
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                ),
            },
            {
                id: "tw-modal",
                title: "Cancellation Policy",
                content: (
                    <p className="text-gray-500 text-sm">
                        We are not liable for refunds in the event of customer-initiated cancellations, visa rejections, missed flights, or weather-related issues. Payments made to hotels and our team are non-refundable as they are committed in advance to secure your spot. Refunds will only be issued if we cancel the tour.
                    </p>
                ),
            },
            {
                id: "ta-modal",
                title: "Terms & Conditions",
                content: (
                    <ul className="text-gray-500 text-sm space-y-2">
                        {[
                            "Group Tour Minimum Requirement: The rates provided are applicable for group tours with a minimum of 10 participants. The tour will only proceed if at least 10 participants are confirmed. If we are unable to secure the required number of participants, we will initiate a full refund to all booked customers.",
                            "Travel Insurance: It is mandatory for customers to purchase travel insurance before applying for a visa. We strongly advise securing insurance to cover any potential risks. Should you require assistance with purchasing travel insurance, please contact us, and we will be happy to assist.",
                            "Flight Booking: Customers are responsible for booking their own flights. If you wish for us to handle your flight bookings, please contact us in advance and arrange for payment of the flight ticket price upfront.",
                            "Behavioral Conduct: We expect all customers to behave respectfully and considerately. Any customer exhibiting rude behavior, creating disturbances, or disrupting the experience for other participants will be asked to leave the tour. In such cases, we will arrange a cab to Delhi Airport but will not provide further assistance.",
                        ].map((item) => (
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                ),
            },
        ].map(({ id, title, content }) => (
            <div key={id} className="mt-10 font-quicksand font-semibold text-lg">
                <div>
                    <label htmlFor={id} className="flex flex-row gap-10 items-center cursor-pointer">
                        <h1>{title}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </label>
                </div>
                <input type="checkbox" id={id} className="peer fixed appearance-none opacity-0" />
                <label htmlFor={id} className="pointer-events-none invisible fixed inset-0 flex items-center justify-center overflow-hidden bg-slate-700/30 opacity-0 transition duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
                    <div className="max-h-[calc(100vh-5em)] h-fit max-w-lg scale-90 overflow-y-auto rounded-md bg-white p-6 text-black shadow-2xl transition">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-xl font-semibold">{title}</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="h-0.5 bg-gray-200 my-4"></div>
                        {content}
                    </div>
                </label>
            </div>
        ))}
    </div>
  )
}

export default Rules
