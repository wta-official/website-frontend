"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  event: string;
  date: string;
  eventType: string;
  note?: string; // Optional
}

// Props for InputField component
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Component for Input Fields
const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  if (label === "Date") {
    return (
      <div className="relative min-w-96">
        <label
          htmlFor={id}
          className={`absolute left-2 top-0 h-full flex items-center text-gray-500 transition-all duration-200 ${
            value ? "text-sm -translate-y-8 opacity-1" : "text-base translate-y-0 opacity-0"
          }`}
        >
          {label}
        </label>
        <Input
          type="date"
          id={id}
          value={value}
          onChange={onChange}
          className="w-full px-2 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  } else {
    return (
      <div className="relative min-w-96">
        <label
          htmlFor={id}
          className={`absolute left-2 top-0 h-full flex items-center text-gray-500 transition-all duration-200 ${
            value ? "text-sm -translate-y-8" : "text-base translate-y-0"
          }`}
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          className="w-full px-2 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
};

// Props for TextAreaField component
interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

// Component for Text Area Fields
const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="relative min-w-96">
      <label
        htmlFor={id}
        className={`absolute left-2 top-0 flex items-center text-gray-500 transition-all duration-200 ${
          value ? "text-sm -translate-y-6" : "text-base translate-y-0"
        }`}
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className="w-full min-h-52 px-2 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    eventType: "",
    note: "",
  });

  const handleChange =
    (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const formInputs = [
    { label: "Full Name", field: "name" },
    { label: "Email Address", field: "email" },
    { label: "Phone Number", field: "phone" },
    { label: "Event Name", field: "event" },
    { label: "Date", field: "date" },
    { label: "Event Type", field: "eventType" },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Basic validation example
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill out all required fields.");
      return;
    }

    // Add API submission logic here
  };

  return (
    <div className="bg-white text-black p-4 min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full md:w-2/4 max-w-[786px]">
        <fieldset className="flex flex-col gap-8">
          <legend className="mb-10 text-2xl md:text-4xl font-semibold">
            Contact Information
          </legend>

          {formInputs.map(({ label, field }) => (
            <InputField
              key={field}
              label={label}
              value={formData[field as keyof FormData] || ""}
              onChange={handleChange(field as keyof FormData)}
            />
          ))}

          <TextAreaField
            label="Additional Note"
            value={formData.note || ""}
            onChange={handleChange("note")}
          />
        </fieldset>

        <Button
          type="submit"
          className="bg-black text-white w-full p-6 mt-6 hover:bg-gray-800 transition duration-300"
        >
          BOOK THIS ARTIST <ArrowRight />
        </Button>
      </form>
    </div>
  );
};

export default Form;
