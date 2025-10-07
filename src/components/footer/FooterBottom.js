import React from "react";

const FooterBottom = () => {
  return (
    <div className="w-full py-6">
      <p className="text-center text-white-700 text-sm">
        Copyright &copy; 2023 - {new Date().getFullYear()}. All rights reserved
        by <span className="text-blue-700 uppercase">Girish Balachary</span>
      </p>
    </div>
  );
};

export default FooterBottom;
