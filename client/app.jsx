/* eslint-disable import/extensions */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import Suggestions from './Suggestions.jsx';
import Definition from './Definition.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      firstLetter: '',
      words: [],
      definition: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const {
      search, firstLetter,
    } = this.state;
    if (search.length === 1 && search !== firstLetter) {
      const setNewState = (state) => {
        const newState = { ...state, firstLetter: state.search, definition: '' };
        return newState;
      };
      this.setState(setNewState);
      axios.get(`/search${search}`)
        .then((res) => this.setState({ words: res.data }));
    }
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
    this.setState({ definition: '' });
    if (e.target.value.length === 0) {
      this.setState({ firstLetter: '' });
    }
  }

  handleClick(e) {
    this.setState({ search: e.target.innerText });
    axios.get(`/input${e.target.innerText}`)
      .then((res) => {
        if (res.data[0].definition) {
          this.setState({ definition: res.data[0].definition });
        } else {
          this.setState({ definition: 'Not available' });
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      search,
    } = this.state;
    axios.get(`/input${search}`)
      .then((res) => {
        if (res.data.length === 0) {
          this.setState({ definition: 'Not available' });
        } else {
          this.setState({ definition: res.data[0].definition });
        }
      });
  }

  render() {
    const {
      search, definition, firstLetter, words,
    } = this.state;
    return (
      <div className="autocomplete">
        <SearchBar
          search={search}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />

        <Definition
          definition={definition}
        />

        <Suggestions
          definition={definition}
          firstLetter={firstLetter}
          words={words}
          search={search}
          onClick={this.handleClick}
        />

      </div>
    );
  }
}

export default App;
