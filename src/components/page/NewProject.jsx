import ProjectForm from "../project/ProjectForm"

const NewProject = () => {

  return (
    <div style={{ minHeight: '70vh' }} className="w-50 m-auto ps-5 pt-5">
      <h2>Create projects</h2>
      <p className="mt-3 opacity-75">
        Create a project and later add some sercices
      </p>

      <ProjectForm btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject