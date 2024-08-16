import Image from "next/image";

import calicoCat from "@/public/pexels-rasul70-18884320.jpg"

export default function Resources() {
    return (
        <main>
            <h1>Resources for Community Cats</h1>
            <Image src={calicoCat} height={160} width={160} alt="calico cat" />
            <section>
                <h3>Food Assistance Programs</h3>
                <p>Brief overview of the importance of proper nutrition for feral cats</p>
                <p>Information on available food assistance programs (if any) in your area</p>
                <p>Tips on how to find food pantries or shelters that assist with pet food</p>
                <p>Guidance on creating a sustainable feeding schedule</p>
                <p>Information on potential food donors (local businesses, pet stores)</p>
            </section>
        </main>
    )
}