
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Mark Zuckerberg',
        bio: 'A software developer from California.',
        imgSrc: 'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/people/la-vie-des-people/news/les-rois-du-web-sont-ils-les-superstars-de-demain/mark-zuckerberg-le-fondateur-de-facebook/56150111-1-fre-FR/Mark-Zuckerberg-le-fondateur-de-Facebook.jpg',
        profession: 'Software Developer'
      },
      shows: false,
      lastMounted: null,
      interval: 0
    };
  }

  componentDidMount() {
    this.setState({ lastMounted: Date.now() });
    this.intervalId = setInterval(() => {
      this.setState({ interval: Math.floor((Date.now() - this.state.lastMounted) / 1000) });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, interval } = this.state; 
    return (
      <div className="App">
        <header className="App-header">
          
          <button onClick={this.toggleShow}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
         
          {shows && (
            <div className="profile">
              <img src={person.imgSrc} alt={person.fullName} />
              <h1>{person.fullName}</h1>
              <p>{person.bio}</p>
              <h2>{person.profession}</h2>
            </div>
          )}
         
          <p>Time since last mount: {interval} seconds</p>
        </header>
      </div>
    );
  }
}


export default App;
