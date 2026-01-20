export default function ContactForm({ form, setForm, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Add / Edit Contact
      </h2>

      <input
        required
        type="text"
        value={form.firstName}
        onChange={(e) =>
          setForm({ ...form, firstName: e.target.value })
        }
        placeholder="First Name"
        className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />

      <input
        required
        type="text"
        value={form.lastName}
        onChange={(e) =>
          setForm({ ...form, lastName: e.target.value })
        }
        placeholder="Last Name"
        className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />

      <input
        required
        type="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        placeholder="Email"
        className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />

      <input
        required
        type="text"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
        placeholder="Phone"
        className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        rows="3"
        value={form.address}
        onChange={(e) =>
          setForm({ ...form, address: e.target.value })
        }
        placeholder="Address"
        className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Save Contact
      </button>
    </form>
  );
}
