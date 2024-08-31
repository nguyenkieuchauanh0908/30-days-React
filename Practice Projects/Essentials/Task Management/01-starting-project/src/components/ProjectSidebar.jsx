import Button from "./Button";
export default function ProjectSidebar({
  onStartAddProject,
  onSelectProject,
  projects,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-1/6 rounded-md">
      <h2 className="mb-8 font-bold uppercase">Your projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul>
        {projects?.map((prj) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 cursor-pointer hover:text-stone-200 hover:bg-stone-600";
          if (prj.id === selectedProjectId) {
            cssClasses += "bg-stone-800 text-stone-200 hover:bg-stone-600";
          } else {
            cssClasses += "text-stone-400 hover:bg-stone-600";
          }
          return (
            <li key={prj.id}>
              <button
                onClick={() => {
                  onSelectProject(prj.id);
                }}
                className={cssClasses}
              >
                {prj.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
