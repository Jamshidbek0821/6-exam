import React from "react";

const ProjectForm = ({
  newProject,
  handleChange,
  handleImageChange,
  handleSubmit,
  addProjectId,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="content-bg p-6 rounded-[10px] w-[400px] max-w-full border-[#656B8C] border-[2px]">
        <h2 className="text-white text-xl mb-4 text-center">
          {addProjectId ? "Edit Project" : "Add Project"}
        </h2>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="relative w-[100px] h-[100px] mx-auto rounded-full overflow-hidden border-[#656B8C] border-[2px]">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {newProject.img ? (
              <img
                src={newProject.img}
                alt="project"
                className="w-[100px] h-[100px] object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center text-[#656B8C] select-none">
                
              </div>
            )}
          </div>

          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={newProject.name}
            onChange={handleChange}
            className="rounded-[10px] px-3 py-2 border-[#656B8C] border-[2px] text-[#656B8C]"
            required
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget ($)"
            value={newProject.budget}
            onChange={handleChange}
            className="rounded-[10px] px-3 py-2 border-[#656B8C] border-[2px] text-[#656B8C]"
            required
          />

          <select
            name="status"
            value={newProject.status}
            onChange={handleChange}
            className="rounded-[10px] px-3 py-2 border-[#656B8C] border-[2px] text-[#656B8C]"
          >
            <option className="bg-blue-950 text-white" value="working">Working</option>
            <option className="bg-blue-950 text-white" value="done">Done</option>
            <option className="bg-blue-950 text-white" value="canceled">Canceled</option>
          </select>

          <select
            name="comp"
            value={newProject.comp || ""}
            onChange={handleChange}
            className="rounded-[10px] px-3 py-2 border-[#656B8C] border-[2px] text-[#656B8C]"
          >
            <option className="bg-blue-950 text-white" value="">Select completion %</option>
            <option className="bg-blue-950 text-white" value="10%">10%</option>
            <option className="bg-blue-950 text-white" value="25%">25%</option>
            <option className="bg-blue-950 text-white" value="60%">60%</option>
            <option className="bg-blue-950 text-white" value="100%">100%</option>
          </select>

          <div className="flex gap-3 justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-500"
            >
              {addProjectId ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600"
            >
              Exit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
