import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Home, MyTicket, NewTicket, UserProfile } from './routes';
import { ForgotPassword, SignIn, SignUp } from './routes/Auth Pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="new-ticket" element={<NewTicket/>} />
        <Route path="my-ticket" element={<MyTicket />} />
        <Route path="signin" element={<SignIn/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="forgotpassword" element={<ForgotPassword/>} />
        <Route path="user-profile" element={<UserProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
