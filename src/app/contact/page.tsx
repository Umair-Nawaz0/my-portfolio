import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
export default function ContactPage() { return <div className="noise min-h-screen"><Navbar/><main className="container grid gap-12 pb-28 pt-40 lg:grid-cols-2 lg:gap-20"><ContactInfo/><ContactForm/></main><Footer/></div>; }
