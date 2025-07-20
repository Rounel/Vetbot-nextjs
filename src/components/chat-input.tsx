'use client';

import {
  AIInput,
  AIInputButton,
  AIInputModelSelect,
  AIInputModelSelectContent,
  AIInputModelSelectItem,
  AIInputModelSelectTrigger,
  AIInputModelSelectValue,
  AIInputSubmit,
  AIInputTextarea,
  AIInputToolbar,
  AIInputTools,
} from '@/components/ui/kibo-ui/ai/input';
import { GlobeIcon, MicIcon, PlusIcon } from 'lucide-react';
import { type FormEventHandler, SetStateAction, useState } from 'react';
import { AISuggestion, AISuggestions } from './ui/kibo-ui/ai/suggestion';
import { useRouter } from "next/navigation";
import { startConseil, sendConseilMessage } from "@/services/vetbot-api";
import { startConseilConversation, startDiagnosticConversation } from '@/services/services';

const models = [
  { id: 'gpt-4', name: 'GPT-4' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
  { id: 'claude-2', name: 'Claude 2' },
  { id: 'claude-instant', name: 'Claude Instant' },
  { id: 'palm-2', name: 'PaLM 2' },
  { id: 'llama-2-70b', name: 'Llama 2 70B' },
  { id: 'llama-2-13b', name: 'Llama 2 13B' },
  { id: 'cohere-command', name: 'Command' },
  { id: 'mistral-7b', name: 'Mistral 7B' },
];

const suggestions = [
    'What are the latest trends in AI?',
    'How does machine learning work?',
    'Explain quantum computing',
    'Best practices for React development',
    'Tell me about TypeScript benefits',
    'How to optimize database queries?',
    'What is the difference between SQL and NoSQL?',
    'Explain cloud computing basics',
  ];

const ChatInput = ({mode}: {mode:string}) => {
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [model, setModel] = useState<string>(models[0].id);
  const [status, setStatus] = useState<'submitted' | 'streaming' | 'ready' | 'error'>('ready');
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("streaming")
    setError(null)
    console.log(text)

    try {
      let response
      if (mode === "Diagnostics") {
        response = await startDiagnosticConversation(text)
      } else {
        response = await startConseilConversation(text)
      }
      console.log("RESPONSE", response)
      
      if (response.error) {
        setError(response.error.message || "Une erreur est survenue lors de la connexion")
        return
      }

      // Redirection basée sur le type d'utilisateur
      if (response.status === "success") {
        console.log("USER", response.user)
        router.push(mode === "Diagnostics" ? `/diagnostics/${response.conversation.id}` : `/conseils/${response.conversation.id}`)
      }
    } catch (err) {
      console.error("message error:", err)
      setError("Une erreur inattendue est survenue. Veuillez réessayer.")
    } finally {
      setStatus("ready")
    }
  }
  
  const handleSuggestionClick = (suggestion: string) => {
    console.log('Selected suggestion:', suggestion);
  };


  return (
    <div className='h-hull max-w-4xl gap-4 mx-auto flex justify-center items-center flex-col'>
        <AIInput onSubmit={handleSubmit}>
          <AIInputTextarea onChange={(e: { target: { value: SetStateAction<string>; }; }) => setText(e.target.value)} value={text} />
          <AIInputToolbar>
              <AIInputTools>
              <AIInputButton>
                  <PlusIcon size={16} />
              </AIInputButton>
              <AIInputButton>
                  <MicIcon size={16} />
              </AIInputButton>
              <AIInputButton>
                  <GlobeIcon size={16} />
                  <span>Search</span>
              </AIInputButton>
              <AIInputModelSelect onValueChange={setModel} value={model}>
                  <AIInputModelSelectTrigger>
                  <AIInputModelSelectValue />
                  </AIInputModelSelectTrigger>
                  <AIInputModelSelectContent>
                  {models.map((model) => (
                      <AIInputModelSelectItem key={model.id} value={model.id}>
                        {model.name}
                      </AIInputModelSelectItem>
                  ))}
                  </AIInputModelSelectContent>
              </AIInputModelSelect>
              </AIInputTools>
              <AIInputSubmit disabled={!text} status={status} />
          </AIInputToolbar>
        </AIInput>
        <AISuggestions>
        {suggestions.map((suggestion) => (
            <AISuggestion
            key={suggestion}
            onClick={handleSuggestionClick}
            suggestion={suggestion}
            />
        ))}
        </AISuggestions>
    </div>
  );
};

export default ChatInput;