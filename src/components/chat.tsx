'use client';

import {
  AIBranch,
  AIBranchMessages,
  AIBranchNext,
  AIBranchPage,
  AIBranchPrevious,
  AIBranchSelector,
} from '@/components/ui/kibo-ui/ai/branch';
import {
  AIConversation,
  AIConversationContent,
  AIConversationScrollButton,
} from '@/components/ui/kibo-ui/ai/conversation';
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
import { AIMessage, AIMessageAvatar, AIMessageContent } from '@/components/ui/kibo-ui/ai/message';
import {
  AIReasoning,
  AIReasoningContent,
  AIReasoningTrigger,
} from '@/components/ui/kibo-ui/ai/reasoning';
import { AIResponse } from '@/components/ui/kibo-ui/ai/response';
import {
  AISource,
  AISources,
  AISourcesContent,
  AISourcesTrigger,
} from '@/components/ui/kibo-ui/ai/source';
import { AISuggestion, AISuggestions } from '@/components/ui/kibo-ui/ai/suggestion';
import {
  AITool,
  AIToolContent,
  AIToolHeader,
  AIToolParameters,
  AIToolResult,
  type AIToolStatus,
} from '@/components/ui/kibo-ui/ai/tool';
import {
  CameraIcon,
  FileIcon,
  GlobeIcon,
  ImageIcon,
  MicIcon,
  PlusIcon,
  ScreenShareIcon,
} from 'lucide-react';
import Image from 'next/image';
import { type FormEventHandler, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSearchParams } from 'next/navigation';
import { getCCMessages, getDCMessages, sendConseilMessage, sendDiagnosticMessage } from '@/services/services';


const models = [
  { id: 'gpt-4', name: 'GPT-4', provider: 'openai.com' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'openai.com' },
  { id: 'claude-2', name: 'Claude 2', provider: 'anthropic.com' },
  { id: 'claude-instant', name: 'Claude Instant', provider: 'anthropic.com' },
  { id: 'palm-2', name: 'PaLM 2', provider: 'google.com' },
  { id: 'llama-2-70b', name: 'Llama 2 70B', provider: 'meta.com' },
  { id: 'llama-2-13b', name: 'Llama 2 13B', provider: 'meta.com' },
  { id: 'cohere-command', name: 'Command', provider: 'cohere.com' },
  { id: 'mistral-7b', name: 'Mistral 7B', provider: 'mistral.ai' },
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

const Chat = ({mode, id}: {mode:string, id:string}) => {
  const [model, setModel] = useState<string>(models[0].id);
  const [text, setText] = useState<string>('');
  const [useWebSearch, setUseWebSearch] = useState<boolean>(false);
  const [useMicrophone, setUseMicrophone] = useState<boolean>(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [status, setStatus] = useState<
    'submitted' | 'streaming' | 'ready' | 'error'
  >('ready');

  // const searchParams = useSearchParams()
  // const uid = searchParams.get('id')
  const uid = id

  // Fonction pour charger les conversations selon le type
  const fetchConversations = async (type: string) => {
    setLoadingMessages(true);
    console.log('hello')
    try {
      let result = [];
      console.log("voici l'uid", uid)
      if (uid) {
        if (type === "Diagnostics") {
          result = await getDCMessages(uid);
        } else {
          result = await getCCMessages(uid);
        }
      }
      if (result.status) {
        console.log(result)
        // On suppose que l'API retourne un tableau de messages
        const msgs = result.messages || result || [];
        setMessages(Array.isArray(msgs) ? [...msgs].reverse() : msgs);
      }
    } catch (e) {
      console.log("erreur:", e)
      setMessages([]);
    } finally {
      setLoadingMessages(false);
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("streaming")
    setError(null)
    console.log(text)

    try {
      let response
      if (mode === "Diagnostics") {
        response = await sendDiagnosticMessage(text, uid)
      } else {
        response = await sendConseilMessage(text, uid)
      }
      console.log("RESPONSE", response)
      
      if (response.error) {
        setError(response.error.message || "Une erreur est survenue lors de la connexion")
        return
      }

      // Redirection basée sur le type d'utilisateur
      if (response.content) {
        console.log("USER", response.user)
        await fetchConversations(mode)
      }
    } catch (err) {
      console.error("message error:", err)
      setError("Une erreur inattendue est survenue. Veuillez réessayer.")
    } finally {
      setStatus("ready")
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (mode) { 
        await fetchConversations(mode)
      }
    }
    fetchData()
  }, [])

  const handleFileAction = (action: string) => {
    toast.success('File action', {
      description: action,
    });
  };

  const handleSuggestionClick = (suggestion: string) => {
    toast.success('Suggestion clicked', {
      description: suggestion,
    });

    setStatus('submitted');

    setTimeout(() => {
      setStatus('streaming');
    }, 200);

    setTimeout(() => {
      setStatus('ready');
    }, 2000);
  };

  return (
    <div className="relative flex h-full max-w-6xl mx-auto flex-col divide-y overflow-hidden">
      {/* conversation */}
      <AIConversation className='flex-1 overflow-y-auto'>
        <AIConversationContent>
          {messages.map((message, index) => (
            <AIBranch defaultBranch={0} key={index}>
              <AIBranchMessages>
                <AIMessage from={message.role} key={`${message.id}ffldkf`}>
                  <div>
                    <AIMessageContent>
                      <AIResponse>{message.content}</AIResponse>
                    </AIMessageContent>
                  </div>
                  <AIMessageAvatar name={message.name} src={message.avatar} />
                </AIMessage>
              </AIBranchMessages>
            </AIBranch>
          ))}
        </AIConversationContent>
        <AIConversationScrollButton />
      </AIConversation>


      {/* input */}
      <div className="grid shrink-0 gap-4 pt-4">
        <div className="w-full px-4 pb-4">
          <AIInput onSubmit={handleSubmit}>
            <AIInputTextarea
              onChange={(event: { target: { value: SetStateAction<string>; }; }) => setText(event.target.value)}
              value={text}
            />
            <AIInputToolbar>
              <AIInputTools>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <AIInputButton>
                      <PlusIcon size={16} />
                      <span className="sr-only">Add attachment</span>
                    </AIInputButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem
                      onClick={() => handleFileAction('upload-file')}
                    >
                      <FileIcon className="mr-2" size={16} />
                      Upload file
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleFileAction('upload-photo')}
                    >
                      <ImageIcon className="mr-2" size={16} />
                      Upload photo
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleFileAction('take-screenshot')}
                    >
                      <ScreenShareIcon className="mr-2" size={16} />
                      Take screenshot
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleFileAction('take-photo')}
                    >
                      <CameraIcon className="mr-2" size={16} />
                      Take photo
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <AIInputButton
                  onClick={() => setUseMicrophone(!useMicrophone)}
                  variant={useMicrophone ? 'default' : 'ghost'}
                >
                  <MicIcon size={16} />
                  <span className="sr-only">Microphone</span>
                </AIInputButton>
                <AIInputButton
                  onClick={() => setUseWebSearch(!useWebSearch)}
                  variant={useWebSearch ? 'default' : 'ghost'}
                >
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
                        <Image
                          alt={model.provider}
                          className="inline-flex size-4"
                          height={16}
                          src={`https://img.logo.dev/${model.provider}?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`}
                          unoptimized
                          width={16}
                        />
                        {model.name}
                      </AIInputModelSelectItem>
                    ))}
                  </AIInputModelSelectContent>
                </AIInputModelSelect>
              </AIInputTools>
              <AIInputSubmit disabled={!text} status={status} />
            </AIInputToolbar>
          </AIInput>
        </div>
      </div>
    </div>
  );
};

export default Chat;
