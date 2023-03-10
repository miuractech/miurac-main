import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function TopSmallBar({}: Props) {
  return (
    <div className="bg-black text-white flex gap-x-4 justify-end px-10 underline abeezee font-thin text-sm">
      <Link to="/login" className="m-1 cursor-pointer">
        Login
      </Link>
    </div>
  );
}
