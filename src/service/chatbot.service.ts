interface ChatMessage {
  role: 'user';
  content: string;
}

interface ChatbotResponse {
  success: boolean;
  message: string;
  data: {
    reply: string;
    leadSaved: boolean;
  };
}

export const chatbotService = {
  sendMessage: async (messages: ChatMessage[]): Promise<string> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages }),
        },
      );

      const result: ChatbotResponse = await response.json();
      console.log(result);

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to get chatbot response');
      }

      return result.data.reply;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred';
      throw new Error(errorMessage);
    }
  },
};
