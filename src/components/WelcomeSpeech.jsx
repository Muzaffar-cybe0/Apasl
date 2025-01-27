import "../sass/welcomeSpeech.scss";
import MedicalBook from "../assets/medical_book.jpg";
export default function WelcomeSpeech() {
  return (
    <div className="WelcomeSpeech">
      <div className="WelcomeSpeech_child-1">
        <h1>
        Dear Colleagues and Friends,
        </h1>
        <p>
        It is with immense pleasure that I invite you to <span>
        the APASL 2025 Conference</span>, which will be held in the vibrant and historic city of <span>Tashkent, Uzbekistan</span>, <span>on June 4-5, 2025</span>.
        </p>
        <p>
        This international event offers a unique opportunity for a deep and impactful exchange of scientific knowledge and clinical expertise in hepatology and virology. In recent decades, significant scientific advancements in virology and other fundamental disciplines have been actively integrated into practical healthcare. These efforts have led to unprecedented achievements in population screening for viral hepatitis B and C, hepatocellular carcinoma, as well as the widespread inclusion of patients with these conditions in national programs for antiviral treatment and early diagnosis of complications.
        </p>
        <p>
        It is noteworthy that some countries have taken a leading position in integrating hepatitis control programs into their healthcare systems, while in others, this process is just beginning. We hope that the exchange of international experiences in this field will provide invaluable support to all participants of our event.
        </p>
        <p>
        Tashkent, a city where the ancient Silk Road meets modern innovation, provides a fitting backdrop for this prestigious event. With its rich history, stunning architecture, and warm hospitality, Tashkent offers a perfect blend of cultural enrichment and professional growth. From the iconic Khast-Imam Complex to the bustling Chorsu Bazaar, the city’s cultural treasures promise to captivate our international guests. Uzbekistan’s renowned culinary delights and its seamless blend of tradition and modernity further enhance the allure of this destination. Conveniently connected by a well-developed transport network and direct international flights, Tashkent ensures ease of access for participants from across the globe.
        </p>
        <p>
        We are confident that the APASL 2025 Conference in Tashkent will serve as a crucial milestone in fostering collaboration among leading experts in hepatology and will help define the steps we need to take together to achieve the WHO`s goals for combating viral hepatitis by 2030.
        </p>
        <p>
        Join us in Tashkent to engage with colleagues, share your knowledge, and experience the unique hospitality of Uzbekistan.
        </p>
        <p>
        We eagerly look forward to welcoming you to APASL 2025 and ensuring that your time with us is both scientifically rewarding and culturally enriching.
        </p>
        <p>
        Warm regards,
        </p>
        <cite>
        Acad. Erkin Musabayev <br />
        Chair, Association of Hepatologists of Uzbekistan
        </cite>
        <cite>
        Dr. Gulnara Agayeva <br />
        Chair, Association of Hepatologists and Gastroenterologists of Azerbaijan
        </cite>
      </div>

      <div className="WelcomeSpeech_child-2">
        <img src={MedicalBook} alt="logo" />
      </div>
    </div>
  );
}
