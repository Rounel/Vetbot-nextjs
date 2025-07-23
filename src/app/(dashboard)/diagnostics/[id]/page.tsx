import Chat from "@/components/chat";

export default async function ChatPage({ params }: {params: Promise<{ id: string }>}) {
  const id = (await params).id

  return <Chat mode="Diagnostics" id={id} />;
}
