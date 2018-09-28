import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    isClicked: [],
    image: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    counter: 0,
    doubleClick: false
  };

  shuffleArray = () => {
    let i = 0;
    let j = 0;
    let temp = null;
    let array = this.state.image;

    for (i = array.length - 1; i > 0; i --) {
      j = Math.floor(Math.random() * (array.length - 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      this.setState({ image: array });
    }
    console.log("end of shuffle:")
    console.log(this.state.image)
    console.log(friends[this.state.image[0]])
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  handleClickChange = paramid => {
    let doubleClick = false;
    if (this.state.isClicked.includes(paramid)) {
      doubleClick = true;
    } else {
      doubleClick = false;
    };
    console.log(doubleClick);
    this.setState({ doubleClick: doubleClick });
    console.log("State: " + doubleClick);
    console.log(paramid);
    this.state.isClicked.push(paramid);
    console.log(this.state.isClicked);
    this.shuffleArray();

    // this.setState(counter++);
  };
  // Map over this.state.friends and render a FriendCard component for each friend object

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <h5>Test your visual memory with this React.js-based game!</h5>
        {this.state.doubleClick ? (
          <h2 className="text-center">Ouch! Don't click it twice :(</h2>
        ) : (
            <div className="big-div">
            <div className="row">
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[0]].id}
                alt={friends[this.state.image[0]].name}
                image={friends[this.state.image[0]].image}
              />
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[1]].id}
                alt={friends[this.state.image[1]].name}
                image={friends[this.state.image[1]].image}
              />
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[2]].id}
                alt={friends[this.state.image[2]].name}
                image={friends[this.state.image[2]].image}
              />
              </div>
              <div className="row">
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[3]].id}
                alt={friends[this.state.image[3]].name}
                image={friends[this.state.image[3]].image}
              />
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[4]].id}
                alt={friends[this.state.image[4]].name}
                image={friends[this.state.image[4]].image}
              />
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[5]].id}
                alt={friends[this.state.image[5]].name}
                image={friends[this.state.image[5]].image}
              />
              </div>
              <div className="row">
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[6]].id}
                alt={friends[this.state.image[6]].name}
                image={friends[this.state.image[6]].image}
              />
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[7]].id}
                alt={friends[this.state.image[7]].name}
                image={friends[this.state.image[7]].image}
              />
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[8]].id}
                alt={friends[this.state.image[8]].name}
                image={friends[this.state.image[8]].image}
              />
              </div>
              <div className="row">
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[9]].id}
                alt={friends[this.state.image[9]].name}
                image={friends[this.state.image[9]].image}
              />
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[10]].id}
                alt={friends[this.state.image[10]].name}
                image={friends[this.state.image[10]].image}
              />
              <FriendCard
                handleClickChange={this.handleClickChange}
                id={friends[this.state.image[11]].id}
                alt={friends[this.state.image[11]].name}
                image={friends[this.state.image[11]].image}
              />
              </div>
            </div>
          )}

      </Wrapper>
    );
  }
}

export default App;
