

const UserList = ({ user }) => {
    return (
        <div className="App">
            < div className="container" >
            {user.map((el) =>

                
                    <div className="card">
                
                        <div className="card__name">
                            <h6>{el.name}</h6>
                            <h6>{el.username}</h6>
                        </div>
                        <ul className="items">
                            
                            <h4> {el.email} </h4>
                            <h5>{el.address.street}</h5>
                            <h5>{el.phone}</h5>
                            <h5>{el. website}</h5>
                            <h5>{el.company.name}</h5>
                           
                            
                        </ul>

                    </div>
                



            )}
            </div>
        </div>
    )



}

export default UserList