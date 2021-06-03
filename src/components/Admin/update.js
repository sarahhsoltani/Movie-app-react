import React from 'react'
import {Form,Button,Modal} from  'react-bootstrap'
import {useState,useEffect} from 'react';
import axios from 'axios';
function Update({elm,el,refresh}) {
     const [update,setupdate]=useState
     ( { title:el.title,desc:el.desc,year:el.year,rating:el.rating,image:el.image,type:el.type});
    const [showw, setShoww] = useState(false);
    const handleCloose = () => setShoww(false);
    const handleShoww = () => setShoww(true); 
    
      const handleChangee = e => {
        const { name, value } = e.target;
        //e.target.name=e.target.value
        setupdate({
          ...update,
          [name]: value,
        
        });
        console.log(`mansourrr`,update )
      };
      const updateMovies=(id)=> {
       
        axios.put(`https://movie-app-react-76494-default-rtdb.firebaseio.com/posts/${id}.json`, update)
        .then(response => {
          setupdate( response.data);})
          .then(response=>refresh())
    }
    console.log(`updaaaaaate`, update)

  

    return (
        <div>
               <p onClick={handleShoww}> <i className="fas fa-pen-square edit "  ></i></p> 


<Modal show={showw} onHide={handleCloose}>
  <Modal.Header closeButton>
    <Modal.Title>Put film</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form >
<Form.Group controlId="formBasic">
<Form.Label>Title</Form.Label>
<Form.Control type="text" placeholder=" enter title" name='title'  defaultValue={el.title} onChange={handleChangee}/>

</Form.Group>

<Form.Group controlId="formBasicssword">
<Form.Label>description</Form.Label>
<Form.Control type="text" placeholder="enter description"   defaultValue={el.desc} name='desc'  onChange={handleChangee} />
</Form.Group>
<Form.Group controlId="formBasicPword">
<Form.Label> Rating</Form.Label>
   <Form.Control type="text" placeholder="enter rating"  defaultValue={el.rating} name='rating' onChange={handleChangee} />
</Form.Group>
<Form.Group controlId="formBasicPasrd">
<Form.Label>image</Form.Label>
<Form.Control type="text" placeholder="enter image"  defaultValue={el.image}  name='image'  onChange={handleChangee}/>
</Form.Group>
<Form.Group controlId="formBasicPasswordd">
<Form.Label>type</Form.Label>
<Form.Control type="text" placeholder="entedr type" defaultValue={el.type}  name='type'  onChange={handleChangee} />
</Form.Group>
<Form.Group controlId="formBasicPassworrd">
<Form.Label>year</Form.Label>
<Form.Control type="text" placeholder="enter year" defaultValue={el.year}  name='year'  onChange={handleChangee} />
</Form.Group>

</Form>
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleCloose}>
Close
</Button>
<Button  variant="primary"  onClick={()=>updateMovies(elm)}
>
Save Changes
</Button>
  </Modal.Footer>
</Modal>
        </div>
    )
}
export default Update