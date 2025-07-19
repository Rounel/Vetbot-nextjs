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

const ChatInput = () => {
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [model, setModel] = useState<string>(models[0].id);
  const [status, setStatus] = useState<'submitted' | 'streaming' | 'ready' | 'error'>('ready');
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!text) return;
    setStatus('submitted');
    try {
      // 1. Créer une session de chat
      const { session_id } = await startConseil();
      // 2. Envoyer le prompt initial
      const response = await sendConseilMessage(session_id, { content: text });
      // 3. Rediriger vers /chat/[session_id] avec le prompt et la réponse IA (en query ou state)
      router.push(`/chat/${session_id}?prompt=${encodeURIComponent(text)}&answer=${encodeURIComponent(response?.answer || response?.content || '')}`);
    } catch (err) {
      setStatus('error');
      alert('Erreur lors de la création du chat.');
    } finally {
      setStatus('ready');
    }
  };
  
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