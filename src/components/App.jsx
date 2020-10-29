import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            chirps: [
                {
                    id: 1,
                    pet: 'Winnie',
                    sound: 'Meow!'
                },
                {
                    id: 2,
                    pet: 'Odin',
                    sound: 'Woof!'
                },
            ],
            homePage: true
        }
    }

    handleNewChirp = () => this.setState({ homePage: false })

    handleNameChange = e => this.setState({ name: e.target.value })

    handleMessageChange = e => this.setState({ message: e.target.value }) 

    handleChirpSubmit = e => {
        e.preventDefault();
        this.setState({ homePage: true, name: '', message: '',  })
    }

    render() {
        if (this.state.homePage) {
            return (
                <main className="container">
                    <section className="row my-2 justify-content-center">
                        {this.state.chirps.map(chirp => {
                            return (
                                <div className="col-8">
                                <div className="jumbotron shadow">
                                <h1 className="display-4">{chirp.pet}</h1> 
                                <p className="lead">{chirp.sound}</p>  
                                <div className="d-flex">
                                    <button onClick={this.handleNewChirp} className="btn btn-success btn-lg ml-auto" href="#" role="button">New Chirp</button>
                                </div>
                            </div>
                        </div>
                            );
                        })}
                    </section>
                </main>
            );
        } else {
            return (
                <main className="container">
                    <section className="row my-2 justify-content-center">
                        <div className="col-8">
                            <form className="form-group p-3 mt-3 shadow rounded">
                                <label htmlFor="chirp">Name</label>
                                <input value={this.state.name} onChange={this.handleNameChange} type="text" className="form-control" />
                                <label htmlFor="chirp" className="mt-2">Message</label>
                                <input value={this.state.message} onChange={this.handleMessageChange} type="text" className="form-control" />
                                <button onClick={this.handleChirpSubmit} className="btn btn-success mt-3">Chirp dat Shit</button>
                            </form>
                        </div>
                    </section>
                </main>
            );
        }
    }
}

export default App;



// .map() doesn't mutate
// smashing jumbotrons together as an array doesn't matter. you can style it 