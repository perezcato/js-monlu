const members = [
  {
    name: "Alice",
    status: "Active",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Bob",
    status: "Inactive",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Carol",
    status: "Active",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAT3tNhEcjdTilbXG8fmhZzUdh_2MDbluRA&usqp=CAU",
  },
];

export default function TableComponent() {
  return (
    <div className="w-full bg-white m-auto p-3">
      <table className="w-full table-fixed">
        <tbody>
          <tr className="bg-gray-200">
            <td className="w-1/3 py-2">#</td>
            <td className="w-1/3 py-2">Name</td>
            <td className="w-1/3 py-2">Members</td>
            <td className="w-1/3 py-2">Status</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="border-t border-b py-2">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <span className="text-sm">John Doe</span>
                  <span className="text-xs text-gray-600">Active</span>
                </div>
              </div>
            </td>
            <td className="border-t border-b py-2">
              <div className="flex -space-x-2">
                {members.map((member, index) => (
                  <img
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={member.image}
                    alt={member.name}
                  />
                ))}
              </div>
            </td>
            <td>
              <p className="text-gray-500">In progress</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
