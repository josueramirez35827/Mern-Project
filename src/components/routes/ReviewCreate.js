import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';
import ReviewForm from '../shared/ReviewForm';

function ReviewCreate() {
  const navigate = useNavigate();
  const [review, setReview] = useState({
    location: '',
  })
  const [createdReview, setCreatedReview] = useState(null)

  const handleChange = (event) => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedReview = Object.assign(review, updatedField)
      setReview(editedReview)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `http://localhost:3000/api/reviews`,
      method: 'POST',
      data: review
    }).then(res => setCreatedReview(res.data.review)).catch(console.error)
  }

  useEffect(() => {
    if (createdReview) {
      return navigate('/reviews')
    }
  }, [createdReview, navigate])

  return (
    <Layout>
      <ReviewForm item={review} handleChange={(e) => handleChange(e)} handleSubmit={(e) => handleSubmit(e)} cancelPath='/' />
    </Layout>
  )

}

export default ReviewCreate;