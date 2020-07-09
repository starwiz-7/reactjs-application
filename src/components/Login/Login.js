import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import styles from './Login.module.css';
import unnamed from '../../assets'

export default function Login() {
    return (
            <Row>
                <Col xs="6">.col-6</Col>
                <Col xs="6">
                    <img src={unnamed}/>
                </Col>
            </Row>
    )
}
