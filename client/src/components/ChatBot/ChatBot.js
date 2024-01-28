// ChatbotComponent.js
import React from 'react';
import { Chatbot } from 'react-chatbot-kit';

const ChatbotComponent = ({ isAuthenticated }) => {
  const config = {
    initialMessages: [
      {
        id: 'welcome',
        message: 'Hello! How can I help you with programming today?',
        trigger: 'userQuery',
      },
    ],
    customStyles: {
      // Customize the chatbot styles if needed
    },
    customComponents: {
      // Add custom components if needed
    },
    widgets: [
      // Add widgets if needed
    ],
    handleUserQuery: (message) => {
      // Handle user queries here and send to the backend for processing
      // You can use Axios to make API requests to your backend
    },
  };

  return <Chatbot config={config} />;
};

export default ChatbotComponent;
