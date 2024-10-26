import React from "react";

interface InputFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = "Your email address",
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-[56px] bg-white rounded-[240px] border border-gray-300 px-4 py-2 text-xl text-[#000000]  font-normal outline-none focus:border-[#65E4A3] hover:border-[#65E4A3] transition-colors"
    />
  );
};

export default InputField;
