import './SubmitButton.css'

const SubmitButton = ({ btnText }) => {
  return (

     <button type="submit" className="w-50 m-4 border-0 p-2 " style={{backgroundColor:'#222'}} >
          {btnText}
     </button> 

  )
}

export default SubmitButton