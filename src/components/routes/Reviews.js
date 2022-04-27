import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

function Reviews() {
  const [reviews, setReviews] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios('http://localhost:3000/api/reviews')
      setReviews(response.data.reviews)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const reviewsData = reviews.map((review) => {
    return <li key={review._id}>
      <NavLink to={`/reviews/${review._id}`} >{review.location}</NavLink>
    </li>
  })

  return (
    <div>
      <h4>Reviews</h4>
      <ul>
        {reviewsData}
      </ul>
  </div>
)
}
export default Reviews