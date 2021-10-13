import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Create() {
	return (
		<>
			<Form>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Upload File</Form.Label>
					<Form.Control type="file" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicTitle">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Enter suitable title" />
					{/* <Form.Text className="text-muted">Enter suitable title</Form.Text> */}
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Price</Form.Label>
					<Form.Control type="number" placeholder="Enter suitable price" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Description</Form.Label>
					<Form.Control placeholder="Enter short description" as="textarea" rows={3} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Mint Now
				</Button>
			</Form>
		</>
	);
}
