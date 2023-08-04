import React from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import '../PopularTags/WebDev.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEllipsis, faHome, faSearch, faShareSquare, faSquare, faSquarePlus, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Javascript = () => {
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
 <span className='text-primary mx-1'>#Javascript</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://blog.webix.com/wp-content/uploads/2021/07/16.png" />
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
  <p className='my-auto'>D  islike</p>
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
 <span className='text-primary mx-1'>#Javascript</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/1-1.jpeg?lossy=1&strip=1&webp=1" />
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
 <span className='text-primary mx-1'>#Javascript</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/9.jpeg?lossy=1&strip=1&webp=1" />
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
 <span className='text-primary mx-1'>#Javascript</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://pbs.twimg.com/media/D8lMhN9UEAAwG50.jpg" />
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
 <span className='text-primary mx-1'>#Javascript</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.imgflip.com/6okop9.jpg" />
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
 <span className='text-primary mx-1'>#Javascript  </span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://pic2.zhimg.com/v2-19809eba1d75e1676b473bb6c23464dd_b.jpg" />
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

export default Javascript