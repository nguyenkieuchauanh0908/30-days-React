import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectStates, setProjectStates] = useState({
    currentAction: "nothing-selected",
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddAProject() {
    setProjectStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectStates((prevState) => {
      const newPrj = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newPrj],
      };
    });
  }

  function handleCancelProject() {
    setProjectStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function deleteProject() {
    setProjectStates((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddTask(text) {
    setProjectStates((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function deleteTasks(taskId) {
    setProjectStates((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  const selectedProject = projectStates.projects.find(
    (project) => project.id === projectStates.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={deleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={deleteTasks}
      tasks={projectStates.tasks}
    />
  );
  if (projectStates.selectedProjectId === null) {
    content = (
      <NewProject
        onAddNewProject={handleAddProject}
        onCancel={handleCancelProject}
        className="text-center"
      />
    );
  } else if (projectStates.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        onStartAddProject={handleStartAddAProject}
        projects={projectStates.projects}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddAProject}
        onSelectProject={handleSelectProject}
        projects={projectStates.projects}
        className="h-screen my-8"
      />
      {content}
    </main>
  );
}

export default App;
