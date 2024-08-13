import Image from "next/image";

import "./page.module.css"
import tabbyCat from "@/public/pexels-roman-odintsov-5667944.jpg";

export default function CatCare() {
    return (
    <div className="cat-care">
      <h1>Cat Care for Feral Cats</h1>
      <h2>A Comprehensive Guide to Helping Community Cats</h2>
      <Image src={tabbyCat} width={160} height={160} alt="Person petting tabby cat"/>
      <h3>What is a Community Cat?</h3>
      <p>Community Cat is an umbrella term used to encompass both stray cats and feral cats.
      A stray cat is a cat who once had a home or was socialized to people at some point in their life, 
      but has lost their home, or was abandoned. A feral cat is an unsocialized cat who has either never
      had physical contact with humans or it has diminished over time so that they are no longer 
      accustomed to it. They are fearful of people and may never enjoy being a lap cat or living indoors.</p>
      <p><a href="https://www.alleycat.org/resources/feral-and-stray-cats-an-important-difference/#:~:text=A%20feral%20cat%20is%20an,cat%20or%20enjoy%20living%20indoors.">The Difference Between Strays and Ferals</a></p>
      <h3>Feeding</h3>
      <p>
        Provide consistent feeding stations with dry or wet cat food suitable 
        for outdoor conditions. Maintain clean water.
      </p>
      <h3>Shelter</h3>
      <p>
        Create or provide outdoor shelters for feral cats to protect them from 
        the elements.
      </p>
      <h3>Basic Health Care</h3>
      <p>
        Be familiar with signs of illness in cats (e.g., wounds, lethargy). 
        Contact a vet or TNR service if you suspect a sick cat.
      </p>
    </div>
    )
}