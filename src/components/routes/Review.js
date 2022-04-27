import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'


function Review() {
  const [review, setReview] = useState([])
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams();
  let navigate = useNavigate();

  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3000/api/reviews/${id}`)
        console.log(response)
        const result = response.data.review
        setReview(result)
      
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!review) {
      return <p>Loading...</p>
    }
  }, [review])

  const destroy = () => {
   axios({
      url: `http://localhost:3000/api/reviews/${id}`,
      method: 'DELETE'
    }).then(() => setDeleted(true)).catch(console.error)
  }

  useEffect(() => {
    if (deleted) {
      return navigate("/")
    }
  }, [deleted, navigate])

  

  return (

    

    <Layout>

      <h4>{review.location}</h4>
      <button onClick={() => destroy()} >Delete Review</button>

      <NavLink to={`/reviews/${id}/edit`} >
        <button>Edit</button>
      </NavLink>

      <NavLink to="/reviews" >Back to all Reviews</NavLink>
      
    </Layout>
  )
}

export default Review