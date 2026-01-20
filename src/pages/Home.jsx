import { useContext, useState, useMemo } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactTable from "../components/ContactTable";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const { contacts } = useContext(ContactContext);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("default");
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState("");

  const filteredContacts = useMemo(() => {
    let data = [...contacts];


    if (query) {
      data = data.filter(c =>
        `${c.firstName} ${c.lastName} ${c.email} ${c.phone}`
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    }


    if (filter === "fname") {
      data.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    }

    if (filter === "lname") {
      data.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
    }

    if (filter === "oldest") {
      data.sort((a, b) => a.id - b.id);
    }

    return data;
  }, [contacts, query, filter]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">

  
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search contact..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-56 rounded-md border px-3 py-2 focus:ring-2 focus:ring-green-500"
        >
          <option value="default">Default</option>
          <option value="fname">First Name (A → Z)</option>
          <option value="lname">Last Name (A → Z)</option>
          <option value="oldest">Oldest To First</option>
        </select>
      </div>

      {/* TABLE / NO DATA */}
      {filteredContacts.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No Contact Information
        </div>
      ) : (
        <ContactTable
          contacts={filteredContacts}
          onEdit={(c) => { setSelected(c); setMode("edit"); }}
          onView={(c) => { setSelected(c); setMode("view"); }}
        />
      )}

      {selected && (
        <ContactModal
          contact={selected}
          mode={mode}
          onClose={() => setSelected(null)}
        />
      )}

    </div>
  );
}
