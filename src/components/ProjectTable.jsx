import React from "react";
import { EditIcon, TrashIcon } from "../assets/icons";

const ProjectTable = ({
  listToShow,
  showDeleted,
  handleDelete,
  handleRestore,
  onEdit,
}) => {
  // "10%" stringidan faqat raqam qismini ajratib olish uchun helper
  const getCompValue = (comp) => {
    if (!comp) return 0;
    return parseInt(comp.replace("%", ""), 10);
  };

  return (
    <div className="pt-5 overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-gray-400 text-[12px] border-b border-gray-500">
            <th className="py-2 text-left">COMPANIES</th>
            <th className="py-2 text-left">BUDGET</th>
            <th className="py-2 text-left">STATUS</th>
            <th className="py-2 text-left">COMPLETION</th>
            <th className="py-2 text-left">ACTION</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {listToShow.length > 0 ? (
            listToShow.map((project) => {
              const compValue = getCompValue(project.comp); // 10, 25, 60, 100 yoki 0

              return (
                <tr key={project.id} className="border-b text-gray-500">
                  <td className="py-2 flex items-center gap-2">
                    {project.img && (
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-[40px] h-[40px] object-cover rounded-full"
                      />
                    )}
                    <span className="text-[#FFFFFF]">{project.name}</span>
                  </td>
                  <td className="py-2">${project.budget}</td>
                  <td className="py-2">
                    <span
                      className={`rounded-[8px] text-[14px] px-[10px] py-[2px] opacity-[70%] ${
                        project.status === "Active"
                          ? "bg-[#01B574] text-white border border-[#01B574]"
                          : "border border-white text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-2">
                    <div className="text-[14px] text-white font-bold w-[100px]">
                      <span>{project.comp || "-"}</span>
                      <div className="w-full h-[4px] bg-gray-400 rounded relative overflow-hidden mt-1">
                        <div
                          className="h-[4px] bg-blue-500 absolute top-0 left-0 transition-all duration-300"
                          style={{ width: `${compValue}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="flex gap-4 pt-[18px]">
                    {!showDeleted ? (
                      <>
                        <button onClick={() => onEdit(project)} className="hover:opacity-70 pb-[15px]">
                          <EditIcon />
                        </button>
                        <button onClick={() => handleDelete(project.id)} className="hover:opacity-70 pb-[15px]">
                          <TrashIcon />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleRestore(project.id)}
                        className="text-green-500 hover:opacity-[70%]"
                      >
                        Restore
                      </button>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4">
                {showDeleted ? "No deleted projects" : "No active projects"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
