import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectStates, setProjectStates] = useState({
    currentAction: "nothing-selected",
    selectedProjectId: undefined,
    projects: [],
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

  let content;
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
        projects={projectStates.projects}
        className="h-screen my-8"
      />
      {content}
    </main>
  );
}

export default App;
