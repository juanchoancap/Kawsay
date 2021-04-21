import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import Start from "../calculator/Start";

const questionsListContainer = () => {
    return (
        <>
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path to="/">
                        <Start />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
        </>
    );
};

export default questionsListContainer;