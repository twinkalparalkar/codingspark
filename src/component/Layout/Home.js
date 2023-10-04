import { Container,Row,Col,Button } from "react-bootstrap"
import {useState }from 'react'
import "./Home.css"
function Home(){
    const [movie,setMovie]=useState([])
    const [isLoading,setLoading]=useState(false)
    async function MovieHandler(){
        setLoading(true)
        const res=await fetch("https://swapi.dev/api/films/")
        const data=await res.json()

        const transformeddata=data.results.map(movie=>{
                return {id:movie.episode_id,
                title:movie.title,
                producer:movie.producer,
                release_date:movie.release_date
            }
            })
        setMovie(transformeddata)   
        setLoading(false)
    }
    return (
<div>
    <div style={{backgroundColor:"gray",marginTop:"-15px",height:"180px",width:"100%",color:"white",
    fontSize:"30px",alignItems:"center"}}>
        <p style={{border:"solid 2px #56CCF2",width:"300px",marginLeft:"480px"}}
        onClick={MovieHandler}>Get our Latest Movie</p>
        <div style={{border:"solid 2px #56CCF2",borderRadius:"100%",width:"80px",height:"80px",marginLeft:"580px"}}>
        <div style={{border:"0",
        background: "transparent",
        boxSizing: "border-box",
        width: "0",
        height: "20px",
        borderColor:"transparent transparent transparent #56CCF2",
        transition: "100ms all ease",
        cursor: "pointer",
        borderStyle: "solid",
        borderWidth: "17px 0 17px 30px",margin:"20px 0px 0px 23px"}}>
        </div>
        </div>
       
    </div>
    <p style={{fontFamily:"Cursive",fontSize:"30px", padding:"40px"}}><b>MOVIES</b></p>
    <Container style={{width:"75%"}}>
        {isLoading ? <h1>Loading <div className="spinner"></div></h1>: movie.map((m)=>(
        <Row key={m.id}>
            <Col>{m.release_date}</Col>
            <Col>{m.title}</Col>
            <Col>{m.producer}</Col>
            <Col><Button>BUY TICKET</Button></Col><hr/>
        </Row>
        ))}
    </Container>
</div>
    )
}
export default Home