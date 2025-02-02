import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
import NewProject from "./components/New-project";
import NoProjectSselected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState]=useState({
    selectedProjectId:undefined,
    projects:[],
tasks:[]
  });

  function handleAddTask(text){
    setProjectsState(prev=>{
      const newTask = {
    text:text,
    projectId:prev.selectedProjectId,
     id: Math.random(),
      };
  
      return{
        ...prev,
        tasks:[...prev.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectsState(prev =>{
      // const newTask= prev.tasks.filter((task)=>{ task.id !== id;
      //     })
      return {
       ...prev,
        tasks:prev.tasks.filter((task)=>task.id !== id),
      };
    });
  }
  

function handleSelectProject(id){
  setProjectsState(prev =>{
    return {
      ...prev,
      selectedProjectId: id,
    };
  });
 
}

function handleDeleteProject(){
  setProjectsState(prev =>{
    const newProj= prev.projects.filter((proj)=>{
      
     return proj.id !== prev.selectedProjectId;
        })
    return {
     ...prev,
      selectedProjectId: undefined,
      projects:newProj
    };
  });
}

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

const selectedProject = projectsState.projects.find(project=>project.id ===projectsState.selectedProjectId)
let content = <SelectedProject 
project={selectedProject} 
onDelete={handleDeleteProject} 
onAddTask={handleAddTask}
onDeleteTask={handleDeleteTask}
tasks={projectsState.tasks}
 />;


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
  onSelectProject={handleSelectProject}
  selectedProjectId={projectsState.selectedProjectId}
  />
  <a href="https://www.google.com"></a>
  {content}
    </main >
  );
}

export default App;
