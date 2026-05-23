# 🍬 Candy AI - AI Chat Assistant

A modern, responsive AI chat application built with Next.js, featuring an elegant interface and intelligent code block detection. Candy AI provides a seamless conversational experience with your AI assistant, complete with code formatting and copy functionality.

![Candy AI Preview](https://via.placeholder.com/800x400/140808/ffffff?text=Candy+AI+Chat+Interface)

## ✨ Features

### 🎯 Core Features
- **Real-time AI Conversations** - Chat with Candy AI using advanced AI models
- **Smart Code Detection** - Automatic detection and formatting of code blocks
- **One-Click Code Copy** - Copy code snippets with a single click
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Beautiful gradient backgrounds and smooth animations

### 🎨 User Experience
- **Intuitive Interface** - Clean, distraction-free chat experience
- **Keyboard Shortcuts** - Press Enter to send messages instantly
- **Hidden Scrollbars** - Clean scrolling without visual clutter
- **Dynamic Logo** - Logo repositions elegantly during conversations
- **Smooth Animations** - Polished transitions and hover effects

### 💻 Developer Features
- **Syntax Highlighting** - Proper code formatting with language detection
- **Copy Feedback** - Visual confirmation when code is copied
- **Error Handling** - Graceful error management and user feedback
- **TypeScript Support** - Built with modern development practices

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **AI Integration**: Custom API integration
- **Build Tool**: Turbopack for faster development

## 📋 Prerequisites

Before running this application, make sure you have:
- Node.js 18+ installed
- npm or yarn package manager
- A valid API key for your AI service

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/candy-ai.git
   cd candy-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Add your AI service API key here
   API_KEY=your_api_key_here
   API_URL=your_api_endpoint_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Basic Chat
1. Start a conversation by clicking on any of the suggested prompts
2. Type your message in the input box
3. Press **Enter** or click the send button to send your message
4. Candy AI will respond with helpful information

### Code Interactions
When Candy AI provides code in its response:
1. Code blocks are automatically detected and formatted
2. Click the **"Copy"** button to copy the code to your clipboard
3. The button will show **"Copied!"** with a green checkmark for confirmation

### Keyboard Shortcuts
- **Enter**: Send message
- **Shift + Enter**: New line (when supported)

## 🏗️ Project Structure

```
candy-ai/
├── src/
│   ├── components/
│   │   └── chat/
│   │       ├── ChatBubble.jsx      # Individual message bubbles
│   │       ├── ChatContainer.jsx   # Main chat container
│   │       ├── ChatInput.jsx       # Message input component
│   │       ├── MessageParser.jsx   # Message parsing utilities
│   │       └── TypingIndicator.jsx # Typing animation
│   ├── pages/
│   │   ├── _app.js                # Next.js app component
│   │   ├── _document.js           # Custom document
│   │   ├── index.js               # Main chat page
│   │   └── api/
│   │       └── candy.js            # AI API endpoint
│   ├── styles/
│   │   └── globals.css            # Global styles
│   └── utils/
│       ├── usecandychat.ts         # Chat state management
│       └── fetchcandyreply.js      # API communication
├── public/                        # Static assets
├── .env.local                     # Environment variables
├── package.json                   # Dependencies
└── README.md                      # This file
```

## ⚙️ Configuration

### API Configuration
Update your `.env.local` file with your AI service credentials:

```env
# Example for Groq API
GROQ_API_KEY=your_groq_api_key
API_URL=https://api.groq.com/openai/v1/chat/completions

# Example for OpenAI API
OPENAI_API_KEY=your_openai_api_key
API_URL=https://api.openai.com/v1/chat/completions
```

### Customization
- **Colors**: Modify gradient colors in `globals.css`
- **Layout**: Adjust component spacing in respective files
- **API**: Update API integration in `src/utils/fetchcandyreply.js`

## 🎨 Features Overview

### Smart Code Blocks
- **Automatic Detection**: Identifies code blocks marked with ```
- **Language Support**: Displays language labels (JavaScript, Python, etc.)
- **Copy Functionality**: One-click copying with visual feedback
- **Syntax Formatting**: Monospace fonts and proper indentation

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Large touch targets for mobile devices
- **Adaptive Layout**: Components adjust based on screen size

### Performance
- **Fast Loading**: Optimized with Next.js and Turbopack
- **Smooth Scrolling**: Hidden scrollbars with maintained functionality
- **Efficient Rendering**: React 19 with optimized re-renders

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework
- **React Icons** for the beautiful icon set
- **AI Providers** for making conversational AI accessible

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Made with ❤️ by  Harshitha Vaddadi**

*Experience the future of AI conversations with Candy AI - where every interaction feels natural and every code snippet is just a click away.*