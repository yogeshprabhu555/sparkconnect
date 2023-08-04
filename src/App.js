import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import About from './components/About';
// import CreatePost from './components/CreatePost';
import Home from './components/Home';
import WebDev from './components/PopularTags/WebDev';
import Javascript from './components/PopularTags/Javascript'
import Python from './components/PopularTags/Python';
import ReactJs from './components/PopularTags/ReactJs';
import Node from './components/PopularTags/Node';
import Mysql from './components/PopularTags/Mysql';
import ReactNative from './components/PopularTags/ReactNative';
import Tutorial from './components/PopularTags/Tutorial';
import Events from './components/Events';
import Community from './components/community/Community';
import Contact from './components/community/Contact';
import Following from './components/community/Following';
import Followers from './components/community/Followers';
import FriendRequests from './components/community/FriendRequests';
import Notification from './components/Notification';
import About from './components/About/About'
import Aboutconnect from './components/About/Aboutconnect';
import History from './components/About/History';
import AboutContact from './components/About/AboutContact';
import Termsandcondition from './components/About/Termsandcondition';
import Profile from './components/Profile';

function App() {
  return (
<>
<BrowserRouter>
<Routes>  
  <Route path='/' element={<Home/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Community' element={<Community/>}/>
  {/* <Route path='/CreatePost' element={<CreatePost/>}/> */}
  <Route path='/WebDev' element={<WebDev/>}/>
  <Route path='/Javascript' element={<Javascript/>}/>
  <Route path='/Python' element={<Python/>}/>
  <Route path='/ReactJs' element={<ReactJs/>}/>
  <Route path='/Node' element={<Node/>}/>
  <Route path='/Mysql' element={<Mysql/>}/>
  <Route path='/ReactNative' element={<ReactNative/>}/>
  <Route path='/Tutorial' element={<Tutorial/>}/>
  <Route path='/Events' element={<Events/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Following' element={<Following/>}/>
  <Route path='/Followers' element={<Followers/>}/>
  <Route path='/FriendRequests' element={<FriendRequests/>}/>
  <Route path='/Notification' element={<Notification/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Aboutconnect' element={<Aboutconnect/>}/>
  <Route path='/History' element={<History/>}/>
  <Route path='/AboutContact' element={<AboutContact/>}/>\
  <Route path='/Termsandcondition' element={<Termsandcondition/>}/>
  <Route path='/Profile' element={<Profile/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
