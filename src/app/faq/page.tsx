import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import backgroundPic from "../../../public/question_marks_background(1).jpg"

function FAQAccordion() {
    return (
        <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/question_marks_background(1).jpg')" }}>

            <h1 className="text-3xl text-pink-700 text-center pt-8 font-semibold">Frequently Asked Questions by our visiotor</h1>
            <div className="absolute inset-0 bg-black opacity-50"></div>


            <Accordion type="single" collapsible className="w-full max-w-screen-sm mx-auto relative z-10 text-white p-4">
                <AccordionItem value="item-1">
                    <AccordionTrigger>How do I find the best tourist spots on this website?</AccordionTrigger>
                    <AccordionContent>
                        You can browse through our curated list of tourist destinations or use the search and filter options to find spots based on location, budget, or activities.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is this website free to use?</AccordionTrigger>
                    <AccordionContent>
                        Yes! Our platform is completely free for users to explore tourist spots, get travel insights, and plan their trips.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How accurate is the information about tourist spots?</AccordionTrigger>
                    <AccordionContent>
                        We source our information from verified travel platforms and official tourism boards. However, we recommend checking official websites for any last-minute updates.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>How can I estimate the cost of staying at a tourist spot?</AccordionTrigger>
                    <AccordionContent>
                        We provide an estimated average cost per night, covering accommodation, food, and local transport. Costs may vary based on the season and travel preferences.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>When is the best time to visit a particular destination?</AccordionTrigger>
                    <AccordionContent>
                        Each destination has an optimal visiting season, which we display on our website. It is based on weather conditions, peak seasons, and special events.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Does this website provide booking options for hotels or tours?</AccordionTrigger>
                    <AccordionContent>
                        We currently do not handle direct bookings, but we provide links to recommended travel and hotel booking platforms.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>Can I find tourist spots near my current location?</AccordionTrigger>
                    <AccordionContent>
                        Yes! Enable location services on your device, and we will suggest nearby tourist destinations based on your location.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>How do I get to a particular tourist spot?</AccordionTrigger>
                    <AccordionContent>
                        Each destination page provides travel information, including the nearest airport, train stations, and available public transport options.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger>Are there any travel restrictions or entry requirements for certain places?</AccordionTrigger>
                    <AccordionContent>
                        Some places may have visa requirements, travel restrictions, or seasonal closures. We recommend checking official tourism and government websites for the latest updates.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger>Is it safe to travel alone to these destinations?</AccordionTrigger>
                    <AccordionContent>
                        Many destinations are safe for solo travelers, but it’s always best to check safety ratings, local guidelines, and traveler reviews before visiting.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default FAQAccordion;