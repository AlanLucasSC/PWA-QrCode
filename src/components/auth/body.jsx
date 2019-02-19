import React from 'react'

export const Body = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex">
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">{ props.title }</h5>
                            <form className="form-auth" id="auth">
                                { props.children }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}