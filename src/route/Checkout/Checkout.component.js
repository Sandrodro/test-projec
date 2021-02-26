import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.extension.style.scss';

/** @namespace TestProjec/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    // This Function enables the progress bar
    renderCheckMark() {
        if (this.props.checkoutStep === 'SHIPPING_STEP') {
            return 1;
        }

        return '✓';
    }

    renderProgressBar() {
        return (
            <div className="progressBar">
                <hr className="filledLine" />
                <div className="thisStepContainer">
                    <button
                      disabled="true"
                      className="filledCircle"
                    >
                        { this.renderCheckMark() }
                    </button>
                    <span
                      className="boldText"
                    >
                        Shipping
                    </span>
                </div>
                <hr
                  className={ this.props.checkoutStep === 'SHIPPING_STEP' ? 'line' : 'filledLine' }
                />
                <div className="thisStepContainer">
                    <button
                      className={ this.props.checkoutStep === 'SHIPPING_STEP' ? 'circle' : 'filledCircle' }
                    >
                    2
                    </button>
                    <span
                      className={ this.props.checkoutStep === 'SHIPPING_STEP' ? 'regularText' : 'boldText' }
                    >
                        Review & Payments
                    </span>
                </div>
                <hr className="line" />
            </div>
        );
    }

    render() {
        return (
            <main block="Checkout">
                { /* It is inserted here */ }
                { this.renderProgressBar() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
