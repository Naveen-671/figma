"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import UserMenu from "~/components/dashboard/UserMenu";

export default function MobileSidebar({ email }: { email: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-end border-b border-gray-200 bg-white px-4 py-2 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="text-gray-600 hover:text-gray-800"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-30"
            onClick={() => setOpen(false)}
          />
          <div className="ml-auto h-full w-64 bg-white p-4 shadow-lg">
            <button
              className="mb-4 text-sm text-blue-600 hover:underline"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <UserMenu email={email} />
          </div>
        </div>
      )}
    </>
  );
}
