import Chat from "@/components/chat";

export default async function ChatPage({ params }: {params: {id: number}}) {
  const { id } =  await params

  console.log("THIS IS ID:", id)
  return <Chat mode="Diagnostics" id={id.toString()} />;
}
