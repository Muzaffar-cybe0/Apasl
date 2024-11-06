import '../home_Sass/welcomePart.scss'
import Arrow from '../assets/arrow_svg.svg'
export default function WelcomePart() {
  return (
    <div className='welcomePart'>
      <p>Welcome to apasl</p>
      <h1>A great place to receive care</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aut beatae. Saepe sed, voluptates atque fuga voluptatibus neque reprehenderit quas, repellat ad, tempore blanditiis excepturi voluptatum tenetur nihil labore ullam!
      </p>
      <a href="#">learn more <img src={Arrow} alt="Arrow" /></a>
    </div>
  )
}
