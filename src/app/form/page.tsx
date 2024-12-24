// "use client";

// import { Input } from "@/components/ui/input";
// import React, { useState } from "react";

// const Form = () => {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div className="bg-white text-black p-4">
//       <form action="">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-xl font-semibold">Contact Information</h1>
//           <button type="button" className="text-red-500 font-bold">
//             X
//           </button>
//         </div>

//         <div className="relative">
//           {/* Label */}
//           <label
//             htmlFor="name"
//             className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 ${
//               inputValue ? "text-sm -translate-y-7" : "text-base translate-y-0"
//             }`}
//           >
//             Full Name
//           </label>
//           {/* Input */}
//           <Input
//             type="text"
//             id="name"
//             value={inputValue}
//             onChange={handleInputChange}
//             className="w-full px-2 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;
