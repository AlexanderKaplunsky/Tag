import React, { Component } from "react";

import "./main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
      taggetNames: [],
      namesArray: [],
      filtredArray: [],
      tagsArray: [
        {
          name: "car",
          description: "It can ride!",
          category: "Transport",
          isDisabled: 0,
          color: "yellow"
        },
        {
          name: "Tram",
          description: "our city transport",
          category: "Transport",
          isDisabled: 0,
          color: "yellow"
        },
        {
          name: "Orange",
          description: "It's orange!",
          category: "Fruits",
          isDisabled: 0,
          color: "orange"
        },
        {
          name: "Melon",
          description: "It's not a Post Malone!",
          category: "Fruits",
          isDisabled: 0,
          color: "orange"
        },
        {
          name: "Hound",
          description: "It can make you hurt",
          category: "Animals",
          isDisabled: 0,
          color: "beige"
        },
        {
          name: "Parrot",
          description: "It can fly!",
          category: "Animals",
          isDisabled: 0,
          color: "beige"
        }
      ]
    };
  }
  handleInput = e => {
    let namesArray = [];
    this.state.tagsArray.map((item, key) => {
      namesArray.push(item.name);
      this.setState({
        namesArray
      });
      return namesArray;
    });
    let currentValue = e.target.value;
    const filtredArray = namesArray.filter(
      namesArray =>
        namesArray.toLowerCase().indexOf(currentValue.toLowerCase()) > -1
    );
    console.log("Namesarray", filtredArray);
    this.setState({
      currentValue,
      filtredArray
    });
  };
  handleAddTag = e => {
    const taggedList = this.state.taggetNames;
    taggedList.push(e.target.innerText);
    this.setState({
      taggetNames: taggedList,
      currentValue: ""
    });
  };
  handleEnter = e => {
    if (e.target.value !== "" && e.target.value !== " ") {
      if (e.key === "Enter") {
        const taggedList = this.state.taggetNames;
        taggedList.push(e.target.value);
        this.setState({
          taggetNames: taggedList,
          currentValue: ""
        });
      }
    }
  };
  handleDeleteTag = e => {
    let currentArray = this.state.taggetNames;
    currentArray.forEach((element, key) => {
      if (key == e.target.id) {
        currentArray.splice(key, 1);
        console.log(currentArray);
        this.setState({
          taggetNames: currentArray
        });
      }
    });
  };
  render() {
    const state = this.state;
    console.log(state.filtredArray);
    console.log(state.taggetNames);

    return (
      <div className="main-component-wrapper">
        <header className="header">
          <p> Here you can see simple react component</p>
          <h1>AREERS</h1>
        </header>
        <input
          placeholder="Put here your tag"
          className="input"
          value={this.state.currentValue}
          onChange={e => this.handleInput(e)}
          onKeyPress={e => this.handleEnter(e)}
        />
        <div className="tagged-names-wrapper">
          {state.taggetNames.map((item, key) => {
            return (
              <div key={key} className="tagged-names">
                <p> {item} </p>
                <div
                  id={key}
                  className="delete-tag"
                  onClick={this.handleDeleteTag}
                >
                  <p />
                  <p />
                </div>
              </div>
            );
          })}
        </div>
        <div className="tag-sugg-wrapper">
          {state.tagsArray.map((item, key) => {
            let name = item;
            for (let i = 0; i <= state.filtredArray.length; i++) {
              if (
                name.name == state.filtredArray[i] &&
                state.currentValue !== ""
              ) {
                return (
                  <div
                    id={key}
                    style={{ backgroundColor: name.color }}
                    className="tag-sugg-item"
                  >
                    <p onClick={e => this.handleAddTag(e)}>{name.name}</p>
                    <p>description: {name.description}</p>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    );
  }
}

// <div
//   className="sugg-element"
//   style={{ backgroundColor: item.color }}
// >
//   <p>{item.name}</p>
// </div>
