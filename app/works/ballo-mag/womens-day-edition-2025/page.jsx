import { balloMag } from "@/constants/ballo_mag";
import './style.css'
import BalloMagInterface from "@/components/works page/BalloMagInterface";

const Page = () => {
  return (
    <BalloMagInterface magIndex={balloMag[1]} width={495} height={700} />
  );
};

export default Page;
