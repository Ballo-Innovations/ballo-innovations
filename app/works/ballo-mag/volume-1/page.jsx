import BalloMagInterface from "@/components/works page/BalloMagInterface";
import { balloMag } from "@/constants/ballo_mag";

const Page = () => {

  return (
    <BalloMagInterface magIndex={balloMag[0]} width={500} height={500} />
  );
};

export default Page;
