import Todolist from "@/components/todolist";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Auto Delete Todo List</h1>
      <Todolist/>
    </div>
  );
}
