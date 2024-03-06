import about from "../images/about.png"
import Chatbot from "./smallComponents/chatbot";


const About = () => {

    return (
        <div className="container">
            <div className=" about px-[5%] py-[10vh] text-justify">
                <div className="pb-8">
            <img src={about} className="abt-image rounded-[20px]" />
                </div>
                    
                <p>Welcome to NutriKid, a unique heaven for parents grappling with the challenges of cultivating healthy eating habits in their children. We recognize that every child is a one-of-a-kind individual, and our platform is crafted to assist you in tailoring your child&apos;s diet based on their specific needs and preferences.</p>

                <h2 className="font-semibold text-2xl py-4">Our Mission:</h2>
                <p>At NutriKid, we are driven by a mission to empower parents through insightful and personalized guidance on their child&apos;s nutrition journey. By asking a series of carefully curated questions, we aim to understand your child&apos;s unique dietary requirements, ensuring that the recipes we recommend are not only delicious but also aligned with their well-being.</p>

                <h2 className="font-semibold text-2xl py-4">Features that Set Us Apart:</h2>
                <h2 className="font-semibold">Comprehensive Questionnaire:</h2>
                We&apos;ve designed an in-depth questionnaire that delves into various aspects of your child&apos;s health, preferences, and dietary requirements. By gathering this information, we can offer tailored recipe suggestions that cater to your child&apos;s specific needs.

                <h2 className="font-semibold pb-2 pt-5">Smart Filters for Optimization:</h2>
                Our platform employs intelligent filters based on the information provided in the questionnaire. These filters help optimize recipe recommendations, taking into account factors such as allergies, dietary restrictions, and nutritional preferences.

                <h2 className="font-semibold pb-2 pt-5">Flexible Recipe Customization:</h2>
                Recognizing that each family has its own unique tastes and dietary considerations, NutriKid allows you to customize suggested recipes. This ensures that the meals you prepare are not only nutritious but also enjoyable for your child.

                <h2 className="font-semibold pb-2 pt-5">Expert Q&A Community:</h2>
                Engage with our community of certified pediatricians in our dedicated question and answer section. Pose queries about your childs nutrition, and receive expert advice as a part of our commitment to supporting you on your parenting journey.

                <h2 className="font-semibold pb-2 pt-5">Our Commitment:</h2>
                <p>At NutriKid, we are committed to simplifying the path to healthier eating habits for your family. By combining thoughtful questioning with expert insights, we aim to be your trusted ally in fostering a lifelong relationship with nutritious food.<br />

                    Join us on this exciting voyage toward creating a community where the joy of food and optimal health converge. Together, let&apos;s build a foundation for your child&apos;s well-being that lasts a lifetime.</p>
            </div>
            <Chatbot />
        </div>
    )
}

export default About;