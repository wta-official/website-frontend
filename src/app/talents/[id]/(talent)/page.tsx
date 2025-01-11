import TalentPage from '@/components/Talent';
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Talent: ${resolvedParams.id}`,
  };
}

const Talent = async ({ params }: Props) => {
  const resolvedParams = await params;
  // console.log(resolvedParams);

  return (
    <div>
      <TalentPage params={resolvedParams.id} />
    </div>
  );
};

export default Talent;
