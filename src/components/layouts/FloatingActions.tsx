'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  Bot,
  X,
  Send,
  Sparkles,
  User,
  RotateCcw,
  Minimize2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatbotService } from '@/service/chatbot.service';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: 'user' | 'ai';
  text: string;
  time: string;
}

const GREETING: Message = {
  id: 'init',
  role: 'ai',
  text: "👋 Hi there! I'm your AI assistant. How can I help you today?",
  time: now(),
};

function now() {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Call the chatbot API with the latest user message
async function getChatbotReply(
  messages: Array<{
    id: string;
    role: 'user' | 'ai';
    text: string;
    time: string;
  }>,
): Promise<string> {
  try {
    // Get the latest user message
    const latestUserMessage = messages.filter(msg => msg.role === 'user').pop();

    if (!latestUserMessage) {
      throw new Error('No user message found');
    }

    const apiMessages = [
      {
        role: 'user' as const,
        content: latestUserMessage.text,
      },
    ];

    const reply = await chatbotService.sendMessage(apiMessages);
    return reply;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to get response';
    console.error('Chatbot API error:', errorMessage);
    return "Sorry, I couldn't process your request. Please try again or contact us on WhatsApp for immediate assistance.";
  }
}

// ─── Variants ────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
};
const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20, originX: 1, originY: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 28 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 20,
    transition: { duration: 0.18 },
  },
};

// ─── Chat Modal ───────────────────────────────────────────────────────────────
function ChatModal({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleReset = () => {
    setMessages([GREETING]);
    setInput('');
    setIsTyping(false);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      text,
      time: now(),
    };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    const reply = await getChatbotReply(updatedMessages);
    const aiMsg: Message = {
      id: crypto.randomUUID(),
      role: 'ai',
      text: reply,
      time: now(),
    };
    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="
        fixed bottom-24 right-6 z-50
        w-[360px] max-h-[520px]
        flex flex-col
        rounded-2xl overflow-hidden
        bg-white dark:bg-gray-900
        border border-gray-200/60 dark:border-gray-700/60
        shadow-2xl shadow-black/20 dark:shadow-black/50
      "
    >
      {/* ── Header ── */}
      <div
        className="
        flex items-center gap-3 px-4 py-3 shrink-0
        bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900
        border-b border-white/10
      "
      >
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6efd0b] to-[#3fa006] flex items-center justify-center shadow-lg shadow-[#6efd0b]/30">
            <Bot size={18} className="text-gray-900" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#6efd0b] rounded-full border-2 border-gray-900" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white leading-none">
            AI Assistant
          </p>
          <p className="text-[11px] text-[#6efd0b] mt-0.5 flex items-center gap-1">
            <Sparkles size={10} /> Online · Ready to help
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            title="Reset chat"
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RotateCcw size={14} />
          </button>
          <button
            onClick={onClose}
            title="Close"
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* ── Messages ── */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50 dark:bg-gray-950/50"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#d1d5db transparent',
        }}
      >
        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar dot */}
              <div
                className={`
                shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] shadow
                ${
                  msg.role === 'ai'
                    ? 'bg-gradient-to-br from-[#6efd0b] to-[#3fa006] text-gray-900'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }
              `}
              >
                {msg.role === 'ai' ? <Bot size={13} /> : <User size={13} />}
              </div>

              <div
                className={`max-w-[72%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-0.5`}
              >
                <div
                  className={`
                  px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed
                  ${
                    msg.role === 'ai'
                      ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-700'
                      : 'bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-br-sm shadow-md'
                  }
                `}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-400 dark:text-gray-500 px-1">
                  {msg.time}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-end gap-2"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6efd0b] to-[#3fa006] flex items-center justify-center shadow shrink-0">
                <Bot size={13} className="text-gray-900" />
              </div>
              <div className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-sm shadow-sm flex gap-1 items-center">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 block"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* ── Input ── */}
      <div className="shrink-0 p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-end gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-3 py-2 border border-transparent focus-within:border-[#6efd0b]/50 transition-colors">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message…"
            rows={1}
            disabled={isTyping}
            className="
              flex-1 resize-none bg-transparent text-sm text-gray-800 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500 outline-none
              max-h-28 leading-relaxed disabled:opacity-50
            "
            style={{ scrollbarWidth: 'none' }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            className="
              shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
              bg-gradient-to-br from-[#6efd0b] to-[#3fa006] text-gray-900
              shadow-md shadow-[#6efd0b]/30
              transition-all duration-200
              hover:scale-110 hover:shadow-lg hover:shadow-[#6efd0b]/40
              disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none
            "
            aria-label="Send message"
          >
            <Send size={14} strokeWidth={2.5} />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 dark:text-gray-600 mt-2">
          Press{' '}
          <kbd className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">
            Enter
          </kbd>{' '}
          to send ·{' '}
          <kbd className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">
            Shift+Enter
          </kbd>{' '}
          for new line
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Support the existing custom event
  useEffect(() => {
    const handler = () => setIsChatOpen(true);
    window.addEventListener('open-chatbot', handler);
    return () => window.removeEventListener('open-chatbot', handler);
  }, []);

  return (
    <>
      {/* ── Chat Modal ── */}
      <AnimatePresence>
        {isChatOpen && <ChatModal onClose={() => setIsChatOpen(false)} />}
      </AnimatePresence>

      {/* ── FABs ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50"
      >
        {/* WhatsApp Button */}
        <motion.div variants={itemVariants} className="group flex items-center">
          <div className="overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-300 ease-in-out">
            <div className="mr-3 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-[#25D366]/30 shadow-lg shadow-[#25D366]/10 whitespace-nowrap">
              <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-100 leading-none">
                Chat on WhatsApp
              </p>
              <p className="text-[11px] text-[#25D366] font-medium mt-0.5">
                Online now
              </p>
            </div>
          </div>
          <Link
            href="https://wa.me/+8801700938429"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex items-center justify-center w-[54px] h-[54px] rounded-full shrink-0 bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
            <span className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <MessageCircle size={24} className="relative z-10 drop-shadow-sm" />
          </Link>
        </motion.div>

        {/* AI Chatbot Button */}
        <motion.div variants={itemVariants} className="group flex items-center">
          <div className="overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-300 ease-in-out">
            <div className="mr-3 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-[#6efd0b]/30 shadow-lg shadow-[#6efd0b]/10 whitespace-nowrap">
              <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-100 leading-none">
                AI Assistant
              </p>
              <p className="text-[11px] text-[#4bb008] dark:text-[#6efd0b] font-medium mt-0.5">
                Ask me anything
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsChatOpen(prev => !prev)}
            aria-label="Open AI Chatbot"
            className={`
              relative flex items-center justify-center
              w-[54px] h-[54px] rounded-full shrink-0
              bg-gradient-to-br from-[#6efd0b] to-[#3fa006] text-gray-900
              shadow-lg shadow-[#6efd0b]/40
              transition-all duration-300
              hover:scale-110 hover:shadow-xl hover:shadow-[#6efd0b]/50
              active:scale-95
              ${isChatOpen ? 'ring-2 ring-[#6efd0b] ring-offset-2 ring-offset-white dark:ring-offset-gray-950' : ''}
            `}
          >
            <span className="absolute inset-0 rounded-full bg-[#6efd0b] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
            <span className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
            <AnimatePresence mode="wait" initial={false}>
              {isChatOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="relative z-10"
                >
                  <Minimize2 size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="relative z-10"
                >
                  <Bot size={24} className="drop-shadow-sm" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
