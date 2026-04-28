import React, { useState } from "react";

const App = () => {
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Title is: ${title} and description is: ${description}`);
    const copyTasks = [...tasks];
    copyTasks.push({
      title,
      description
    })
    setTasks(copyTasks)
    console.log(tasks)
    setTitle('')
    setDescription('')
  };


  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex lg:w-1/2 items-start gap-4 flex-col p-10" action="">
        
        <h1 className="text-xl font-bold">Add Notes</h1>
        {/* Heading */}
          <input
            type="text"
            placeholder="Add a new note..."
            className="px-5 w-full py-2 border-2 rounded"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          {/* Description */}
          <textarea
            type="text"
            placeholder="Enter details"
            className="px-5 w-full py-2 h-20 border-2 rounded"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
          <button className="bg-white active:bg-gray-300 w-full w-1/2 text-black px-5 py-2 rounded">
            Add Notes
          </button>
      </form>

<div className="lg:w-1/2 bg-gray-900 p-10 lg:border-l-2">
      <h1 className="text-xl font-bold">Your Notes</h1>
      <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
        {tasks.map((task, index) => {
          return (
            <div key={index} className="h-32 w-32 rounded bg-white p-2">
              <h1 className="font-bold">{task.title}</h1>
              <p>{task.description}</p>
            </div>
          )
        })}

  {/* <div className="h-32 w-32 rounded bg-white"></div>
  <div className="h-32 w-32 rounded bg-white"></div> */}
      </div>
</div>

    </div>
  );
};

export default App;
