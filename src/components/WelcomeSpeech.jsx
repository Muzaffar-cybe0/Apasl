import "../sass/welcomeSpeech.scss";
import Delta1 from "../assets/Delta1.jpg";
import Delta2 from "../assets/Delta2.jpg";
export default function WelcomeSpeech() {
  return (
    <div className="WelcomeSpeech">
      <div className="WelcomeSpeech_child-1">
        <p>Dear Colleagues and Friends,</p>
        <p>
          It is with immense pleasure that I invite you to the{" "}
          <span>APASL 2025 Conference</span>, which will be held in the vibrant
          and historic <span>city of Tashkent</span>, <span>Uzbekistan</span>,{" "}
          <span>on June 4-5, 2025.</span>
        </p>
        <p>
          This international event offers a unique opportunity for a deep and
          impactful exchange of scientific knowledge and clinical expertise in
          hepatology and virology. In recent decades, significant scientific
          advancements in virology and other fundamental disciplines have been
          actively integrated into practical healthcare. These efforts have led
          to unprecedented achievements in population screening for viral
          hepatitis B and C, hepatocellular carcinoma, as well as the widespread
          inclusion of patients with these conditions in national programs for
          antiviral treatment and early diagnosis of complications.
        </p>
        <p>
          It is noteworthy that some countries have taken a leading position in
          integrating hepatitis control programs into their healthcare systems,
          while in others, this process is just beginning. We hope that the
          exchange of international experiences in this field will provide
          invaluable support to all participants of our event. Tashkent, a city
          where the ancient Silk Road meets modern innovation, provides a
          fitting backdrop for this prestigious event. With its rich history,
          stunning architecture, and warm hospitality, Tashkent offers a perfect
          blend of cultural enrichment and professional growth. From the iconic
          Khast-Imam Complex to the bustling Chorsu Bazaar, the city’s cultural
          treasures promise to captivate our international guests. Uzbekistan’s
          renowned culinary delights and its seamless blend of tradition and
          modernity further enhance the allure of this destination.
        </p>
        <p>
          Conveniently connected by a well-developed transport network and
          direct international flights, Tashkent ensures ease of access for
          participants from across the globe. We are confident that{" "}
          <span>the APASL 2025 Conference in Tashkent</span> will serve as a
          crucial milestone in fostering collaboration among leading experts in
          hepatology and will help define the steps we need to take together to
          achieve the whose goals for combating{" "}
          <span>viral hepatitis by 2030</span>. Join us in Tashkent to engage
          with colleagues, share your knowledge, and experience the unique
          hospitality of Uzbekistan. We eagerly look forward to welcoming you to{" "}
          <span>APASL 2025</span> and ensuring that your time with us is both
          scientifically rewarding and culturally enriching. Warm regards,{" "}
          <span>Acad. Erkin Musabayev Chair</span>, Association of Hepatologists
          of Uzbekistan <span>Dr. Gulnara Agayeva Chair</span>, Association of
          Hepatologists and Gastroenterologists of Azerbaijan.
        </p>
      </div>

      <div className="WelcomeSpeech_child-2">
        <img src={Delta1} alt="logo" />

        <img src={Delta2} alt="logo" />
      </div>
    </div>
  );
}
