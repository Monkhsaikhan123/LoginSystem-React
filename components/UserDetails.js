import React,{ Component} from 'react'

export default class userDetails extends Component {
    componentDidMount(){
        fetch('http://localhost:3000/userData',{
            method:'POST',
            crossDomain:true,
            headers:{
                "Content-type":"application/json",
                Accept:"appilcation/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                token:window.localStorage.getItem('token')
            }),
        })
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data, "userData")
            })
    }

    render(){
        return(
            <div>
                Name<h1>Munkh</h1>
                Email<h1>monkhsaikhan01@gmail.com</h1>
            </div>
        )
    }
}