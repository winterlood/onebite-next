import ClientComponent from "@/components/client-component";

export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  return (
    <div>
      book/[id] 페이지 {params.id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
