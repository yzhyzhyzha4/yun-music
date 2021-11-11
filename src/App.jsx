import { renderRoutes } from "react-router-config";

import router from "./router";
import Footer from "./componments/app-footer";
import Header from "./componments/app-header";
import Musicplayer from "./pages/musicplayer/playerbottom";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>loading</div>}>{renderRoutes(router)}</Suspense>
      <Footer />
      <Musicplayer />
    </div>
  );
}

export default App;
