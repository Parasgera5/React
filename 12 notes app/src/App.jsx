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
  
const deleteNote = (idx) => {
  const copyTasks = [...tasks];
  copyTasks.splice(idx, 1)
  setTasks(copyTasks)
} 

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
      <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {tasks.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.description}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>

  {/* <div className="h-32 w-32 rounded bg-white"></div>
  <div className="h-32 w-32 rounded bg-white"></div> */}
      </div>
</div>
  );
};

export default App;
