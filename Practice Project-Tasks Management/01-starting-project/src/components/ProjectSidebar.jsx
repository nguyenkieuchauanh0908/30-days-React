import Button from "./Button";
export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-1/6 rounded-md">
      <h2 className="mb-8 font-bold uppercase">Your projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
