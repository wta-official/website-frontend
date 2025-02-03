import TalentPage from '@/components/Talent';
import { Metadata } from 'next';

type Props = {
  params: { id?: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Talent: ${params.id}`,
  };
}

const Talent = async ({ params }: Props) => {
  return (
    <div>
      <TalentPage params={params} />
    </div>
  );
};

export default Talent;
