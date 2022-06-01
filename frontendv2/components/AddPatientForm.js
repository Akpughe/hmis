import React from 'react';

const AddPatientForm = () => {
  return (
    <form>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div class="mb-6 ">
          <label
            for="firstname"
            class="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            First name
          </label>

          <input
            type="text"
            name="firstname"
            class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="John "
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="lastname"
            class="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Last name
          </label>

          <input
            type="text"
            name="Last name"
            class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div class="mb-6">
          <label
            for="phonenumber"
            class="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Email
          </label>

          <input
            type="text"
            name="Last name"
            class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="jh@gmail.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="phonenumber"
            class="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Phone number
          </label>

          <input
            type="text"
            name="Last name"
            class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="09055935918"
            required
          />
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div class="mb-6">
          <label
            for="gender"
            class="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Gender
          </label>

          <select
            id="gender"
            class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
          >
            <option disabled>Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="mb-6">
          <label
            for="dob"
            class="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="24/11/2001"
            required
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div class="mb-6">
          <label
            for="gender"
            class="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Marital Status
          </label>

          <select
            id="gender"
            class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
          >
            <option disabled>Select a Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
        <div class="mb-6">
          <label
            for="dob"
            class="block mb-0.5 text-xs font-medium text-slate-900 "
          >
            Resident address
          </label>
          <input
            type="text"
            name="address"
            class="block bg-slate-200 p-4 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
            placeholder="House number, street, city, state, country"
            required
          />
        </div>
      </div>
      <div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div class="mb-6">
            <label
              for="password"
              class="block mb-0.5 text-xs font-medium text-slate-900 "
            >
              Password
            </label>

            <input
              type="password"
              name="Password"
              class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
              placeholder="••••••••••"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-0.5 text-xs font-medium text-slate-900 "
            >
              Confirm password
            </label>

            <input
              type="password"
              name="confirmPassword"
              class="block bg-slate-200 py-3 px-2 w-full text-sm text-gray-900 font-semibold rounded-md appearance-none   focus:outline-none focus:border focus:border-emerald-500 focus:ring-0  peer"
              placeholder="••••••••••"
              required
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add patient
      </button>
    </form>
  );
};

export default AddPatientForm;
