/* Create the Context */
import React from "react";

const UserContext = React.createContext()     /* Create Context */

/* const UserContext = React.createContext('keerthi') 

            ==> This is the default value send to the provider, 
                    bt make sure if u send the value here and also in the provider,
                        thn provider's value will be displayed not the defalut value u provided here...
            
            
*/

const UserProvider = UserContext.Provider    /* Provider */

const UserConsumer = UserContext.Consumer    /* consumer */

export {UserProvider, UserConsumer}

export default UserContext