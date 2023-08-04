import React from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import '../PopularTags/WebDev.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEllipsis, faHome, faSearch, faShareSquare, faSquare, faSquarePlus, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const ReactNative = () => {
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
 <span className='text-primary mx-1'>#ReactNative</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://pbs.twimg.com/media/Cpwoac3UMAAd3Ax.jpg" />
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
 <span className='text-primary mx-1'>#ReactNative</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec500edb451589534eeb0_81YmKOYspf0R4L_mtVjwghgdnMznvWbvXNA3X4WjNrydSA3_UFdZtt_I5PRc7iYWrgTQRZlgrHjqMimDv0Nugx_pAUQyywbMwKYq_OOM-TkS36qqGNiaWSVRR5JKYyVrOqNIBubP.jpeg" />
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
 <span className='text-primary mx-1'>#ReactNative</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec5023c4ad8fde1783428_Ij2FnlaQX3wZEqCdfWmynR3kTFRlelaf-BXa21868XGfGWQiBv5FISkffcRaUhXrgoKiMX9FiLDGZ2jxwKGdt_vTyGUVHlqcm9uMjUBNQRgltzfgD3TulNwNixxWI2R3ay9vcAc7.jpeg" />
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
 <span className='text-primary mx-1'>#ReactNative</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec5003c4ad84a74783242_Quke726ojvKe9_-8p6r2JO2lLz0dyGqyCCITiIc6vm21JPkjsqvUjaNsUTNRgjo_TQbzJPNDOuwcLeUDpkv7bsIRw_Qb-Q3v4U-NLeo-CWairdyxxmEurw3vH5wVRoWhkoNww177.jpeg" />
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
 <span className='text-primary mx-1'>#ReactNative</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.pinimg.com/736x/9b/fe/f0/9bfef0c0bb3a3cf817872aacf209667f--website-analysis-free-website.jpg" />
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
 <span className='text-primary mx-1'>#ReactNative</span> Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.ytimg.com/vi/g_Y9ZV-y3bM/maxresdefault.jpg" />
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

export default ReactNative