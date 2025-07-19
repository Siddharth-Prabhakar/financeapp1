interface ChatBotProps {
  onClose: () => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      content: 'Hello! I\'m your personal finance assistant. How can I help you today?',
      timestamp: '12:00 PM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        content: 'I understand you\'re asking about your finances. Let me help you with that!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl border border-light-border dark:border-dark-border rounded-2xl shadow-2xl w-full h-full flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-light-border dark:border-dark-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-lime-accent rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-light-base dark:text-dark-base" />
          </div>
          <div>
            <h3 className="font-bold text-light-text dark:text-dark-text">FinanceBot</h3>
            <p className="text-xs text-lime-accent">Online</p>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="p-2 bg-light-glass dark:bg-dark-glass rounded-full hover:bg-red-500/20 transition-colors"
        >
          <X className="w-4 h-4 text-light-text dark:text-dark-text" />
        </motion.button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-lime-accent text-light-base dark:text-dark-base'
                  : 'bg-light-glass dark:bg-dark-glass text-light-text dark:text-dark-text border border-light-border dark:border-dark-border'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className="text-xs opacity-70 mt-2">{message.timestamp}</p>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-light-glass dark:bg-dark-glass p-3 rounded-2xl border border-light-border dark:border-dark-border">
              <div className="flex space-x-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 bg-lime-accent rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-lime-accent rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-lime-accent rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-light-border dark:border-dark-border bg-light-glass/50 dark:bg-dark-glass/50 rounded-b-2xl">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about your finances..."
            className="flex-1 px-4 py-3 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
            disabled={isLoading}
          />
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={isLoading || !inputMessage.trim()}
            className="px-4 py-3 bg-lime-accent text-light-base dark:text-dark-base rounded-xl hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-light-base dark:border-dark-base border-t-transparent rounded-full"
              />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};