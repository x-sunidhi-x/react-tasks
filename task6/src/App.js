import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import profile from "./profile_pic.jpg"
import Typewriter from "typewriter-effect";
function App() {
  const passion=["Machine Learning","MERN Stack","Data Science"];
  
  const handleScrolla=()=>{
    const e=document.getElementById('About');
    if(e){
      e.scrollIntoView({behavior:'smooth'});
    }
  }
  
  const handleScrolle=()=>{
    const e=document.getElementById('Education');
    if(e){
      e.scrollIntoView({behavior:'smooth'});
    }
  }
  const handleScrolls=()=>{
    const e=document.getElementById('Skills');
    if(e){
      e.scrollIntoView({behavior:'smooth'});
    }
  }
  const handleScrollp=()=>{
    const e=document.getElementById('Projects');
    if(e){
      e.scrollIntoView({behavior:'smooth'});
    }
  }
  const handleScrollw=()=>{
    const e=document.getElementById('WE');
    if(e){
      e.scrollIntoView({behavior:'smooth'});
    }
  }
  const handleScrollc=()=>{
    const e=document.getElementById('AC');
    if(e){
      e.scrollIntoView({behavior:'smooth'});
    }
  }
  return (
    <div className="App">
      {/* nav */}
      <nav class="row container mw-100 ">
        
      <div class="col-sm-3 n" onClick={handleScrolla} >About</div>
      <div class="col-sm-3 n" onClick={handleScrolle}>Education</div>
      <div class="col-sm-3 n" onClick={handleScrolls}>Skills</div>
      <div class="col-sm-3 n" onClick={handleScrollw}>Work Experience</div>
     
      </nav>
      <div style={{marginLeft:"20%",marginRight:"20%",marginTop:"20px"}}>
     <img src={profile} />
     <div style={{float:"left"}}>
        <h1>Hi, I'm Sunidhi.</h1>
        <p style={{fontSize:"40px"}}>I am passionate about 
        <span style={{fontSize:"50px",fontWeight:"bolder",color:"#CBC3E3"}}>
          <Typewriter 
          options={{
            strings:passion,
            autoStart:true,
            loop:true
          }}
          />     
        </span>
      </p>
      </div>
        </div>
      <div class="p-5 m-3"> </div>
     
      <button class="btn m-5 p-4 text-light border"><a href="https://docs.google.com/document/d/1sUla65gY9Kau9tAh-kFb3MGzloGR_TQI/edit?usp=drive_link&ouid=108058057601357847762&rtpof=true&sd=true" style={{textDecoration:"none"}}>View Resume</a> </button>
     
      <button class="btn m-5 p-4 text-light border"><a href="https://github.com/x-sunidhi-x" style={{textDecoration:"none"}}>View Github</a></button>
      <br/>
      <hr class="m-5"/>

      <h1 id="About">About</h1>
      <p class="about">
      Enthusiastic and hard-working Computer Science 
      student with keen interest in data science and 
      machine learning. Enjoys creative thinking and 
      problem solving. Seeking to learn and explore the
       various fields of technology through projects 
       and internships. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <hr class="m-5"/>

      <h1 id="Education">Education</h1>
      <div style={{textAlign:"left"}} class="m-5">
      <h3>Vellore Institute of Technology</h3>
      <p style={{color:"rgb(170, 170, 170)"}}>B.Tech Computer Science and Engineering with spl. in IoT <br/> 2021-2025 <br/> CGPA: 9.64</p>
      </div>
      <div style={{textAlign:"left"}} class="m-5">
      <h3>St. Francis de Sales Sr. Sec. School</h3>
      <p style={{color:"rgb(170, 170, 170)"}}>High School<br/> 2021 <br/> Score: 96.7%</p>
      </div>
      <hr class="m-5"/>

      <h1 id="Skills">Skills</h1>
      <button class="btn rounded text-white mx-4">Python</button>
      <button class="btn rounded text-white mx-4">Java</button>
      <button class="btn rounded text-white mx-4">C/C++</button>
      <button class="btn rounded text-white mx-4">SQL</button><br/>
      <button class="btn rounded text-white mx-4 mt-3">HTML,CSS,Bootsrap</button>
      <button class="btn rounded text-white mx-4 mt-3">Machine Learning</button>
      <button class="btn rounded text-white mx-4 mt-3">Figma</button>
      <br/><br/><p>Languages: English, Hindi, Tamil</p>
    <br/>
    <hr class="m-5"/>

    <h1 id="WE">Work Experience & Leadership</h1>
    <div>
    <div style={{textAlign:"left",float:"left",marginLeft:"10%"}} >
      <h3>Indian Ports Association</h3>
      <p style={{color:"rgb(170, 170, 170)"}}>
      My responsibility was to develop webpages for the National Maritime <br/> Heritage Complex
      website using HTML, CSS and JavaScript.
        <br/><b style={{color:"rgb(203,203,203)"}}>August 2023 </b> </p>
      </div>
      <div style={{textAlign:"left",float:"right",marginRight:"10%"}} >
      <h3>Branch Representative</h3>
      <p style={{color:"rgb(170, 170, 170)"}}>
        Currently serving as the programme representative for the CSE 
        <br/>with Internet of Things branch at VIT<br/>
        <b style={{color:"rgb(203,203,203)"}}>2023-24</b> </p>
      </div>


    </div>
    <br/>
    <div class="p-5 m-5"> </div>
    <br/>
 <hr class="m-5"/>
    <div style={{textAlign:"left",marginLeft:"10%"}}>
    {/* <span>LinkedIn : https://www.linkedin.com/in/sunidhi-gopalan-182170255/</span> <br/> */}
    <span>Email : gopalansunidhi@gmail.com</span> <br/>
      <a href="https://www.linkedin.com/in/sunidhi-gopalan-182170255/ ">LinkedIn</a>
      <span></span>
    </div>
    
    </div>
  );
}

export default App;
