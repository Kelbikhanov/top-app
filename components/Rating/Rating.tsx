import { RatingProps } from "./Rating.props";

import { StarSvg } from "./styles";
import { useEffect, useState, KeyboardEvent } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
}: RatingProps): JSX.Element => {
  const [ratingArray, setratingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, index: number) => {
      return (
        <StarSvg
          isEditable={isEditable}
          className={`star ${index < currentRating && "filled"}`}
        />
      );
    });
    setratingArray(updateArray);
  };

  const changeDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };

  const onClickRating = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  const handleSpace = (index: number, e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(index);
  };

  return (
    <div>
      {ratingArray.map((r, index) => (
        <span
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClickRating(index + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) =>
            isEditable && handleSpace(index + 1, e)
          }
          key={index}
        >
          {r}
        </span>
      ))}
    </div>
  );
};
