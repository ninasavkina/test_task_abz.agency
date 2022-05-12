import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from "@mui/material/Avatar";
import ava from "./salvador.png"

const cardList = [
    {
        id:"1",
        ava: "./salvador.png",
        name: "Salvador Stewart Flynn Thomas",
        position: "Leading specialist of the department",
        mail: "frontend_develop@gmail.com",
        phone: "+38 (098) 278 44 24",
    },
    {
        id:"2",
        ava: "./salvador.png",
        name: "Takamaru Ayako Jurrien",
        position: "Lead Independent Director",
        mail: "Takamuru@gmail.com",
        phone: "+38 (098) 278 90 24",
    },
    {
        id:"3",
        ava: "./salvador.png",
        name: "Ilya",
        position: "Co-Founder and CEO",
        mail: "Ilya_founder@gmail.com",
        phone: "+38 (098) 235 44 24",
    },
    {
        id:"4",
        ava: "./salvador.png",
        name: "Alexandre",
        position: "Lead Independent Director",
        mail: "Alexandr_develop@gmail.com",
        phone: "+38 (098) 198 44 24",
    },
    {
        id:"5",
        ava: "./salvador.png",
        name: "Winny",
        position: "Former Senior Director",
        mail: "Winny_develop@gmail.com",
        phone: "+38 (098) 278 22 88",
    },
    {
        id:"6",
        ava: "./salvador.png",
        name: "Simon",
        position: "President of Commerce ",
        mail: "Simon@gmail.com",
        phone: "+38 (098) 278 44 00",
    },
]

class Home extends React.Component {

    render() {
        return (
            <div className="maincontainer">
                <section>

                    <div class="container py-5">
                        <header class="text-center mb-5 text-white">
                            <div class="row">
                                <div class="col-lg-8 mx-auto">
                                    <h1>Working with GET request</h1>
                                </div>
                            </div>
                        </header>

                        <div id="card" class="row text-center align-items-end">
                            {cardList.map((cards, crd) => (
                                <div class="col-lg-4 mb-5 mb-lg-3" key={crd}>

                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <Avatar
                                        className="avatar"
                                        src={ava}
                                        sx={{ width: 70, height: 70 }}
                                        />
                                        <h1 id="1" class="h6 text-capitalize font-weight-normal mt-3 mb-3">{cards.name}</h1>

                                        <ul class="list-unstyled my-0 text-small text-left">
                                            <li class="mb-1">
                                                Leading specialist of the department</li>
                                            <li class="mb-1">
                                                frontend_develop@gmail.com</li>
                                            <li class="mb-1">
                                                +38 (098) 278 44 24</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}

                            <div className="btn2">
                                <a className="template-btn2 go-contact-area">Show more</a>
                            </div>

                        </div>
                    </div>
                </section>

            </div>


        )
    };
}

export default Home;
