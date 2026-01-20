import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

export default function ContactRow({
  contact,
  index,
  onEdit,
  onView,
}) {
  const { deleteContact } = useContext(ContactContext);

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-4 py-2 text-sm text-gray-600">
        {index + 1}
      </td>

      <td className="px-4 py-2 text-sm font-medium text-gray-800">
        {contact.firstName}
      </td>

      <td className="px-4 py-2 text-sm text-gray-800">
        {contact.lastName}
      </td>

      <td className="px-4 py-2 text-sm text-gray-600">
        {contact.email}
      </td>

      <td className="px-4 py-2 text-sm text-gray-600">
        {contact.phone}
      </td>

      <td className="px-4 py-2">
        <div className="flex gap-2">
          {/* view sob  */}
          <button
            onClick={() => onView(contact)}
            className="px-2 py-1 text-sm rounded bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
            title="View"
          >
            👁
          </button>

          {/* Edir korar */}
          <button
            onClick={() => onEdit(contact)}
            className="px-2 py-1 text-sm rounded bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition"
            title="Edit"
          >
            ✏
          </button>

          {/* Delete korar  */}
          <button
            onClick={() => deleteContact(contact.id)}
            className="px-2 py-1 text-sm rounded bg-red-100 text-red-600 hover:bg-red-200 transition"
            title="Delete"
          >
            ✖
          </button>
        </div>
      </td>
    </tr>
  );
}
