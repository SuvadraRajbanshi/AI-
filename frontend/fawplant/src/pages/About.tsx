import subu from "../assets/subu.png";
import balu from "../assets/balu.png";
import bharti from "../assets/bharti.png";

interface CustomCardInterace {
    name: string;
    description: string;
    image: string;
}

const CustomCard = ({ description, image, name }: CustomCardInterace) => {
    return (
        <div className="profile-container">
            <div className="profile-image-container">
                <img src={image} alt="Profile" />
            </div>
            <div className="profile-details-container">
                <h2>{name}</h2>
                <div>{description}</div>
            </div>
            <style>{`
                .profile-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    max-width: 400px;
                }
                .profile-image-container {
                }
                .profile-image-container img {
                    height: 150px;
                    width: 150px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .profile-details-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}</style>
        </div>
    );
    // return (
    //     <Card style={{ width: "300px", margin: "10px" }}>
    //         <CardActionArea>
    //             <CardMedia
    //                 component="img"
    //                 height="140"
    //                 image={image}
    //                 alt="green iguana"
    //             />
    //             <CardContent>
    //                 <Typography gutterBottom variant="h5" component="div">
    //                     {title}
    //                 </Typography>
    //                 <Typography variant="body2" color="text.secondary">
    //                     {description}
    //                 </Typography>
    //             </CardContent>
    //         </CardActionArea>
    //     </Card>
    // );
};

//
const About = () => {
    return (
        <div
            style={{
                // background: "red",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "60px",
            }}
        >
            <CustomCard
                name="Balram Rajbanshi"
                description="Student of B.Sc.CSIT. i dont know what to write here. this is just random description"
                image={balu}
            />
            <CustomCard
                name="Bharti Roy"
                description="Student of B.Sc.CSIT. i dont know what to write here. this is just random description"

                image={bharti}
            />
            <CustomCard
                name="Suvadra Rajbanshi"
                description="Student of B.Sc.CSIT. i dont know what to write here. this is just random description"
                image={subu}
            />
        </div>
    );
};
export default About;
