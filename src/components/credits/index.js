import { imgUrl } from "../../helpers";
import Style from "./style";

const Credits = ({data}) => {
    const actorsRenderFarm = () => {
        const act= data ? data.filter(item=>{
            return item.known_for_department === "Acting"
        }) : []
        const actors = act.slice(0, 4)
        return actors.map((item)=>{
            const defaulImage = "/imgs/no-image.jpg";
            const imageUrl = `${imgUrl}${item.profile_path}`
            const checkImage = (item.hasOwnProperty("profile_path") && item.profile_path !==null) ? imageUrl : defaulImage;
            return (
            <li key={item.id}>
                <img src={checkImage} alt={item.name}/>
                <p ><span>{item.name}</span> as {item.character}</p>
            </li>
            )
        })
    }
    return (
        <Style>
            <h3>Actors :</h3>
            <ul>
                {actorsRenderFarm()}

            </ul>
        </Style>
        
    )
} 

export default Credits;