import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <section id = "contacts" className = 'contacts'>
                <div className="contactsLeft"><h1>CONTACTS</h1></div>
                <div className="contactsRight">
                    <div className="wrapper">
                        <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti mollitia quis quisquam accusantium. Reiciendis, temporibus
                            architecto neque error illo laudantium, repudiandae id voluptatum dolor
                            quasi consectetur maxime odit in dolores!s</strong>
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora!
                        </p>
                        <h2>Sam Njuguna</h2>
                        <p>Web Design & development <br/> korewasam@gmail.com <br/> +254724273463 </p>
                        <div className="socials"></div>
                    </div>
                </div>
                
            </section>
        );
    }
}


export default Contacts;