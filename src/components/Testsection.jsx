import React, { useState } from 'react';

const MyComponent = () => {
  // Initialize the state for the class name
  const [className, setClassName] = useState("bg-slate-50");

  // Function to toggle the class name on button click
  const toggleClass = () => {
    setClassName((prevClassName) =>
    //   prevClassName === "bg-slate-50" ? "bg-slate-500" : "bg-slate-50";
      {console.log("Hello Friend!!");}
    );
  };

  return (
    <div>
      {/* The div where class will change */}
      <div className={`flex h-4 ${className}`}>
        {/* Your content here */}
        This div's class name is: {className}
      </div>

      {/* Button to toggle the class */}
      <button  class="text-3xl flex gap-6 md:hidden cursor-pointer ml-[18%]" onClick={toggleClass}>
      <ion-icon className="cursor-pointer" name="menu-outline"></ion-icon></button>
    </div>
  );
};

export default MyComponent;
