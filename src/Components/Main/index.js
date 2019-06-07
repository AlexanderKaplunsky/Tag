import React, { Component } from "react";

import HandleConfigure from "../HandleConfigure/";

import "./main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
      taggetNames: [],
      currentTag: "",
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
      ],
      categArray: []
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
    this.setState({
      currentValue,
      filtredArray
    });
  };
  handleAddTag = e => {
    const taggedList = this.state.taggetNames;
    this.state.tagsArray.filter(item => {
      if (item.name == e.target.innerText) {
        taggedList.push(item);
      }
    });
    this.setState({
      taggetNames: taggedList,
      currentValue: ""
    });
  };
  handleEnter = e => {
    if (e.target.value !== "" && e.target.value !== " ") {
      if (e.key === "Enter") {
        const taggedList = this.state.taggetNames;
        const newObj = {
          name: e.target.value,
          description: "your tag",
          category: "Other",
          isDisabled: 0,
          color: "orange"
        };
        taggedList.push(newObj);
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
        this.setState({
          taggetNames: currentArray
        });
      }
    });
  };
  updateData = value => {
    this.setState({ taggetNames: value });
  };
  render() {
    const state = this.state;
    console.log(state.categArray);
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
            let currentName = item.name;
            return (
              <div
                key={key}
                className="tagged-names"
                style={{
                  backgroundColor: item.color,
                  opacity: item.isDisabled ? "0.2" : "1"
                }}
              >
                <div>
                  <p>Name:{item.name} </p>
                  <p>Category:{item.category}</p>
                  <p>Description:{item.description}</p>
                  <button
                    id={key}
                    name={currentName}
                    onClick={e => this.setState({ currentTag: e.target.id })}
                  >
                    edit tag
                  </button>
                </div>
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
            let currentName = item.name;
            for (let i = 0; i <= state.filtredArray.length; i++) {
              if (
                name.name == state.filtredArray[i] &&
                state.currentValue !== ""
              ) {
                return (
                  <div id={key} className="tag-sugg-item">
                    <div
                      className="first"
                      style={{ backgroundColor: name.color }}
                    >
                      <p>{name.category}</p>
                    </div>
                    <div className="middle">
                      <p onClick={e => this.handleAddTag(e)}>{name.name}</p>
                      <p>description: {name.description}</p>
                    </div>
                    <div
                      className="last"
                      style={
                        name.isDisabled ? { backgroundColor: "black" } : null
                      }
                    />
                  </div>
                );
              }
            }
          })}
        </div>
        <HandleConfigure
          tagsArray={state.taggetNames}
          currentTag={state.currentTag}
          updateData={this.updateData}
        />
      </div>
    );
  }
}
