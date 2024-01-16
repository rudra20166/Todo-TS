import AddTodo from "@/components/add-todo";
import {Todos} from "@/components/todos";
import Navbar from "@/components/navbar";
import "./globals.css";



const Page = () => {
    return (
      <main>
          <h2> TODO NEXT + TYPESCRIPT  </h2>
          <Navbar />
          <AddTodo />
          <Todos />
      </main>
    );
};

export default Page;