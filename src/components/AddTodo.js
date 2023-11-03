import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { addTodo } from '../redux/actions/todo'
import { connect } from 'react-redux'
import { v4} from 'uuid';

const AddTodo = ({addTodo}) => {  //addTodo- reducer function that change the state

   const [todo, setTodo] = useState({
        title: '',
        description: '',
        id:''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        //add todo in store
        
        addTodo({...todo, id:v4()})
        console.log(todo);

        //after add title and description when we click the button then after title and description should be blank 
        //this is done using setTodo() function
        setTodo({         
            title: '',
            description: ''
        })
    }

  return (
   <Container>
    <Row>
        <Col md={12}>

            <Card>
                <Card.Body className='shadow-sm'>
                    <h3>Add Todo here!!</h3>
                    <DisplayCount/>

                 {/* form  */}
                 <Form onSubmit={handleSubmit}>
                    {/* title  */}
                    <Form.Group>
                        <Form.Label>Todo Tilte</Form.Label>
                        <Form.Control
                         type='text'
                          placeholder='Enter here'
                          value={todo.title}
                          onChange={event => setTodo({...todo, title: event.target.value})}
                          //when we do any changes in this field then data pass into title means change the value of title
                           />
                          
                    </Form.Group>

                     {/* description  */}
                     <Form.Group className='mt-4'>
                        <Form.Label>Todo Descriptipn</Form.Label>
                        <Form.Control
                         as={'textarea'} 
                         type='text' 
                         placeholder='Enter here'
                         value={todo.description}
                         onChange={event => setTodo({...todo, description: event.target.value})}
                         //when we do any changes in this field then data pass into description  means change the value of description
                         />
                    </Form.Group>

                    {/* button  */}
                    <Container className=' mt-3'>
                        <Button type='submit' variant='primary '>
                            Add Todo
                        </Button>
                    </Container>
                 </Form>

                </Card.Body>
            </Card>
        </Col>
    </Row>
   </Container>
  )
}

const mapStateToProps = (state) => ({})  //call every time when the redux store state changes


//dispatch is call the reducer and perform action (action is addTodo)
//map the addTodo function 
const mapDispatcToProps = (dispatch) => ({
    addTodo: (todo) => (dispatch(addTodo(todo)))
})

//contect react with redux using connect method
export default connect(mapStateToProps, mapDispatcToProps) (AddTodo);