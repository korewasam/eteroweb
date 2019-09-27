import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <section id = "contacts" className = 'contacts'>
                <div className="contactsLeft"><h1>CONTACTS</h1></div>
                <div className="contactsRight">
                    <div className="wrapper">
                        <p><strong>I'm always excited to work on new projects.
                            Let's make something beautiful.</strong>
                        </p>
                        <p>
                            I am available for freelance projects anywhere in the world
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