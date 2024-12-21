import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({ btnText }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5500/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp)=> resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <form className="pt-3" style={{ width: '70%' }}>
      <Input text="Project name" placeholder="enter with the project name" />

      <Input
        type="number"
        text="Project budget"
        placeholder="enter with the project budget"
      />

      <Select text="Select category" name="category_id" options={categories}  />

      <div className="text-center">
        <SubmitButton text={btnText} />
      </div>
    </form>
  )
}

export default ProjectForm
