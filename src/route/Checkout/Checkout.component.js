import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.extension.style.scss';

/** @namespace TestProjec/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderProgressBar() {
        return (
            <div className="progressBar">
                <hr className="filledLine" />
                <div className="thisStepContainer">
                    <button
                      value="1"
                      label="1"
                      disabled="true"
                      className="filledCircle"
                    >
                    1
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
