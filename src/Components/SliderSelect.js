import GenericSlider from "./Common/GenericSlider";

const SliderSelect = ({ data, setData }) => {
    const bankLimit = 1000000;
    return (
        <div>
            <GenericSlider 
                onChange={(e, value) => {
                    setData({
                        ...data,
                        homeValue: value.toFixed(0),
                        downPayment: (0.05 * value).toFixed(0),
                        loanAmount: (0.95 * value).toFixed(0),
                    });
                }}
                defaultValue={data.homeValue}
                min={100000}
                max={bankLimit}
                steps={1000}
                unit="$"
                amount={data.homeValue}
                label="House Value"
                value={data.homeValue}
            />
            <GenericSlider 
                onChange={(e, value) => {
                    setData({
                        ...data,
                        downPayment: value.toFixed(0),
                        loanAmount: (data.homeValue - value).toFixed(0)
                    })
                }}
                defaultValue={data.downPayment}
                min={0}
                max={data.homeValue}
                steps={100}
                unit="$"
                amount={data.downPayment}
                label="Down Payment"
                value={data.downPayment}
            />
            <GenericSlider 
                onChange={(e, value) => {
                    setData({
                        ...data,
                        loanAmount: value.toFixed(0),
                        downPayment: (data.homeValue - value).toFixed(0)
                    })
                }}
                default={data.loanAmount}
                min={0}
                max={data.homeValue}
                steps={100}
                unit="$"
                amount={data.loanAmount}
                label="Loan Amount"
                value={data.loanAmount}
            />
            <GenericSlider
                onChange={(e, value) =>
                setData({
                    ...data,
                    interestRate: value,
                })
                }
                defaultValue={data.interestRate}
                min={2}
                max={18}
                steps={0.5}
                unit="%"
                amount={data.interestRate}
                label="Interest Rate"
                value={data.interestRate}
            />

        </div>
    )
}

export default SliderSelect;