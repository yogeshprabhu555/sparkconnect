import React from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import '../PopularTags/WebDev.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEllipsis, faHome, faSearch, faShareSquare, faSquare, faSquarePlus, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Tutorial = () => {
  return (
    <>
    <div className="container-fluid"  style={{backgroundImage:`url("https://wallpaperaccess.com/full/1526041.jpg")`}}>
      <div className="row">
        <NavBar/>
      </div>
      <div className="row">
      <div id='SideBar' className="col-lg-3" ><SideBar/></div>
      
      <div id='SideBar' className="col-lg-9">

      <Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
 <span className='text-primary mx-1'>#Tutorial</span> HTML Tutorial for Beginners: HTML Crash Course 
 <a style={{textDecoration:'none', marginLeft:'1vh'}}  href="https://youtu.be/qz0aGYrrlhU">Click Here 👈</a>
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.ytimg.com/vi/qz0aGYrrlhU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2atY5v7B_RiGRNjykbLKft3eyVw" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
 <span className='text-primary mx-1'>#Tutorial</span> CSS Tutorial for Beginners  
 <a style={{textDecoration:'none', marginLeft:'1vh'}}  href="https://www.youtube.com/watch?v=qKoajPPWpmo&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C">Click Here 👈</a>
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.ytimg.com/vi/qKoajPPWpmo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCfSLbkrUeTHEnSJm8Lo-eZDlYmoA" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
 <span className='text-primary mx-1'>#Tutorial</span> Bootstrap 5 Tutorial
 <a style={{textDecoration:'none', marginLeft:'1vh'}}  href="https://www.youtube.com/watch?v=O_9u1P5YjVc&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR">Click Here 👈</a>
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.ytimg.com/vi/O_9u1P5YjVc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDaMKisVKd1lnwXxmYYv71e_MigOA" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
 <span className='text-primary mx-1'>#Tutorial</span> React Tutorial for Beginners
 <a style={{textDecoration:'none', marginLeft:'1vh'}}  href="https://www.youtube.com/watch?v=SqcY0GlETPk" target={'_blank'}>Click Here 👈</a>
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxxEfavbxbAns6HTvgSrFA1b0Rrw" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
 <span className='text-primary mx-1'>#Tutorial</span> MySQL Tutorial for Beginners [Full Course] 
 <a style={{textDecoration:'none', marginLeft:'1vh'}}  href="https://www.youtube.com/watch?v=7S_tz1z_5bA">Click Here 👈</a>
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.ytimg.com/vi/7S_tz1z_5bA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQRzwgDiYUwdEuDvClYax7UBqlWA" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
 <span className='text-primary mx-1'>#Tutorial</span> Node.js Tutorial for Beginners: Learn Node in 1 Hour
 <a style={{textDecoration:'none', marginLeft:'1vh'}} href="https://www.youtube.com/watch?v=TlB_eWDSMt4"> Click Here 👈</a>
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.ytimg.com/vi/TlB_eWDSMt4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZra_0VBTMEYeCaYUD3QQ0G2kGWA" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}



      </div>
      </div>
    </div>
    </>
  )
}

export default Tutorial