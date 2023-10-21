import { Container,Row,Col,Button } from "react-bootstrap"
import {useState,useEffect }from 'react'
import "./Home.css"
import FormMovie from "./FormMovie"
function Home(){
    const [movie,setMovie]=useState([])
    const [isLoading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    useEffect(()=>{
        MovieHandler();
    },[])
    async function MovieHandler(){
        setLoading(true)
        setError(null)
        try{
            const res=await fetch("https://react3-6931f-default-rtdb.firebaseio.com/movies.json")
            if(!res.ok){throw new Error("Something went wrong ....Retrying")}
            const data=await res.json()

            const loadedMovie=[]

            for(const key in data){
                loadedMovie.push({
                    id:key,
                    title:data[key].title,
                    producer:data[key].producer,
                    release_date:data[key].release_date
                }
                    
                )
            }
            
        setMovie(loadedMovie)   
        setLoading(false)
        }
        catch(error){
            console.log(error.message)
            let m=error.message
            setError(m)
            setLoading(false)
        }
    }

    async function onAddDataHandler(movie){
        console.log("kk",movie)
        const response= await fetch("https://react3-6931f-default-rtdb.firebaseio.com/movies.json",
            {method:"POST",
            body:JSON.stringify(movie),
            headers:{
                'Content-Type':'application/json'
            }
            });
        const data=await response.json()
        console.log(data)
        MovieHandler();
    }

    async function onDeleteHandler(e){
        e.preventDefault()
        console.log("delete",e.target.id)
        const response=await fetch(`https://react3-6931f-default-rtdb.firebaseio.com/movies/${e.target.id}.json`,
            {method:"DELETE"
            });
       
        console.log(response)
        MovieHandler();
    }
    return (
<div>
    <div style={{backgroundColor:"gray",marginTop:"-15px",height:"180px",width:"100%",color:"white",fontSize:"30px",alignItems:"center"}}>
        <p style={{border:"solid 2px #56CCF2",width:"300px",marginLeft:"480px"}} onClick={MovieHandler}>
            Get our Latest Movie
        </p>
        <div style={{border:"solid 2px #56CCF2",borderRadius:"100%",width:"80px",height:"80px",marginLeft:"580px"}}>
            <div style={{border:"0",background: "transparent",boxSizing: "border-box",width: "0",
            height: "20px",borderColor:"transparent transparent transparent #56CCF2",transition: "100ms all ease",
            cursor: "pointer",borderStyle: "solid",borderWidth: "17px 0 17px 30px",margin:"20px 0px 0px 23px"}}>
            </div>
        </div>
    </div>
    <br/>
    <FormMovie onAddData={onAddDataHandler}/>
    <p style={{fontFamily:"Cursive",fontSize:"30px", padding:"40px"}}><b>MOVIES</b></p>
    <Container style={{width:"75%"}}>
        {error}
        {isLoading ? <h1>Loading... <div className="spinner"></div></h1>: movie.map((m)=>(
        <Row key={m.id}>
            <Col>{m.release_date}</Col>
            <Col>{m.title}</Col>
            <Col>{m.producer}</Col>
            <Col><Button variant="danger"id={m.id}  onClick={onDeleteHandler}>Delete</Button></Col>
            <Col><Button>BUY TICKET</Button></Col><hr/>
        </Row>
        ))}
    </Container>
</div>
    )
}
export default Home