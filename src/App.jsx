import Footer from "./components/Footer"
import Header from "./components/Header"
import { CriarQuiz } from "./pages/CriarQuiz"

function App() {


  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="bg-gray-300 flex-1 pt-5 px-96">
        <CriarQuiz/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
