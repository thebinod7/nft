import React from 'react';
import { Row, Container, Col, Card, Button } from 'react-bootstrap';
import PlaceholderImg from '../../assets/images/placeholder.jpg';

export default function Home() {
	return (
		<div style={{ marginTop: 40, marginBottom: 30 }}>
			<Container>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={PlaceholderImg} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">View Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={PlaceholderImg} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">View Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={PlaceholderImg} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">View Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={PlaceholderImg} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">View Details</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
