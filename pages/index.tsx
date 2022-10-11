import { useState } from "react";
import { Htag, Button, Ptag, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">tercn</Htag>
      <Button appearance="primary" arrow='right'>ryjgrf</Button>
      <Button appearance="ghost" arrow='right'>ryjgrf</Button>
      <Ptag size='l'>Ptag</Ptag>
      <Tag size='s' color='red'>tag</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}


export default withLayout(Home);