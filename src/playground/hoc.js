import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info. please do not share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthen = (WrappedComponent) =>{
    return (props) => (
        <div>
            <WrappedComponent/>
            {
                props.isAuthen ? <p>{props.info}</p>: <p>'Please login to view info'</p>
            }
        </div>
    );
};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthen(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='these are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthen={true} info='these are the details'/>, document.getElementById('app'));
