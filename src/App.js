import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";

import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
	if (!localStorage.getItem("username")) return <LoginForm />;

	return (
		<ChatEngine
			height="100vh"
			projectID="94383073-1f84-49b4-aa9b-d837200f1299"
			userName={localStorage.getItem("username")}
			userSecret={localStorage.getItem("password")}
			renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
