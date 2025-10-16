"use client";

import { NewConferenceForm } from "../modules/forms/new-conference-form/NewConferenceForm";
import { useState } from "react";

export default function Header() {
  const [isNewConferenceFormOpen, setIsNewConferenceFormOpen] = useState(false);

  const handleAddConference = () => {
    setIsNewConferenceFormOpen(true);
  };

  return (
    <header className="h-18 bg-[#171a2e] px-16 flex items-center">
      <h1 className="text-white font-semibold">AttendIT</h1>

      {/* <button
        className="ml-auto bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors duration-200 cursor-pointer"
        type="button"
        onClick={handleAddConference}
      >
        Add Conference
      </button> */}

      {isNewConferenceFormOpen && (
        <NewConferenceForm onClose={() => setIsNewConferenceFormOpen(false)} />
      )}
    </header>
  );
}
