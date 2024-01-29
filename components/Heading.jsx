import { orbitron } from '@/app/fonts';

function Heading({ children }) {
  return (
    <h1 className={`pb-3 text-2xl font-bold ${orbitron.className}`}>
      {children}
    </h1>
  );
}

export default Heading;
