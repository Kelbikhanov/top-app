import { PtagProps } from "./Ptag.props";
import { P} from "./styles";

export const Ptag = ({ size='m', children }: PtagProps): JSX.Element => {
  switch (size) {
    case "s":
      return <P className='s'>{children}</P>;

    case "m":
      return <P className='m'>{children}</P>;

    case "l":
      return <P className='l'>{children}</P>;

    default:
      return <></>;
  }
};
