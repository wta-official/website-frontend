import TalentPage from '@/components/Talent';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Talent: ${resolvedParams.id}`,
  };
}

const Talent = async ({ params }: Props) => {
  const resolvedParams = await params;
  return (
    <div>
      <TalentPage params={resolvedParams} />
    </div>
  );
};

export default Talent;
