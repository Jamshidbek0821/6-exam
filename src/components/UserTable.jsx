// import {ContentImg1} from "../assets/images"
import { EditIcon, TrashIcon } from "../assets/icons";

const UserTable = ({
  listToShow,
  showDeleted,
  toggleStatus,
  handleDelete,
  handleRestore,
  onEdit
}) => {
  return (
    <div className="pt-5 overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-gray-400 text-[12px] border-b border-gray-500">
            <th className="py-2 text-left">AUTHOR</th>
            <th className="py-2 text-left">FUNCTION</th>
            <th className="py-2 text-left">STATUS</th>
            <th className="py-2 text-left">EMPLOYED</th>
            <th className="py-2 text-left">ACTION</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {listToShow.length > 0 ? (
            listToShow.map((user) => (
              <tr key={user.id} className="border-b text-gray-500">
      
                <td className="py-2">
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={user.img }
                      alt="avatar"
                      className="w-[40px] h-[40px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#FFFFFF]">
                        {user.name} {user.surname}
                      </p>
                      <span className="text-[#A0AEC0]">{user.email}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <p className="text-[#FFFFFF]">{user.functionn}</p>
                  <span className="text-[#A0AEC0]">{user.work}</span>
                </td>

                <td>
                  {!showDeleted ? (
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className={`cursor-pointer rounded-[8px] text-[14px] px-[10px] opacity-[70%] hover:opacity-100 transition ${
                        user.status === "Online"
                          ? "bg-[#01B574] text-white border border-[#01B574]"
                          : "border border-white text-white"
                      }`}
                    >
                      {user.status}
                    </button>
                  ) : (
                    <span>{user.status}</span>
                  )}
                </td>
                <td>
                  <span className="text-[#FFFFFF]">{user.date}</span>
                </td>
                <td className="flex gap-4 pt-[18px]">
                  {!showDeleted ? (
                    <>
                      <button
                        onClick={() => onEdit(user)}
                        className="hover:opacity-70"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="hover:opacity-70"
                      >
                        <TrashIcon />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleRestore(user.id)}
                      className="text-green-500 hover:opacity-[70%]"
                    >
                      Restore
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4">
                {showDeleted ? "No deleted users" : "No active users"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
