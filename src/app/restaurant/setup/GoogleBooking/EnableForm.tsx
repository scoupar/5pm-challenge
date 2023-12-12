"use client";
import TextEditor from "../../../../TextEditor.jsx";
import { useState } from "react";

export default function EnableForm() {
  const [enabled, setEnabled] = useState("false");

  // Select options
  const countryList = [
    { value: "1", label: "UK - Scotland" },
    { value: "2", label: "UK - England" },
    { value: "3", label: "UK - Wales" },
    { value: "4", label: "UK - Scotland" },
  ];

  const regionList = [
    { value: "1", label: "Aberdeen" },
    { value: "2", label: "Argyll" },
    { value: "3", label: "Armagh" },
    { value: "4", label: "Bedfordshire" },
  ];
  const cancellationTimes = [
    { value: "None", label: "None" },
    { value: "3600", label: "1 Hour" },
    { value: "7200", label: "2 Hours" },
    { value: "21600", label: "6 Hours" },
    { value: "43200", label: "12 Hours" },
    { value: "86400", label: "24 Hours" },
    { value: "172800", label: "48 Hours" },
    { value: "259200", label: "72 Hours" },
    { value: "604800", label: "7 Days" },
    { value: "1209600", label: "2 Weeks" },
  ];

  // Repeated Styles
  const requiredStyle = "text-sm leading-5 text-gray-500";
  const inputStyle =
    "outline-4 p-2 block w-full focus:outline-none shadow-sm border focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md text-box single-line";
  const labelStyle = "block text-sm font-medium leading-5 text-gray-700";

  return (
    <div className="md:w-1/2 sm:ml-8 mt-8 min-w-2xl">
      <div className="bg-white rounded shadow overflow-hidden">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Enable or Disable Google Maps Booking
          </h3>
        </div>
        <form className="px-6 py-4">
          <div className="bg-white inline-flex flex-row flex-auto py-3">
            <input
              name="radiobutton"
              className="h-5 w-5 text-green-600"
              type="radio"
              id="enable"
              value="true"
              onChange={(e) => setEnabled(e.target.value)}
            ></input>
            <label className="px-1 mr-1.5" htmlFor="enable">
              Enable
            </label>
            <input
              name="radiobutton"
              className="h-5 w-5 text-purple-400 "
              type="radio"
              id="disable"
              value="false"
              onChange={(e) => setEnabled(e.target.value)}
              defaultChecked
            ></input>
            <label className="px-1" htmlFor="disable">
              Disable
            </label>
          </div>
          {enabled === "true" ? (
            <div>
              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Name" className={labelStyle}>
                    Name - Required
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="Name"
                    name="name"
                    className={inputStyle}
                  />
                </div>
              </div>
              <div className="w-full max-w-md mb-6">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="flex justify-between">
                    <label htmlFor="PublicUrl" className={labelStyle}>
                      Public URL
                    </label>
                    <span className={requiredStyle}>Required</span>
                  </div>
                  <input
                    type="text"
                    id="PublicUrl"
                    name="PublicUrl"
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Phone" className={labelStyle}>
                    Phone
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Postcode" className={labelStyle}>
                    Postcode
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="Postcode"
                    name="Postcode"
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Locality" className={labelStyle}>
                    Locality
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="Locality"
                    name="Locality"
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Country" className={labelStyle}>
                    Country
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <select id="Country" name="Country" className={inputStyle}>
                    {countryList.map(function (country) {
                      return (
                        <>
                          <option key={country.value}>{country.label}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Region" className={labelStyle}>
                    Region
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <select id="Region" name="Region" className={inputStyle}>
                    {regionList.map(function (region) {
                      return (
                        <>
                          <option key={region.value}>{region.label}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Longitude" className={labelStyle}>
                    Longitude
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="Longitude"
                    name="Longitude"
                    className={inputStyle}
                    value="0.000000"
                  />
                </div>
              </div>
              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Latitude" className={labelStyle}>
                    Latitude
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="Latitude"
                    name="Latitude"
                    className={inputStyle}
                    value="0.000000"
                  />
                </div>
              </div>
              <label htmlFor="text-editor" className={labelStyle}>
                Google Booking Message
              </label>
              <TextEditor />
              <br></br>

              <div className="w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <label htmlFor="Cancellation" className={labelStyle}>
                    Cancellation in advance
                  </label>
                  <span className={requiredStyle}>Required</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <select
                    id="Cancellation"
                    name="Cancellation"
                    className={inputStyle}
                  >
                    {cancellationTimes.map(function (cancellation) {
                      return (
                        <>
                          <option key={cancellation.value}>
                            {cancellation.label}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          ) : null}
          <div className="mb-0 px-4 py-5 bg-gray-100 flex items-center justify-end">
            <button
              id="btnSave"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus: focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
