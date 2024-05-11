import Todolist from "@/components/todolist";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className=" text-black font-bold mb-8">Auto Delete Todo List</h1>
      <Todolist/>
    </div>
  );
}
