import React from 'react'
import { Container, } from "semantic-ui-react";
import paper from './paper.png'
import rock from './rock.png'
import scissors from './scissors.png'

class RPS extends React.Component {
  state = {
    showResult: false,
    choices:["rock", "paper", "scissors"],
    result: '',
    compChoice: '',
    compScore: 0,
    playScore: 0 
  }
  
  rock = () => {
    let randomNum = Math.floor(Math.random()*this.state.choices.length)
    let compChoice = this.state.choices[randomNum]
    if(compChoice === 'rock') {
      this.setState({ compChoice: 'Rock,'})
      this.setState({ result: 'Tie!'})
    } else if(compChoice === 'paper') {
      this.setState({ compChoice: 'Paper,'})
      this.setState({ result: 'You Lose', compScore: this.state.compScore + 1 })
    } else {
      this.setState({ compChoice: 'Scissors,'})
      this.setState({ result: 'You Win!',  playScore: this.state.playScore + 1})
    }
    console.log(this.state.result)
  }
  
  paper = () => {
    let randomNum = Math.floor(Math.random()*this.state.choices.length)
    let compChoice = this.state.choices[randomNum]
    if(compChoice === 'paper') {
      this.setState({ compChoice: 'Paper,'})
      this.setState({ result: 'Tie!'})
    } else if(compChoice === 'scissors') {
      this.setState({ compChoice: 'Scissors,'})
      this.setState({ result: 'You Lose!', compScore: this.state.compScore + 1 })
    } else {
      this.setState({ compChoice: 'Rock,'})
      this.setState({ result: 'You Win!',  playScore: this.state.playScore + 1})
    }
    console.log(this.state.result)
  }
  
  scissors = () => {
    let randomNum = Math.floor(Math.random()*this.state.choices.length)
    let compChoice = this.state.choices[randomNum]
    if(compChoice === 'scissors') {
      this.setState({ compChoice: 'Scissors,'})
      this.setState({ result: 'Tie,'})
    } else if(compChoice === 'rock') {
      this.setState({ compChoice: 'Rock,'})
      this.setState({ result: 'You Lose!', compScore: this.state.compScore + 1 })
    } else {
      this.setState({ compChoice: 'Paper,'})
      this.setState({ result: 'You Win!',  playScore: this.state.playScore + 1})
    }
    console.log(this.state.result)
  }
  
  
    render() {
      return (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "25px", paddingBottom: "10px" }}>Rock Paper Scissors</h1>
          <Container style={styles.scoreBoard} >
              <div style={styles.badge1}>User</div> 
              <span> {this.state.playScore} </span>:<span> {this.state.compScore} </span>
              <div style={styles.badge2}>Comp</div>
          </Container>
          <hr />
          <h1 style={{ textAlign: "center" }}>Computer chose {this.state.compChoice} {this.state.result}</h1>
          <h3 style={{ textAlign: "center", paddingBottom: "25px"}}>Click an Option Below to Begin</h3>
          <Container style={styles.container}>
            <br />
            <br />
            <img onClick={this.rock} src={rock} alt='rock'/>
            <img onClick={this.paper} src={paper} alt='paper'/>
            <img onClick={this.scissors} src={scissors} alt='scissors'/>
          </Container>


        </div>
      )
    }
  }
  
  const styles = {
    container: {
      cursor: "pointer",
      alignText: "center",
      display: "flex",
      justifyContent: "space-between"
    },

    scoreBoard: {
      padding: "20px",
      marginLeft: "40%",
      alignItems: "center",
      color: "black",
      fontSize: "65px",
      border: "3px solid black",
      width: "25%",
      position: "relative",
      textAlign: "center"
    },
    badge1: {
      background: "black",
      color: "white",
      fontSize: "25px",
      padding: "5px 10px",
      position: "absolute",
      top: "15px",
      left: "13px"
    },
    badge2: {
      background: "black",
      color: "white",
      fontSize: "25px",
      padding: "5px 10px",
      position: "absolute",
      top: "15px",
      left: "310px"
    },
  
    container: {
      height: '10px',
      width: '3000px',

    }
  
  }
  
  export default RPS