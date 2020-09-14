import React from "react";
import propTypes from "prop-types";
import Card from "elements/Card";
import Lists from "elements/Lists";
import Button from "elements/Button";

export default function Pricing(props) {
  return (
    <Card hasShadow>
      <div className="pricing-item-content">
        <div className="pricing-item-header pb-24 mb-24">
          <div className="pricing-item-price mb-4">
            <span className="pricing-item-price-currency h2">
              {props.data.currencySymbol}
            </span>
            <span
              className="pricing-item-price-amount h1 pricing-switchable"
              data-pricing-monthly={props.data.pricing_monthly}
              data-pricing-yearly={props.data.pricing_yearly}
            >
              {props.data.price}
            </span>
          </div>
          <div className="text-xs text-color-low">{props.data.description}</div>
        </div>
        <div className="pricing-item-features mb-40">
          <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
            What’s included
          </div>
          <Lists
            data={props.data.features}
            className="pricing-item-features-list list-reset text-xs mb-32"
            isSmall
          />
        </div>
      </div>
      <div className="pricing-item-cta mb-8">
        <Button isPrimary isBlock>
          Start free trial
        </Button>
      </div>
    </Card>
  );
}

Pricing.propTypes = {
  data: propTypes.object,
};
