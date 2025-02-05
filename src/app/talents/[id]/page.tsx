import TalentPage from '@/components/Talent';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  return {
    title: `Talent: ${id}`,
  };
}

const Talent = async ({ params }: Props) => {
  const id = (await params).id;
  return (
    <div>
      <TalentPage id={id} />
    </div>
  );
};

export default Talent;
