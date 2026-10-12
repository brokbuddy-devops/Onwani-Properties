import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import Properties from "../components/Properties";
import { allExploreProperties } from "./propertyData";
import "./PropertiesPage.css";

export default function PropertiesPage() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <div className="all-properties-page">
        <Properties properties={allExploreProperties} showViewAll={false} />
      </div>
      <Footer />
    </main>
  );
}
