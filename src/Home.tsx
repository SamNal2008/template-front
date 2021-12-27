import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <h1>OK</h1>
      <button onClick={() => navigate('/internal_error')}>Go to error</button>
    </>
    
  )
}

export default Home;