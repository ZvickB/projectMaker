export default function SelectedProject({project}){
    const formattedDate= new Date(project.dueDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    })
    return <div>
        <header>
            <div>
            <h1>{project.title}</h1>
            <button>delete</button>
            </div>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
        </header>
    </div>
}