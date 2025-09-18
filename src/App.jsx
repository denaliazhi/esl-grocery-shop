/**
 * This component is the app's entry point.
 */

import Footer from "./components/Footer";
import Header from "./components/Header";
import Lesson from "./components/Lesson";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <h1>Grocery Shopping</h1>
        <Lesson></Lesson>
      </div>
      <Footer />
    </>
  );
}
