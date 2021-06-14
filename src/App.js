import "./App.css"
import Accordion from "./components/Accordion"

function App() {
  return (
    <div className="App">
      <div className="accordions">
        <Accordion title="Titre 1" content="Contenu 1" />
        <Accordion title="Titre 2" content="Contenu 2" />
        <Accordion title="Titre 3" content="Contenu 3" />
        <Accordion title="Titre 4" content="Contenu 4" />
      </div>
    </div>
  )
}

export default App
