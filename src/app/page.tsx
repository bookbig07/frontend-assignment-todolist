import Todolist from "@/components/todolist";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="font-bold text-[#016BA1] text-5xl	mb-6">Auto Delete Todo List</h1>
      <Todolist/>
    </div>
  );
}
