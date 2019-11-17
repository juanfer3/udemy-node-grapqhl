function isValidPostalCode(postalCode, country) {
    let postalCodeRegex;

    switch (country) {
        case "United States of America":
        postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
        break;
        case "Canada":
        postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
        break;
        default:
        return true;
    }
    return postalCodeRegex.test(postalCode);
}
  
function postalCodeLabel(country) {
    const postalCodeLabels = {
        "United States of America": "Zip Code",
        Canada: "Postal Code"
    };
    return postalCodeLabels[country] || "Postal Code";
}

export default {
    isValidPostalCode,
    postalCodeLabel
}