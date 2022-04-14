
import style from "./style.module.scss";
import Block from "./Block";

const Features = () => {
    return (
        <div className={style.wrapper}>

            <Block topic="Realtime Surveys" paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab eum consequuntur porro quia omnis, ad maxime dolore laboriosam rem earum asperiores aliquam id, fugit officia at, dignissimos unde laudantium. " url="/fast-hiring.svg" />
            <Block topic="Perfact Analysis" paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab eum consequuntur porro quia omnis, ad maxime dolore laboriosam rem earum asperiores aliquam id, fugit officia at, dignissimos unde laudantium.." url="/perfact-match.svg" />
            <Block topic="Dashboard Support " paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab eum consequuntur porro quia omnis, ad maxime dolore laboriosam rem earum asperiores aliquam id, fugit officia at, dignissimos unde laudantium." url="/remote-ready.svg" />



        </div>
    )
}

export default Features