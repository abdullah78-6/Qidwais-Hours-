import Display from "./components/display-article/display"
import Footer from "./components/footer/footer";

function App() {
    const url="http://localhost:9000";
    return <div>
        <Display url={url}/>
        <Footer url={url}/>
    </div>
}

export default App
