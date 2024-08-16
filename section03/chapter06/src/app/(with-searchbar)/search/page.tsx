import ClientComponent from "@/components/client-component";

export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  return (
    <div>
      Search 페이지 {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
