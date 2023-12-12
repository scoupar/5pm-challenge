export default function BookingInfo() {
  const infoParagraphs: Array<string> = [
    "simpleERB has partnered with 'Reserve with Google' to optimize your online booking presence so that you have the maximum chance of getting a booking when people do Google searches",
    "Your booking diary will appear in your 'Google My Business Panel' without the customer having to leave the Google search results page and the booking will ingrate into your diary",
    "Please note the integration is not a live feed and any availability changes made in simpleERB are only passed to the Google integration for 31 days availability, once per day at 11:30pm GMT and is live on Google from 1:30am GMT.",
    "You can enable or disable this feature at any time. When you remove availability in the simpleERB widget settings, the availability will disappear from Google as well. See our FAQ’s article here for further information.",
    "You can still generate simpleERB bookings from Google by adding your widget URL to your Google Business Knowledge panel. See our article here.",
  ];

  return (
    <div className="md:w-1/2 sm:ml-8 mt-8">
      <div className="bg-white p-4 md:w-1/8 bg-gray-200 rounded border-purple-500 border-t-4 shadow sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900 pb-4">
          Google Booking
        </h2>
        <br></br>
        {infoParagraphs.map(function (paragraph: string) {
          return (
            <>
              <p className="pb-4">{paragraph}</p>
              <br></br>
            </>
          );
        })}

        <h3 className="font-bold">
          Important information about card capture / payment rules on Google
          bookings.
        </h3>
        <br></br>
        <p>
          Please note that if you have payment / credit card capture feature
          enabled for enforced rule requirements, the Reserve with Google
          feature does not enforce this for customers at the time of booking.
          The customer will receive an email with the link to securely supply
          requirements. If the requirement is not met by the specified due date
          outlined in the rule, this will be auto-cancelled in your diary. You
          can monitor the status of payment required bookings here.
        </p>
      </div>
    </div>
  );
}
