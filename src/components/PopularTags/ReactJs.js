import React from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import '../PopularTags/WebDev.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEllipsis, faHome, faSearch, faShareSquare, faSquare, faSquarePlus, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const ReactJs = () => {
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
 <span className='text-primary mx-1'>#React</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png" />

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
 <span className='text-primary mx-1'>#React</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://miro.medium.com/v2/resize:fit:1400/1*gBhX2KjnmYa-Q-c583cCcw.png" />
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
 <span className='text-primary mx-1'>#React</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://pbs.twimg.com/media/Ee-iuIPXsAENOKh.jpg" />
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
 <span className='text-primary mx-1'>#React</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://marmelab.com/static/1019d1daef4f6f43bcb03af50c0df098/60188/react-meme.jpg" />
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
 <span className='text-primary mx-1'>#React</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://miro.medium.com/v2/1*ft0PvVWhgOwu5gY6sEOeDA.jpeg" />
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
 <span className='text-primary mx-1'>#React</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--H-r2Fmrv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/i16f2we0unt07dhj066n.jpg" />
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

export default ReactJs