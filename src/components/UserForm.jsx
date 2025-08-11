// import { ContentImg1 } from "../assets/images";

const UserForm = ({
  newUsers,
  handleChange,
  handleImgUpload,
  handleSubmit,
  addUserId,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="content-bg p-6 rounded-[10px] w-[500px] border-[#656B8C] border-[2px]">
        <form autoComplete="off" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative w-[100px] h-[100px] mx-auto rounded-full overflow-hidden border-[#656B8C] border-[2px]">
            <input
              type="file"
              name="img"
              onChange={handleImgUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {newUsers.img ? (
              <img src={newUsers.img} alt="avatar" className="w-[100px] h-[100px] object-cover rounded-full" />
            ) : ""}
          </div>

          <input
            type="text"
            name="name"
            placeholder="Ism kiriting"
            value={newUsers.name}
            onChange={handleChange}
            className="rounded-[10px] px-3 py-2 border-[#656B8C] border-[2px] text-[#656B8C]"
          />
          <input
            type="text"
            name="surname"
            placeholder="Familiya kiriting"
            value={newUsers.surname}
            onChange={handleChange}
            className="border-[#656B8C] border-[2px] rounded-[10px] px-3 py-2 text-[#656B8C]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email kiriting"
            value={newUsers.email}
            onChange={handleChange}
            className="border-[#656B8C] border-[2px] rounded-[10px] px-3 py-2 text-[#656B8C]"
          />

          <select
            name="functionn"
            value={newUsers.functionn}
            onChange={handleChange}
            className="border-[#656B8C] border-[2px] rounded-[10px] px-3 py-2 text-[#656B8C]"
          >
            {["Manager", "Programmer", "Executive", "Designer"].map((role) => (
              <option key={role} className="bg-blue-950 text-white" value={role}>
                {role}
              </option>
            ))}
          </select>

          <select
            name="work"
            value={newUsers.work}
            onChange={handleChange}
            className="border-[#656B8C] border-[2px] rounded-[10px] px-3 py-2 text-[#656B8C]"
          >
            {["Organization", "Projects", "UI/UX Design", "Developer"].map((work) => (
              <option key={work} className="bg-blue-950 text-white" value={work}>
                {work}
              </option>
            ))}
          </select>

          <select
            name="status"
            value={newUsers.status}
            onChange={handleChange}
            className="border-[#656B8C] text-[#656B8C] border-[2px] rounded-[10px] px-3 py-2"
          >
            {["Online", "Offline"].map((status) => (
              <option key={status} className="bg-blue-950 text-white" value={status}>
                {status}
              </option>
            ))}
          </select>

          <div className="flex gap-2 justify-end">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded-[10px] hover:bg-blue-800"
            >
              {addUserId ? "Update" : "Add"}
            </button>
            <button
              onClick={onClose}
              type="button"
              className="bg-gray-700 text-white px-4 py-2 rounded-[10px] hover:bg-gray-800"
            >
              Exit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
