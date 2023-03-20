import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loading}>
      <RotatingLines
        strokeColor="rgba(149, 99, 185, 0.661)"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </div>
  );
};
export default Loader;
