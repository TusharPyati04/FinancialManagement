import { useState } from "react";
import { FaUserShield, FaUserTie, FaCalculator, FaGraduationCap } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";

export default function LoginPage() {
  const [role, setRole] = useState("");

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
        <div className="p-6 bg-white shadow-md rounded-lg bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
          <div className="flex items-center mb-4 ">
            <IoSchoolOutline className="text-3xl text-white mr-2" />
            <h1 className="text-2xl font-semibold text-white">EduFinance Manager</h1>
          </div>
          <p className="text-justify max-w-md text-white">
            Streamline your educational institution's financial operations with our comprehensive management system.
          </p>
          <div className="flex gap-14 text-white mt-10">
          <div>
            Secure Acess
          </div>
          <div>
            Real-time Analytics
          </div>
          <div>
            Multi-user Support
          </div>
        </div>
        </div>
      </div>



      <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
        <h2 className="text-2xl font-semibold mb-2 text-white">Welcome</h2>
        <p className="text-white mb-6">Please select your role and sign in</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className={`p-3 border rounded-md flex items-center justify-center gap-2 ${role === 'Admin' ? ' text-white' : 'bg-gray-200'} bg-gray-800 hover:bg-gray-700 text-white shadow-md transition duration-200`} onClick={() => setRole("Admin")}>
            <FaUserShield /> Admin
          </button>
          <button className={`p-3 border rounded-md flex items-center justify-center gap-2 ${role === 'Staff' ?  'text-white' : 'bg-gray-200'} bg-gray-800 hover:bg-gray-700 text-white shadow-md transition duration-200`} onClick={() => setRole("Staff")}>
            <FaUserTie /> Staff
          </button>
          <button className={`p-3 border rounded-md flex items-center justify-center gap-2 ${role === 'Accountant' ? ' text-white' : 'bg-gray-200'} bg-gray-800 hover:bg-gray-700 text-white shadow-md transition duration-200`} onClick={() => setRole("Accountant")}>
            <FaCalculator /> Accountant
          </button>
          <button className={`p-3 border rounded-md flex items-center justify-center gap-2 ${role === 'Student' ? ' text-white' : 'bg-gray-200'} bg-gray-800 hover:bg-gray-700 text-white shadow-md transition duration-200`} onClick={() => setRole("Student")}>
            <FaGraduationCap /> Student
          </button>
        </div>

        <input type="email" placeholder="name@institution.edu" className="w-80 text-white p-3 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 border rounded-md mb-4" />
        <input type="password" placeholder="Password" className="w-80 p-3 text-white bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 border rounded-md mb-4" />
        
        <div className="flex justify-between w-80 text-sm text-white mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-white hover:underline">Forgot password?</a>
        </div>
        
        <button className="w-80 p-3 bg-gray-800 text-white rounded-md hover:bg-gray-900">Sign in</button>
        <p className="mt-4 text-sm text-white">Need technical support? <a href="#" className="text-white hover:underline">Contact IT Help Desk</a></p>
      </div>
    </div>
  );
}
