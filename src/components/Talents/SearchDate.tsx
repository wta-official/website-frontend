import { BASE_URL, fetchApi } from '@/utils/api';
import { Suspense } from 'react';
import TriangleLoader from '../custome-ui/Loader';
import SearchTalents from '../custome-ui/SearchTalents';

export default async function SearchDate() {
  let talents;

  try {
    // Fetch talents data
    const response = await fetch(`${BASE_URL}/talents/`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    talents = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="flex justify-center items-center text-center">
        <div>
          <div className="pb-10 flex justify-center">
            <TriangleLoader
              visible={true}
              height={80}
              width={80}
              color="#6785A5"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">Error Loading Data</h1>
          <p className="text-lg">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-32">
          <TriangleLoader
            visible={true}
            height={80}
            width={80}
            color="#6785A5"
          />
        </div>
      }
    >
      {/* Pass the fetched data to SearchTalents */}
      <SearchTalents talents={talents.results} />
    </Suspense>
  );
}

// export default SearchDate;
