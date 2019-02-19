import React, {Component} from 'react'

class GuestHeader extends Component {
    render(){
        return (
            <header className="masthead" style={
                {
                    backgroundImage: "url('img/Destaque _+_.png')"
                }
            }>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Projetos</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default GuestHeader