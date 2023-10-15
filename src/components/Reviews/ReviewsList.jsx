import { Item } from './Reviews.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(review => (
            <Item key={review.id}>
              <p>
                <b>Author:</b> {review.author}
              </p>
              <br />
              <p>
                <b>Content:</b> {review.content}
              </p>
            </Item>
          ))
        : 'Sorry, there are no reviews for this movie.'}
    </ul>
  );
};
