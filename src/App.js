import { Routes, Route } from "react-router-dom";

import { Login, Home, List, Single, New } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route path="new" element={<New />} />
      </Route>
      <Route path="/products">
        <Route index element={<List />} />
        <Route path=":productId" element={<Single />} />
        <Route path="new" element={<New />} />
      </Route>
    </Routes>
  );
};

export default App;
