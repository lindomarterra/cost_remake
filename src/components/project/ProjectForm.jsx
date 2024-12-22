import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({ btnText, projectData, handleSubmit }) => {
  const [categories, setCategories] = useState([])
  const [project, setProject]=useState(projectData || {} )


  useEffect(() => {
    fetch('http://localhost:5500/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const submit= (e)=>{
    e.preventDefault()
    handleSubmit(project)
  }

  const handleChange= (e)=>{
    setProject({ ...project, [e.target.name] : e.target.value })
  }
 
   const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className="pt-3" style={{ width: '70%' }}>
      <Input
        text="Project name"
        type="text"
        name="name"
        placeholder="enter with the project name"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />

      <Input
        type="number"
        text="Project budget"
        name="budget"
        placeholder="enter with the project budget"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />

      <Select
        text="Select category"
        name="category_id"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category : ''}
      />

      <div className="text-center">
        <SubmitButton text={btnText} />
      </div>
    </form>
  )
}

export default ProjectForm
