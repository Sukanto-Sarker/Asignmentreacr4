import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";

export default function ContactModal({
  contact,
  mode,
  onClose,
}) {
  const { updateContact } = useContext(ContactContext);
  const [form, setForm] = useState({ ...contact });

  const submit = (e) => {
    e.preventDefault();
    updateContact(contact.id, form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {mode === "view" ? (
          <>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Contact Details
            </h2>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {contact.firstName} {contact.lastName}
              </p>
              <p>
                <span className="font-medium">Email:</span> {contact.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {contact.phone}
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={onClose}
                className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Edit Contact
            </h2>

            <input
              className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First name"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />

            <input
              className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />

            <input
              className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
