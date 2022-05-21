import { AuthProvider } from "./context/AuthContex";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <>
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </>
  )
}

export default App;
