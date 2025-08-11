import { useEffect, useState } from "react";
import DashboardItem from "../../components/DashboardItem";
import Heading from "../../components/Heading";
import { AddPeople, DashPeople, ViewIcon, TrashIcon, ProjectIcon } from "../../assets/icons";
import UserForm from "../../components/UserForm";
import UserTable from "../../components/UserTable";
import ProjectForm from "../../components/ProjectForm";
import ProjectTable from "../../components/ProjectTable";

const initialUserState = {
  img: "",
  name: "",
  surname: "",
  email: "",
  functionn: "Manager",
  work: "Organization",
  status: "Online",
  date: new Date().toLocaleDateString(),
};

const initialProjectState = {
  img: "",             
  name: "",
  budget: "",
  status: "Active",
  completion: "",  
};

const Tables = () => {
  
  const [users, setUsers] = useState([]);
  const [deletedUsers, setDeletedUsers] = useState([]);
  const [addUserId, setAddUserId] = useState(null);
  const [newUsers, setNewUsers] = useState(initialUserState);

  const [projects, setProjects] = useState([]);
  const [deletedProjects, setDeletedProjects] = useState([]);
  const [addProjectId, setAddProjectId] = useState(null);
  const [newProject, setNewProject] = useState(initialProjectState);

  const [modalType, setModalType] = useState(null); 
  const [showDeleted, setShowDeleted] = useState(false);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")) || []);
    setDeletedUsers(JSON.parse(localStorage.getItem("deletedUsers")) || []);
    setProjects(JSON.parse(localStorage.getItem("projects")) || []);
    setDeletedProjects(JSON.parse(localStorage.getItem("deletedProjects")) || []);
  }, []);

  const saveUsersToLocal = (active, deleted) => {
    setUsers(active);
    setDeletedUsers(deleted);
    localStorage.setItem("users", JSON.stringify(active));
    localStorage.setItem("deletedUsers", JSON.stringify(deleted));
  };

  const saveProjectsToLocal = (active, deleted) => {
    setProjects(active);
    setDeletedProjects(deleted);
    localStorage.setItem("projects", JSON.stringify(active));
    localStorage.setItem("deletedProjects", JSON.stringify(deleted));
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setNewUsers((prev) => ({ ...prev, [name]: value }));
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setNewUsers((prev) => ({ ...prev, img: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!newUsers.img || !newUsers.name.trim() || !newUsers.surname.trim()) {
      alert("Please, enter full information");
      return;
    }

    let updated;
    if (addUserId) {
      updated = users.map((u) => (u.id === addUserId ? { ...newUsers, id: addUserId } : u));
      setAddUserId(null);
    } else {
      updated = [
        ...users,
        { ...newUsers, id: users.length ? users[users.length - 1].id + 1 : 1, date: new Date().toLocaleDateString() },
      ];
    }

    saveUsersToLocal(updated, deletedUsers);
    setNewUsers(initialUserState);
    setModalType(null);
  };

  const toggleUserStatus = (id) => {
    const updated = users.map((u) =>
      u.id === id ? { ...u, status: u.status === "Online" ? "Offline" : "Online" } : u
    );
    saveUsersToLocal(updated, deletedUsers);
  };

  const handleUserDelete = (id) => {
    if (!window.confirm("Are you sure delete user?")) return;
    const toDelete = users.find((u) => u.id === id);
    saveUsersToLocal(users.filter((u) => u.id !== id), [...deletedUsers, toDelete]);
  };

  const handleUserRestore = (id) => {
    const toRestore = deletedUsers.find((u) => u.id === id);
    saveUsersToLocal([...users, toRestore], deletedUsers.filter((u) => u.id !== id));
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setNewProject(prev => ({ ...prev, img: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (!newProject.name.trim()) {
      alert("Please enter project name");
      return;
    }

    const budgetNum = parseFloat(newProject.budget);
    if (isNaN(budgetNum) || budgetNum <= 0) {
      alert("Please enter valid budget number");
      return;
    }

    const completion = (budgetNum * 0.10).toFixed(2);

    let updated;
    if (addProjectId) {
      updated = projects.map((p) =>
        p.id === addProjectId ? { ...newProject, id: addProjectId, completion } : p
      );
      setAddProjectId(null);
    } else {
      updated = [
        ...projects,
        { ...newProject, id: projects.length ? projects[projects.length - 1].id + 1 : 1, completion },
      ];
    }

    saveProjectsToLocal(updated, deletedProjects);
    setNewProject(initialProjectState);
    setModalType(null);
  };

  const handleProjectDelete = (id) => {
    if (!window.confirm("Are you sure delete project?")) return;
    const toDelete = projects.find((p) => p.id === id);
    saveProjectsToLocal(projects.filter((p) => p.id !== id), [...deletedProjects, toDelete]);
  };

  const handleProjectRestore = (id) => {
    const toRestore = deletedProjects.find((p) => p.id === id);
    saveProjectsToLocal([...projects, toRestore], deletedProjects.filter((p) => p.id !== id));
  };

  return (
    <div className="containers">
      <DashboardItem type="text" name="search-input" placeholder="Type here..." text="Tables" item="Tables" />

      <div className="py-[20px]">
        <div className="content-bg rounded-[20px] p-[20px]">
          <div className="flex items-center justify-between">
            <Heading tag="h3">{showDeleted ? "Deleted Users" : "Authors Table"}</Heading>
            <div className="flex gap-3 items-center">
              <button
                onClick={() => setShowDeleted(!showDeleted)}
                className="flex items-center gap-2 bg-gray-500 px-3 py-1 rounded text-white hover:opacity-[70%]"
              >
                {showDeleted ? <ViewIcon /> : <DashPeople />}
                {showDeleted ? "View Active" : "View Deleted"}
              </button>

              {showDeleted && deletedUsers.length > 0 && (
                <button
                  onClick={() => window.confirm("Clear all deleted users?") && saveUsersToLocal(users, [])}
                  className="flex items-center gap-2 bg-red-800 text-white px-3 py-1 rounded hover:opacity-[70%]"
                >
                  <TrashIcon /> Clear All
                </button>
              )}

              {!showDeleted && (
                <button
                  onClick={() => {
                    setModalType("user");
                    setNewUsers(initialUserState);
                  }}
                  className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded hover:opacity-[70%]"
                >
                  <AddPeople /> Add User
                </button>
              )}
            </div>
          </div>

          <UserTable
            listToShow={showDeleted ? deletedUsers : users}
            showDeleted={showDeleted}
            toggleStatus={toggleUserStatus}
            handleDelete={handleUserDelete}
            handleRestore={handleUserRestore}
            onEdit={(user) => {
              setNewUsers(user);
              setAddUserId(user.id);
              setModalType("user");
            }}
          />
        </div>

        <div className="pt-[30px]">
          <div className="content-bg p-[30px] rounded-[20px]">
            <div className="flex items-center justify-between">
              <div>
                <Heading tag="h3">{showDeleted ? "Deleted Projects" : "Projects"}</Heading>
                <p className="text-[#A0AEC0] gap-[5px] pt-[6px] flex items-center">
                  <span><ProjectIcon /></span>
                  30 done this month
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => setShowDeleted(!showDeleted)}
                  className="flex items-center gap-2 bg-gray-500 px-3 py-1 rounded text-white hover:opacity-[70%]"
                >
                  {showDeleted ? <ViewIcon /> : <DashPeople />}
                  {showDeleted ? "View Active" : "View Deleted"}
                </button>

                {showDeleted && deletedProjects.length > 0 && (
                  <button
                    onClick={() => window.confirm("Clear all deleted projects?") && saveProjectsToLocal(projects, [])}
                    className="flex items-center gap-2 bg-red-800 text-white px-3 py-1 rounded hover:opacity-[70%]"
                  >
                    <TrashIcon /> Clear All
                  </button>
                )}

                {!showDeleted && (
                  <button
                    onClick={() => {
                      setModalType("project");
                      setNewProject(initialProjectState);
                    }}
                    className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded hover:opacity-[70%]"
                  >
                    <AddPeople /> Add Project
                  </button>
                )}
              </div>
            </div>

            <ProjectTable
              listToShow={showDeleted ? deletedProjects : projects}
              showDeleted={showDeleted}
              handleDelete={handleProjectDelete}
              handleRestore={handleProjectRestore}
              onEdit={(project) => {
                setNewProject(project);
                setAddProjectId(project.id);
                setModalType("project");
              }}
            />
          </div>
        </div>
      </div>

      {modalType === "user" && (
        <UserForm
          newUsers={newUsers}
          setNewUsers={setNewUsers}
          handleChange={handleUserChange}
          handleImgUpload={handleImgUpload}
          handleSubmit={handleUserSubmit}
          addUserId={addUserId}
          onClose={() => setModalType(null)}
        />
      )}

      {modalType === "project" && (
        <ProjectForm
          newProject={newProject}
          setNewProject={setNewProject}
          handleChange={handleProjectChange}
          handleImageChange={handleProjectImageChange}   
          handleSubmit={handleProjectSubmit}
          addProjectId={addProjectId}
          onClose={() => setModalType(null)}
        />
      )}
    </div>
  );
};

export default Tables;
