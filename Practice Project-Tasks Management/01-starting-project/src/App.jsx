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
    console.log("Test");
    setProjectStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    console.log("🚀 ~ handleAddProject ~ projectData:", projectData);
    setProjectStates((prevState) => {
      const newPrj = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        projects: [...prevState.projects],
      };
    });
  }

  let content;
  if (projectStates.selectedProjectId === null) {
    content = (
      <NewProject onAddNewProject={handleAddProject} className="text-center" />
    );
  } else if (projectStates.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddAProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddAProject}
        className="h-screen my-8"
      />
      {content}
    </main>
  );
}

export default App;
