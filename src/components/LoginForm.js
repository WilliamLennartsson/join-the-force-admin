import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import { signIn } from '../firebase/functions'
import { useDispatch } from 'react-redux'
// import { userSignedIn } from '../redux/actions/userActions'

export default function LoginForm(props) {
    const history = useHistory();
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
        history.push("/dashboard");
        // const res = await signIn(email, password)
        // if (res.error){
        //     console.log("Error returned..", res.error)
        // } else {
        //     dispatch(userSignedIn(res.user))
        //     history.push("/dashboard");
        // }
    }

    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>
    )
}
