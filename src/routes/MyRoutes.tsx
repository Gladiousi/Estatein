import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} />
        <Route
          path="/about"
          element={
            <>
              <Button className="dark:bg-white">about</Button>
            </>
          }
        />
        <Route path="/contact" element={<></>} />
        <Route path="/properties/:id" element={<></>} />
        <Route path="/properties" element={<></>} />
        <Route path="/services" element={<></>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
