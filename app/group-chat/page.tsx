// app/chat/page.tsx (Server Component)
import Chat from "@/components/Chat";

export default function ChatPage() {
  return (
    <main>
      <h1>Live Chat</h1>
      <Chat /> {/* Embedding Client Component */}
    </main>
  );
}
