import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/New-project";
import NoProjectSselected from "./components/NoProjectSelected";
function App() {
  const [projectsState, setProjectsState]=useState({
    selectedProjectId:undefined,
    projects:[]
  });

  function handleStartAddProject(){
setProjectsState(prev =>{
  return {
    ...prev,
    selectedProjectId: null,
  };
});
  }

function handleCancelAddProject(){
  setProjectsState(prev =>{
    return {
      ...prev,
      selectedProjectId: undefined,
    };
  });
}


function handleAddProject(projectData){
  setProjectsState(prev=>{
    const newProject = {
   ...projectData,
   id: Math.random(),
    };

    return{
      ...prev,
      selectedProjectId:undefined,
      projects:[...prev.projects, newProject]
    }
  })
}

let content;


if (projectsState.selectedProjectId===null){
  content= <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
}else if(projectsState.selectedProjectId=== undefined){
content= <NoProjectSselected onStartAddProject={handleStartAddProject} />
}
  
  return (
    <main className="h-screen my-8 flex gap-8 ">
  <Sidebar 
  onStartAddProject={handleStartAddProject} 
  projects={projectsState.projects} 
  />
  {content}
    </main >
  );
}

export default App;
