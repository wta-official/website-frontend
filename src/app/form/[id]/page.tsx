"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import axios from "axios";
import { format } from "date-fns";
import { ArrowRight, CalendarIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  event: string;
  date: string;
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
        aria-required={true}
      />
    </div>
  );
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
        aria-required={false}
      />
    </div>
  );
};

const Form: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    note: "",
  });
  console.log(process.env.NEXT_PUBLIC_WTA_API_URL);

  const handleChange =
    (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill out all required fields.");
      return;
    }

    // Combine form data with the talent ID
    const payload = {
      talent: id,
      ...formData,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_WTA_API_URL}/bookings/`,
        {
          talent: payload.talent,
          fullname: payload.name,
          email: payload.email,
          phone: payload.phone,
          event_name: payload.event,
          event_date: payload.date,
          additional_notes: payload.note,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("Booking successful:", response.data);
      alert("Booking submitted successfully!");
    } catch (error: any) {
      console.log(error.response);
      if (axios.isAxiosError(error) && error.response) {
        const status = error.response.status;
        if (status >= 400 && status < 500) {
          alert(error.response.data?.event_date || "A client error occurred.");
        }
      } else {
        alert("An error occurred while submitting the booking.");
      }
    }
  };

  const formInputs = [
    { label: "Full Name", field: "name" },
    { label: "Email Address", field: "email" },
    { label: "Phone Number", field: "phone" },
    { label: "Event Name", field: "event" },
  ];

  return (
    <div className="mt-40 pb-20 bg-white text-black p-4 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="w-full md:w-2/4 max-w-[786px]"
      >
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

          {/* Date Picker with Label */}
          <div className="relative">
            <label
              htmlFor="date"
              className={`absolute left-2 top-0 flex items-center text-gray-500 transition-all duration-200 ${
                formData.date
                  ? "text-sm -translate-y-4 inline-block"
                  : "text-base translate-y-0 hidden"
              }`}
            >
              Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full px-3 py-6 text-left font-normal text-muted-foreground hover:bg-transparent rounded-md border",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  {formData.date ? (
                    format(new Date(formData.date), "PPP")
                  ) : (
                    <span className="text-gray-600">Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-4 bg-white border rounded-lg shadow-md">
                <Calendar
                  mode="single"
                  selected={formData.date ? new Date(formData.date) : undefined}
                  onSelect={(date) =>
                    setFormData((prev) => ({
                      ...prev,
                      date: date ? format(date, "yyyy-MM-dd") : "",
                    }))
                  }
                  disabled={(date) => date < new Date("1900-01-01")} // Only disables dates before 1900
                />
              </PopoverContent>
            </Popover>
          </div>

          <TextAreaField
            label="Additional Note"
            value={formData.note || ""}
            onChange={handleChange("note")}
          />
        </fieldset>

        <Button
          type="submit"
          className="bg-black text-white w-full p-6 mt-6 hover:bg-gray-800 transition duration-300 rounded-md"
        >
          BOOK THIS ARTIST <ArrowRight />
        </Button>
      </form>
    </div>
  );
};

export default Form;
