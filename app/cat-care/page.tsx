import Image from "next/image";
import tabbyCat from "@/public/pexels-roman-odintsov-5667944.jpg";

export default function CatCare() {
    return (
    <div>
      <h1>Cat Care for Feral Cats</h1>
      <h2>A Comprehensive Guide to Helping Community Cats</h2>
      <Image src={tabbyCat} width={160} height={160} alt="Person petting tabby cat"/>
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