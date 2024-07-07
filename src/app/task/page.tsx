import Form from "@/components/Form";
import React from "react";

function page() {
  return (
    <main className="flex flex-col justify-center itmes-center min-h-screen gap-y-5 text-center ">
      <h1 className="text-3xl font-semibold">Tasks</h1>

      <Form />
    </main>
  );
}

export default page;
