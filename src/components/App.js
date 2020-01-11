import React from 'react';
import '../styles/App.css';
import Info from "./Info"
import Technologies from "./Technologies"
import SoftList from "./SoftList"
import ShortStory from "./ShortStory"
import Title from "./Title"
import Tools from "./Tools"
import SocialMedia from "./SocialMedia"
import { Parallax, Background } from 'react-parallax';


function App() {
  return (
    <div className="App">
        <Parallax bgImage={require('../images/image1.png')} strength={600}>
          <div className="Parallax" style={{ width:"100vw", height: "55vh"}}>
          </div>
        </Parallax>
      <Info/>
      <Technologies />

      <Parallax bgImage={require('../images/image1.png')} style={{width:"90vw", margin:"20", transform:"1"}}  strength={800}>
        <div className="Container">
          <div>
            <Title title="Tools"/>
            <Tools />
          </div>
          <div>
            <Title title="Soft Skills"/>
            <SoftList />
            </div>
        </div>
      </Parallax>

      <Title title="Short Story"/>
      <ShortStory />
      <SocialMedia />

    </div>
  );
}

export default App;
