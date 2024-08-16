export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  return <div>Search 페이지 {searchParams.q}</div>;
}
