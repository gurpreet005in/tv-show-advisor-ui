import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
const FiveStarRating = ({ rating }) => {
  const starList = [];
  const starFillCount = Math.floor(rating);
  const starHalfCount = rating - parseInt(rating) >= 0.5;
  const starEmptyCount = 5 - starFillCount - (starHalfCount ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={starFillCount + i} />);
  }
  if (starHalfCount) {
    starList.push(<StarHalf key={starHalfCount} />);
  }
  for (let i = 1; i <= starEmptyCount; i++) {
    starList.push(<StarEmpty key={starEmptyCount + i} />);
  }

  return <div>{starList}</div>;
};

export default FiveStarRating;
