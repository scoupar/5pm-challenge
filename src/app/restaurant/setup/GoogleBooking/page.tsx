import BookingInfo from "./BookingInfo";
import EnableForm from "./EnableForm";

export default function simpleERB() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-10 mb-20 py-4">
        <div className="flex mx-8 justify-between">
          <h1 className="text-2xl font-bold leading-7">Google Booking</h1>
          <a className="backbtn inline-flex items-center px-4 border border-gray-300 shadow-sm text-base font-medium rounded-md hover:bg-gray-50 active:bg-gray-50 active:text=gray-800 focus:outline-none">
            Back
          </a>
        </div>
        <div className="flex flex-col-reverse md:flex-row ">
          <EnableForm />
          <BookingInfo />
        </div>
      </div>
    </main>
  );
}
