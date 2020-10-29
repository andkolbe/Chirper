import React from 'react';
import ChirpCard from './components/ChirpCard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            message: '',
            chirps: [
                { userName: 'Winnie', message: 'Meow!' },
                { userName: 'Odin', message: 'Woof!' }
            ],
            homePage: true
        }
    }

    handleNewChirp = () => this.setState({ homePage: false })


    handleChirpSubmit = e => {
        e.preventDefault();
        const copy = this.state.chirps.slice(); 
        copy.push({ userName: this.state.userName, message: this.state.message })
        this.setState({ homePage: true, userName: '', message: '', chirps: copy })
    }
        /*
    }   this.setState({ 
            homePage: true, 
            userName: '', 
            message: '', 
            chirps: [
                ...this.state.chirps, 
                { userName: this.state.userName, message: this.state.message }
            ] 
        })
        */

    render() {
        if (this.state.homePage) {
            return (
                <main className="container mt-3">
                    <section className="row my-2 justify-content-center">
                        {this.state.chirps.map((chirp, i) => <ChirpCard key={i} pizza={chirp} />)}                                
                    </section>
                <div className="d-flex">
                    <button onClick={this.handleNewChirp} className="btn btn-success btn-lg ml-auto" href="#" role="button">New Chirp</button>
                </div> 
                </main>
            );
        } else {
            return (
                <main className="container">
                    <section className="row my-2 justify-content-center">
                        <div className="col-8">
                            <form className="form-group p-3 mt-3 shadow rounded">
                                <label htmlFor="chirp">Name</label>
                                <input value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} className="form-control" />
                                <label htmlFor="chirp" className="mt-2">Message</label>
                                <input value={this.state.message} onChange={e => this.setState({ message: e.target.value })} className="form-control" />
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