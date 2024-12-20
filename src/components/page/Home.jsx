import LinkButton from "../layout/LinkButton"
import Savings from "../../imgs/savings.svg"

const Home = () => {
  return (
    <div
      style={{ minHeight: '70vh' }}
      className="text-center my-5 flex-column"
    >
        <h1 className="fw-medium">
          Wellcome to{' '}
          <span
            className="p-1"
            style={{ backgroundColor: '#222', color: '#ffbb22' }}
          >
            Cost
          </span>
        </h1>
        <p className="mt-4 mb-5 opacity-75">
          Start to manage your projects right now!
        </p>

        <LinkButton to="/newProject" text="Create Project" />

        <div className="py-5" >
          <img  className="w-25"  src={ Savings } alt="Costs" />
        </div>

    </div>
  )
}

export default Home