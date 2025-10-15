import Header from '../components/Header/Header';
import { StepIndicator } from "../components/Steps/StepIndicator";
import{ Summary } from "../components/Summary/Summary";
function SummaryPage() {
    return (
        <div>
            <Header phoneNumber="(01) 411 6001" />
            <div className="main-content-area">
                <StepIndicator currentStep={1} />
                <Summary />
            </div>
        </div>
    );
}

export default SummaryPage;