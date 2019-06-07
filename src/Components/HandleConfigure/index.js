import React, { Component } from "react";

import "./HandleConfigure.css";
class HandleConfigure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newCategory: "",
      newDescription: "",
      newColor: "",
      newDisable: "",
      tagsArray: []
    };
  }
  //   handleConfigure = e => {
  //     let name = this.state.currentTag;
  //     let tagsArray = this.state.tagsArray;
  //     tagsArray.map(item => {
  //       if (name == item.name) {
  //         item.isDisabled = 0;
  //         this.setState(tagsArray);
  //       }
  //       return tagsArray;
  //     });
  //   };
  handleChangeName = () => {
    let name = this.props.currentTag;
    let tagsArray = this.props.tagsArray;
    this.props.tagsArray.map((item, key) => {
      if (name == key) {
        item.name = this.state.newName;
        this.setState({ tagsArray });
      }
      return tagsArray;
    });
  };
  handleChangeCategory = () => {
    let name = this.props.currentTag;
    let tagsArray = this.props.tagsArray;
    this.props.tagsArray.map((item, key) => {
      if (name == key) {
        item.category = this.state.newCategory;

        this.setState({ tagsArray });
      }
      return tagsArray;
    });
  };
  handleChangeDescription = () => {
    let name = this.props.currentTag;
    let tagsArray = this.props.tagsArray;
    this.props.tagsArray.map((item, key) => {
      if (name == key) {
        item.description = this.state.newDescription;

        this.setState({ tagsArray });
      }
      return tagsArray;
    });
  };
  handleDisable = e => {
    let name = this.props.currentTag;
    let tagsArray = this.props.tagsArray;
    this.props.tagsArray.map((item, key) => {
      if (name == key) {
        item.isDisabled = e.target.checked;

        this.setState({ tagsArray });
      }
      return tagsArray;
    });
  };
  handleNewName = e => {
    if (e.target.value !== "" && e.target.value !== " ") {
      this.setState({
        newName: e.target.value
      });
    }
  };
  handleNewCategory = e => {
    if (e.target.value !== "" && e.target.value !== " ") {
      this.setState({
        newCategory: e.target.value
      });
    }
  };
  handleNewDescription = e => {
    if (e.target.value !== "" && e.target.value !== " ") {
      this.setState({
        newDescription: e.target.value
      });
    }
  };
  handleNewColor = e => {
    if (e.target.value !== "" && e.target.value !== " ") {
      let name = this.props.currentTag;
      let tagsArray = this.props.tagsArray;
      this.props.tagsArray.map((item, key) => {
        if (name == key) {
          item.color = e.target.value;
          this.setState({ tagsArray });
        }
        return tagsArray;
      });
    }
  };

  render() {
    const props = this.props;
    return (
      <div
        style={{
          position: "absolute",
          left: 0,
          flexDirection: "column",
          display: props.currentTag == "" ? "none" : "flex"
        }}
      >
        <p>Edit your tag</p>
        {props.tagsArray.map((item, key) => {
          if (props.currentTag == key) {
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
                </div>
              </div>
            );
          }
        })}

        <p>Choose color</p>
        <select onChange={e => this.handleNewColor(e)}>
          <option />
          <option name="black">black</option>
          <option name="green">green</option>
          <option name="white">white</option>
          <option name="yellow">yellow</option>
          <option name="red">red</option>
        </select>
        {props.tagsArray.map((item, key) => {
          if (props.currentTag == key) {
            return (
              <div>
                <div>
                  <input
                    placeholder={item.name}
                    onChange={e => this.handleNewName(e)}
                  />
                  <button onClick={() => this.handleChangeName()}>Apply</button>
                </div>

                <div>
                  <input
                    placeholder={item.category}
                    onChange={e => this.handleNewCategory(e)}
                  />
                  <button onClick={() => this.handleChangeCategory()}>
                    Apply
                  </button>
                </div>
                <div>
                  <input
                    placeholder={item.description}
                    onChange={e => this.handleNewDescription(e)}
                  />
                  <button onClick={() => this.handleChangeDescription()}>
                    Apply
                  </button>
                </div>
              </div>
            );
          }
        })}
        {props.tagsArray.map((item, key) => {
          if (key == props.currentTag) {
            return (
              <div>
                <p>Disable</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    onClick={e => this.handleDisable(e)}
                    checked={item.isDisabled}
                  />
                  <span className="slider round" />
                </label>
              </div>
            );
          }
        })}
        <button
          onClick={() => {
            this.props.updateData(this.state.tagsArray);
          }}
        >
          Save changes
        </button>
      </div>
    );
  }
}

export default HandleConfigure;
