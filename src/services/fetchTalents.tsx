import { fetchApi } from "@/utils/api";

export const getServerSideProps = async () => {
  try {
    const talents = await fetchApi("talents", {});
    return { props: { talents } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { talents: null } };
  }
};
