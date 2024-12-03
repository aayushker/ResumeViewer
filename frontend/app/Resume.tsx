import React from "react";

const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      {/* Embed the PDF */}
      <embed
        src="/Aayushker_Resume.pdf"
        type="application/pdf"
        width="100%"
        height="1080px"
      />
    </div>
  );
};

export default Resume;
