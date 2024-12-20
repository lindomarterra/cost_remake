import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = () => {
  return (
    <form className='pt-3' style={{width:'70%'}} >
      <Input text="Project name" placeholder="enter with the project name" />
      
      <Input type='number' text="Project budget" placeholder="enter with the project budget" />

      <Select text='Select category'  />

      <div className='text-center' >
        <SubmitButton  btnText='Create project' />
      </div>

    </form>
  )
}

export default ProjectForm
