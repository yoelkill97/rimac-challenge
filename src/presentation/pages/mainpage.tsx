import Header from '../components/Header/Header';
import MainLayout from '../components/MainLayout/MainLayout';
import ImageCard from '../components/ImageCard/ImageCard';
import QuoteForm from '../components/QuoteForm/QuoteForm';
import Footer from '../components/Footer/Footer';

 function MainPage() {
    return (
        <>
            <Header phoneNumber="(01) 411 6001" />
            <MainLayout>
                <div className="content-wrapper">
                    <ImageCard />
                    <QuoteForm />
                </div>
            </MainLayout>
            <Footer />
        </>
    );
}

export default MainPage;