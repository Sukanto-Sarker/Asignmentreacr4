import ContactRow from "./ContactRow";

export default function ContactTable({
  contacts,
  onEdit,
  onView,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              #
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              First
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Last
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Email
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Phone
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {contacts.map((c, i) => (
            <ContactRow
              key={c.id}
              contact={c}
              index={i}
              onEdit={onEdit}
              onView={onView}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
