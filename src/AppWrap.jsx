import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1jZWpE.img?w=594&h=396&m=6"
                    name="Bob"
                    size={200}
                />
                <p>안녕하세요!</p>
            </Navbar>
            <Navbar>
                <p>안녕하세요!</p>
            </Navbar>
        </div>
    );
}

function Navbar({ children }) {
    return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img src={image} alt={`${name}'`} width={size} height={size} style={{ borderRadius: '50%' }} />
        </div>
    );
}
