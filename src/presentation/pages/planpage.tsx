import Header from '../components/Header/Header';
import { StepIndicator } from "../components/Steps/StepIndicator";
import { PlanSelection } from "../components/Plan/PlanSelection";
function PlanPage() {
    return (
        <div>
            <Header phoneNumber="(01) 411 6001" />
            <div className="main-content-area"> 
                <StepIndicator currentStep={1} />
                <PlanSelection />
            </div>
        </div>
    );
}
export default PlanPage;