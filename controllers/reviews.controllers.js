// import the model
const {Review, reviews} = require('../models/Review');

const fetchAllReviews = () => {
      return Review.fetchReviews();
}

const createReview = (review) => {
    return Review.addReview(review)
}

module.exports = {
    fetchAllReviews,
    createReview
}
