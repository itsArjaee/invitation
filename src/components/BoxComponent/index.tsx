import React from "react";

interface Props {
  children?: React.ReactNode;
  styles? : string
}

const BoxComponent = (props: Props) => {
  return (
    <div
      className={
       `  

       shadow-2xl
       bg-white
        w-full 
        max-w-[90%]         
        sm:max-w-[400px]    
        md:max-w-[500px]   
        lg:max-w-[900px]   
        px-4 py-6 
        mx-auto 
       
       ${props.styles}`
      }
    >
      {props.children}
    </div>
  );
};

export default BoxComponent;
