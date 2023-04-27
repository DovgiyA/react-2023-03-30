import { normalizedReviews } from "@/constants/normalized-fixtures";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsReducer = (state = initialState, action) => {
  return state;
};
