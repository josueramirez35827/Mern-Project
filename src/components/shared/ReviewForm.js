import { Link } from 'react-router-dom'
const ReviewForm = ({review, handleSubmit, handleChange, cancelPath}) => {
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Make Changes
          </label>
          <input placeholder="Country Visited (Ex. Japan)" defaultValue={review.location} name="location" onChange={(e) => handleChange(e)} />
          <input placeholder="Total Cost" defaultValue={review.costOfTravel} name="costOfTravel" onChange={(e) => handleChange(e)} />
          <input placeholder="Mode of Transportation" defaultValue={review.typesOfTransportation} name="typesOfTransportation" onChange={(e) => handleChange(e)} />
          <input placeholder="Would You Recommend" defaultValue={review.wouldRecommend} name="wouldRecommend" onChange={(e) => handleChange(e)} />
          <input placeholder="Picture of Location" defaultValue={review.image} name="image" onChange={(e) => handleChange(e)} />
          <button type="submit">
            Submit
          </button>
          <Link to={cancelPath}>
            <button>
              Cancel
            </button>
          </Link>
        </form>
    )
}
export default ReviewForm