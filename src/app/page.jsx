import GallerySection from "./catering/gallerySection";
import ServicesSection from "./catering/servicesSection";
import Footer from "./components/footer";
import Navbar from "./components/navbar";




export default function Home() {
  return (
    <>
      <Navbar></Navbar>
    <GallerySection></GallerySection>  
      <ServicesSection/>
      <Footer></Footer>
    </>
  );
}
