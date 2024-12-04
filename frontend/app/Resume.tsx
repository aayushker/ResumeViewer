import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      {/* Embed the PDF */}
      <embed
        src="/Aayushker_Resume.pdf"
        type="application/pdf"
        className="w-full h-full flex-1"
      />
    </div>
  );
};

export default Resume;