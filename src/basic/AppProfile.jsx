import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Profile from './components/Profile';

function AppProfile() {
    const handleClick = (event) => {
        console.log(event);
        alert('버튼이클릭됨');
    };
    return (
        <>
            <button onClick={handleClick}>버튼</button>
            <Profile
                image="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720"
                name="James Kim"
                title="프론트엔드 개발자"
                isNew={true}
            />
            <Profile
                image="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=320"
                name="Anna Young"
                title="백엔드 개발자"
            />
            <Profile
                image="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=320"
                name="Bob Yu"
                title="프론트엔드 개발자"
            />
        </>
    );
}

export default AppProfile;
