import './App.css';
import Icons from './components/icons';
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <ul>
        <Icons icon={<FaTelegram />} />
        <Icons icon={<FaLinkedin />} />
        <Icons icon={<FaGithub />} />
        <Icons icon={<FaXTwitter />} />
      </ul>
    </div>
  );
}

export default App;
