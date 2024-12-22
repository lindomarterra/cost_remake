import { useNavigate } from "react-router-dom"
import ProjectForm from "../project/ProjectForm"

const NewProject = () => {

  const navigate= useNavigate()

  const createPost= (project)=>{

     project.cost=0
     project.services=[] 

     fetch(`http://localhost:5500/projects`, {
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project)
     }).then((resp) => resp.json()).then((data) => {
      console.log(data)
      navigate('/projects', {
        state: {message: "Project created successfully!"}
      })
     } )
     .catch((err)=> console.log(err))
  }


  return (
    <div style={{ minHeight: '70vh' }} className="w-50 m-auto ps-5 pt-5">
      <h2>Create projects</h2>
      <p className="mt-3 opacity-75">
        Create a project and later add some sercices
      </p>

      <ProjectForm  handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject