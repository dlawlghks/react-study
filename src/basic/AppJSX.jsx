import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function AppJSX() {
    const name = '지환';
    const list = ['우유', '딸기', '바나나'];
    return (
        <>
            <h1 className="orange">{`Hello! ${name}`}</h1>
            <h2>Hello!</h2>
            <p>{name}</p>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <img
                style={{ width: '200px', height: '200px' }}
                src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="nature"
            ></img>
        </>
    );
}

export default AppJSX;
