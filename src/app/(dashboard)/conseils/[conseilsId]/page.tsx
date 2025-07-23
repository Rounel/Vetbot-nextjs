import Chat from "@/components/chat";
type Params = Promise<{ id: string }>
export default async function ChatPage({ params }: { params: Params }) {
  const id = (await params).id;

  return <Chat mode="Diagnostics" id={id} />;
}