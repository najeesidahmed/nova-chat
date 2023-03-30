import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'

import './App.css';
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="e1e447ac-a540-4cd9-80d3-9f0fc8e33989"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
        />
    )
}

export default App;