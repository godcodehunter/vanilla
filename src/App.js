import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


var CallebleDiscription = () => {
  return (
    <div className="memitem">
      <div className="memproto">
        <table className="memname"> 
          <tbody>
            <tr>
              <td className="memname">void  GreatArcStudios::PauseManager::applyAudio</td>
              <td>(</td>
              <td>)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="memdoc">
        <p>The method for changing the applying new audio settings.</p>
      </div>
    </div>
  )
}

var TitleArea = (props) => {
  return (
    <table cellspacing="0" cellpadding="0">
      <tbody>
        <tr style={{height: "56px"}}>
          <td style={{paddingLeft: "0.5em"}}>
            <div id="projectname">
              {props.projectName} &nbsp;
              <span id="projectnumber">{"VER:" + props.projectVersion}</span>
            </div>
            <div id="projectbrief">
              {props.projectBrief}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

var Table = (props) => {
  return(
    <table>
      <tr>
        <td className="indexkey">GreatArcStudios</td>
        <td className="indexvalue">Copyright (c) 2016 Eric Zhu </td>
      </tr>
    </table>
  )
}

var ElementLink = (props) => {
  return (
    <a className="el" href={props.href}>{props.children}</a>
  )
}

var Tilte = (props) => {
  return (
    <div className="title">{props.children}</div>
  )
}

var ItemList = (props) => {
  return (
    <table className="memberdecls">
      <tbody>
        <tr>
          <td className="memItemLeft" align="right" valign="top">static Boolean</td>
          <td className="memItemRight" valign="bottom">Some123</td>
        </tr>
      </tbody>
    </table>
  )
}

var TabBar = () => {
  var tabs = ["MAIN PAGE", "PACKAGES", "CLASSES", "FILES"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]); 

  return (
    <div style={{
      height: 28,
      display: "flex",
      flexDirection: "row",
    }}>
      {tabs.map((tab, index) => (
        <div 
          key={index} 
          onClick={() => setSelectedTab(tab)} 
          style={{ 
            background: selectedTab === tab ? "#272822 url(img_downArrow.png) center top no-repeat" : null,
            padding: "5px 9px 6px", 
            borderTop: "1px dotted #75715E",
            fontSize: selectedTab === tab ? 24 : 14, 
            color: "#9CCCD5", 
            cursor: "pointer" 
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TitleArea 
      projectName="Test project name" 
      projectVersion="1.12.1" 
      projectBrief="This is documentation of vanilla project - open source documentation generator"
    />
    <TabBar/>
    <Tilte>{"Example title"}</Tilte>
    <Table/>
    <ItemList/>
    <h2>
      Member Function Documentation
    </h2>
    <CallebleDiscription/>
    <ElementLink 
      href={"https://docs.google.com/document/d/1Cpb8K7teiBcAWAWaqDObL6C6etrvjaGPL72MeFRxbHY/edit?tab=t.0#heading=h.6uzyxtodjg98"}>
      test
    </ElementLink>
    </div>
  );
}

export default App;
