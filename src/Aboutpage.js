import React from "react";
import aboutimage from "./img/aboutimage.webp"

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <img src={aboutimage} height={234} width={400}></img>
            <p>Prime Electronics Recycling is a family owned business. We as a family care deeply about people and the environment, so excellent customer service is our highest priority. Our goal is to reduce electronic waste.</p>
            <h3>Why Recycle?</h3>
            <p>Recycling electronics is really important because we use a ton of devices nowadays. But when we toss them out, they become electronic waste, which is bad for the environment. However, if we recycle them, we can reuse valuable materials like metals and plastics inside them. This not only helps save resources but also stops harmful chemicals from polluting our soil and water. Also, some electronics can even be refurbished, giving them a new life and reducing the need to make new ones. So, by recycling our old electronics, we're doing our part to keep the planet clean and safe for everyone.</p>
            <h3>Why us?</h3>
            <p>We guarantee that we will act in the most environmentally responsible manner and with the highest level of sensitivity to our client's security and privacy needs at all times. Any items that are brought to us will be refurbished and either reused or donated if possible. If products are too old or defective, we will have the product disassembled and reusable materials will be reclaimed. We will only work with partners that share our commitment to responsible stewardship of the environment. We also promise to use methods of sanitation to keep your data safe. We're working hard to keep our environment clean and green.</p>
            <h4>Contact Us</h4>
            <p>You can reach us by contacting us through email, phone, or social media.</p>
            <p>Email: primerecycle@example.com</p>
            <p>Phone: (510)-111-1111</p>
            <p>Telegram: prime_recycle12</p>
            <p>Twitter: @primerecycling1</p>
            
        </div>
    )
}

export default About;