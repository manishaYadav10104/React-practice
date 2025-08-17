const { useState, useEffect, useCallback } = require("react");


function Body(){
    const [numberofProfile,setnumberofProfile]=useState("");
    const [Profile,setProfile]=useState([]);
     const [username, setUsername] = useState(""); 
     const [error, setError] = useState(null);
    



     const generateProfile= useCallback(async(count)=>{
        try{
        const ran=Math.floor(1+Math.random()*10000);
        const response =await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
         if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
        const data =await response.json();
        setProfile(data);
         setError(null); // clear error if success
    } catch (err) {
      setError(err.message);
      setProfile([]);
    }
    },[]);

    const searchProfileByName = async () => {
    if (!username) {
      setError("Please enter a GitHub username");
      setProfile([]);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setProfile([data]); // store single profile in array so map works
      setError(null);
    } catch (err) {
      setError(err.message);
      setProfile([]);
    }
  };



    useEffect(()=>{
        generateProfile(10);

    } ,[generateProfile])

    return(


<div className="but">


    <input type="number" className="input" placeholder="Search here ..." value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
    <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile</button>
    <div className="username">
        <input
          type="text"
          className="input"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={searchProfileByName}>Search Profile</button>
      </div>
    {error && <p style={{ color: "red" }}>Error: {error}</p>}


        <div className="profiles">
            {
                Profile.map((value)=>{
                  return(
                     <div key={value.id} className="cards">
                    <img src={value.avatar_url}></img>
                    <h2>{value.login}</h2>
                    <a href={value.html_url} target="blank">Profile</a>

                   </div>
                  )
                })
                
            }
        </div>
        </div>
    )


}
export default Body;